import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&type=video&key=${apiKey}`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false); // Stop loading once the request is done
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    // Display the loading animation while videos are being fetched
    return (
      <div className="h-full bg-gray-50 pt-[80px] text-center">
        {/* <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
        <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-[600] text-black font-jakarta tracking-tight leading-tight pl-4 md:pl-8 mb-4 text-center ">
          Our Videos
        </h3>
        <p className="text-base md:text-[18px] font-normal text-black font-inter leading-tight pl-4 md:pl-8 mb-6 max-w-[650px] mx-auto">
          See our completed and ongoing projects in action. Check out the videos
          to learn what we can accomplish together!
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-blue font-bold font-jakarta">LOADING...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="videos pt-[80px] md:pt-[80px] bg-white w-full h-full text-center ">
      <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-[600] text-black font-jakarta tracking-tight leading-tight pl-4 md:pl-8 mb-4">
        Our Videos
      </h3>
      <p className="text-base md:text-[18px] font-normal text-black font-inter leading-tight pl-4 md:pl-8 mb-6 max-w-[650px] mx-auto">
        See our completed and ongoing projects in action. Check out the videos
        to learn what we can accomplish together!
      </p>
      <div className="videos-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 px-3 md:px-6 pt-4 md:pt-4 h-auto">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item text-left">
            <iframe
              title={video.snippet.title}
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="min-h-[250px]"
            ></iframe>
            <h3 className="font-jakarta font-semibold text-[21px] tracking-tight">
              {video.snippet.title}
            </h3>
            <p className="font-inter font-normal text-base">
              {video.snippet.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default YouTubeVideos;
