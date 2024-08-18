import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "./mediaItem";

const ProjectMedia = () => {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/galleries?populate=*");

        const fetchedItems = response.data.data.flatMap((item) =>
          item.attributes.project_media.data.map((media) => ({
            id: media.id,
            title: media.attributes.name,
            description: media.attributes.alternativeText || "No description provided.",
            imageUrl: media.attributes.formats?.medium?.url ? `http://localhost:1337${media.attributes.formats.medium.url}` : '',
            videoUrl: media.attributes.url && media.attributes.mime.startsWith('video/') ? `http://localhost:1337${media.attributes.url}` : '',
            movUrl: media.attributes.ext === '.MOV' ? `http://localhost:1337${media.attributes.url}` : ''
          }))
        );

        setMediaItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="project-media">
      {/* {mediaItems.map(item => (
        <div key={item.id}>
          <h2>{item.attributes.name}</h2> 
          <p>{item.attributes.caption || 'No description available'}</p> 
          <img
            src={`http://localhost:1337${item.attributes.formats.large?.url || item.attributes.url}`}
            alt={item.attributes.name}
            style={{ width: '100%', height: 'auto' }} // Adjust the styling as needed
          />
        </div>
      ))} */}
      <h3 className="text capitalize font-jakarta font-semibold tracking-tight text-black text-[36px] md:text-[45px] xl:text-[54px] text-center leading-[1.2] mb-[60px] mx-auto max-w-[720px]">
        Project Videos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-3">
        {mediaItems.map((mediaItem) => (
          <div key={mediaItem.id}>
            <MediaItem
              title={mediaItem.title}
              description={mediaItem.description}
              imageUrl={mediaItem.imageUrl}
              videoUrl={mediaItem.videoUrl}
              movUrl={mediaItem.movUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMedia;
