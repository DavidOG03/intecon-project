import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false); // Stop loading once the request is done
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    // Display the loading animation while videos are being fetched
    return (
      <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gray-50">
        {/* <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
        <div className='text-blue font-bold font-jakarta'>LOADING...</div>
      </div>
    );
  }

  return (
    <div className="videos-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 px-3 md:px-6 pt-[80px] md:pt-[120px] bg-white h-full">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-item">
          <iframe
            title={video.snippet.title}
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
  );
};

export default YouTubeVideos;
