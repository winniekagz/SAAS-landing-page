import {  useRef } from 'react';
import image1 from '../../assets/industrial-designer-digital-art.jpg'

import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function AnimatedHero(){ 
    const tl=gsap.timeline()
      const container = useRef<HTMLDivElement | null>(null);    
      const header = "Create. Animate. Learn.";
  
  useGSAP(() => {
    tl.to('.title',{ y: "20",delay:'no-delay',duration:1,ease: "power1.out" })
    tl.to('.subTitle',{ y: "20", delay:0.1 ,duration:1 ,ease: "power1.out"})
    tl.to('.description',{ y: "20", delay:0.1,duration:1,ease: "power1.out" })
    tl.to('.image',{ y: "50", delay:0.2,ease: "power1.out",})
    


    },
    { scope: container })
  

      gsap.registerPlugin(ScrollTrigger);
  
    return (
        <div  className=" mainContainer relative   flex justify-center py-20 items-center px-2 bg-gradient-to-r  md:px-8 lg:px-12 from-bg-main via-light-purple/50 to-purple/60">
            <div  ref={container}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="h-full lg:col-span-3 w-full  to-bg-main translate-x-12  flex  flex-col justify-center items-center gap-4">
            <div className="transform  w-full flex-wrap 
             md:w-4/5 break-words">
                

<p 
        className=" title mb-6 text-5xl md:text-[60px] lg:text-[80px] text-left font-bold
        bg-clip-text text-transparent bg-gradient-to-r from-purple via-light-purple to-purple"
      >
 {header}
      </p>
      <p className=' subTitle my-4 text-light-blue text-left text-3xl md:text-[30px] lg:text-[40px] font-semibold'>Bring ideas to life with dynamic animations</p>
      <p className='description my-2 text-gray-600 text-xl font-meduum text-left'>Unleash your creativity with interactive quizzes and hands-on projects designed to sharpen your animation skills. Join a community of learners turning imagination into motion!</p>
      
      </div>
         </div>
         <div className=" lg:col-span-2  flex justify-between items-center 
         ">
            <div className="h-full w-full md:w-4/5">
            <img src={image1} alt="designer" className='image object-contain h-full w-full' />
            </div>
         </div>
         </div>
    
        </div>
    )
}

