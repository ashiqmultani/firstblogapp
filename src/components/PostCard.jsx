import React, { useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_CONTENT_LENGTH = 100;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const safeContent = content || ''; // Default to an empty string if content is null or undefined

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-[80%] bg-gray-800 rounded-xl p-1  hover:border hover:border-gray-400'>
       
        <h2
          className='text-[15px] sm:text-lg lg:text-2xl font-bold text-white text-left hover:text-slate-400'
        >
          {title}
        </h2>
        <div className='text-white font-serif text-left'>
          <div 
            dangerouslySetInnerHTML={{ 
              __html: isExpanded ? safeContent : safeContent.slice(0, MAX_CONTENT_LENGTH) 
            }} 
          />
          {safeContent.length > MAX_CONTENT_LENGTH && (
            <span 
              className='text-blue-500 cursor-pointer'
              onClick={toggleReadMore}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </span>
          )}
        </div>
        <div className='w-full flex justify-center'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-lg w-full h-60 mt-6' 
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
