import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PortfolioCard from "../components/portfolioCard";
import highway from "../../public/images/highway.webp";
import structure from "../../public/images/ogudu-3.webp";
import geoscience from "../../public/images/geosciences.webp";
import ndt from "../../public/images/testing.webp";
import Quote from "../components/quote";


const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

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
      <div className="h-[100vh] bg-gray-50 py-xxl text-center">
        {/* <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
        <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-[600] text-black font-host tracking-tight leading-tight pl-4 md:pl-8 mb-4 text-center ">
          Our Videos
        </h3>
        <p className="text-base md:text-[18px] font-normal text-black font-jakarta leading-tight pl-4 md:pl-8 mb-6 max-w-[650px] mx-auto">
          See our completed and ongoing projects in action. Check out the videos
          to learn what we can accomplish together!
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-blue font-bold font-jakarta">LOADING...</div>
        </div>
      </div>
    );
  }

  const fadeup = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
        delay: 0.2,
      },
    },
  };

  return (
    <main className="videos pt-[80px] bg-white w-full text-center ">
      <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-[600] text-black font-host tracking-tight leading-tight pl-4 md:pl-8 mb-4">
        Our Videos
      </h3>
      <p className="text-base md:text-[18px] font-normal text-black font-jakarta leading-tight px-4 lg:px-12 mb-6 max-w-[650px] mx-auto">
        See our completed and ongoing projects in action. Check out the videos
        to learn what we can accomplish together!
      </p>
      <section className="videos-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 px-3 md:px-6 pt-4 md:pt-4 h-auto">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item text-left">
            <iframe
              title={video.snippet.title}
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="min-h-[250px]"
            ></iframe>
            <h3 className="font-host font-semibold text-[21px] tracking-tight">
              {video.snippet.title}
            </h3>
            <p className="font-jakarta font-normal text-base">
              {video.snippet.description}
            </p>
          </div>
        ))}
      </section>

      <section className=" my-xxl text-center px-4 lg:px-3xl">
        <motion.h3
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[34px] mb-6 md:text-[54px] tracking-tight text-black font-host font-medium capitalize text-center pb-5 max-w-[400px] md:max-w-[600px] mx-auto leading-tight"
        >
          Explore Our Project Portfolio
        </motion.h3>
        <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-end">
          <PortfolioCard
            img={highway}
            title="Highway and Bridges Projects"
            description=""
            link="/highway-bridges-design"
          />
          <PortfolioCard
            img={structure}
            title="Structural Design Projects"
            description=""
            link="/structural-design"
          />
          <PortfolioCard
            img={geoscience}
            title="Geosciences Projects"
            description=""
            link="/geosciences"
          />
          <PortfolioCard
            img={ndt}
            title="Non-Destructive Testing Projects"
            description=""
            link="/non-destructive-testing"
          />
        </div>
      </section>
      <Quote/>
    </main>
  );
};

export default YouTubeVideos;
