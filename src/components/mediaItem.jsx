import React from 'react';

const MediaItem = ({ title, description, imageUrl,videoUrl, movUrl }) => {
  return (
    <div className="media-card ">
     {videoUrl || movUrl ? (
        <video width="100%" controls className='max-h-[420px]'>
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          {movUrl && <source src={movUrl} type="video/quicktime" />}
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} className='max-h-[420px] object-cover' />
      )}
      
      <div className="media-content bg-blue text-white">
        <h3 className="media-title text-[1.5rem] font-jakarta px-[1rem] pb-[1rem]">{title}</h3>
        <p className="media-description text-base font-inter px-[1rem] pb-[1rem]">{description}</p>
      </div>
    </div>
  );
};

export default MediaItem;
