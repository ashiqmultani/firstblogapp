import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard, PostForm } from "../components";
import {  useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
function Home() {
   const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const item ={
        slug: "/add-post",
        active: authStatus,
    }
   
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

 

  // if (posts.length === 0) {
  return (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full sm:w-1/2 lg:w-1/2 flex flex-col justify-evenly">
            <h1 className="text-7xl font-bold text-left text-slate-100 shadow-black hover:text-gray-500">
              Welcome to <br />
              [Your Blog App Name]
            </h1>
            <p className="text-5xl mt-12 font-bold text-left text-slate-100 shadow-black hover:text-gray-500">
              Start exploring, writing, and connecting today. Together, we
              create a space where every story matters.
            </p>
            <p className="text-2xl mt-12 font-bold text-left text-slate-100 shadow-black hover:text-gray-500" >
              Join us in creating a vibrant, inclusive community where every
              story is valued and every perspective is heard. Your story starts
              here – let’s share it together.
            </p>
            <div className="flex justify-start mt-4 ">
                <button onClick={()=>{navigate(item.slug)}} className="bg-blue-600 font-bold text-white p-2 sm:p-4 lg:p-4 text-xs sm:text-lg  hover:bg-blue-700 rounded-xl ">Add Post</button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 flex sm:space-x-3 justify-around flex-wrap mt-3">
            <img
              src="/first.png"
              alt=""
              className="w-[40%] h-[30%] rounded-xl mt-6 opacity-70 hover:opacity-100"
            />
            <img
              src="/2ndTop.png"
              alt=""
              className="w-[40%] h-[20%] rounded-xl opacity-70 hover:opacity-100"
            />
            {/* <img src="/bg-image.jpg" alt="" className='w-[45%] h-[40%] rounded-xl bg-cover'/> */}
            <img
              src="/third.webp"
              alt=""
              className="w-[40%] h-[35%] rounded-xl bg-cover mt-6 opacity-70 hover:opacity-100"
            />
            <img
              src="/second.png"
              alt=""
              className="w-[40%] h-[40%] rounded-xl bg-cover opacity-70 hover:opacity-100"
            />
            <img
              src="/leftHalf.png"
              alt=""
              className="w-[40%] h-[35%] rounded-xl bg-cover opacity-70 hover:opacity-100"
            />
            <img
              src="/blogpost.jpg"
              alt=""
              className="w-[40%] h-[35%] rounded-xl bg-cover opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </Container>
    </div>
  );
  //  }
  // return (
  //     <div className='w-full py-8 '>
  //         <Container>
  //             <div className='flex flex-wrap'>
  //                 {posts.map((post) => (
  //                     <div key={post.$id} className='p-2 sm:w-1/2 lg:w-1/4 w-full'>
  //                         <PostCard {...post} />
  //                     </div>
  //                 ))}
  //             </div>
  //         </Container>
  //     </div>
  // )
}

export default Home;
