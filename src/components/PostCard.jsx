import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage,content}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-800 rounded-xl p-1 '>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-lg '  />

            </div>
            <h2
            className='text-[15px] sm:text-lg lg:text-xl font-bold text-white text-center hover:text-slate-400'
            >{title}</h2>
           <div className='text-white font-serif text-left' dangerouslySetInnerHTML={{ __html: content }} /> {/* Render content */}
        </div>
    </Link>
  )
}


export default PostCard