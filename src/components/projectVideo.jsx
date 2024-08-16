import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:1337//api/galleries/');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.attributes.title}</h2>
          <p>{video.attributes.description}</p>
          <video controls src={`http://localhost:1337${video.attributes.video.data.attributes.url}`} />
          {/* <a href={video.attributes.youtubeLink} target="_blank" rel="noopener noreferrer">Watch on YouTube</a> */}
        </div>
      ))}
    </div>
  );
};

export default ProjectVideos;
