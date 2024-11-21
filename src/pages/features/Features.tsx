import { useRef } from 'react';
import image from '../../assets/hero.avif'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import FeatureCard from '../../componets/FeatureCard';
export default function Features() {
  const tl=gsap.timeline()
  const container = useRef();    


useGSAP(() => {
tl.to('.title',{ y: "20",delay:'no-delay',duration:1,ease: "power1.out" })
tl.to('.subTitle',{ y: "20", delay:0.1 ,duration:1 ,ease: "power1.out"})
tl.to('.description',{ y: "20", delay:0.1,duration:1,ease: "power1.out" })
tl.to('.image',{ y: "50", delay:0.2,ease: "power1.out",})


},
{ scope: container })


  gsap.registerPlugin(ScrollTrigger);
  return (
    <div className="px-6 py-6 flex-1 h-full w-full">
<div className="flex justify-center">
     <button className='text-purple bg-violet-100 rounded-lg px-10 py-3 my-3 '>Features</button>
     
     </div>
     <p className='text-center text-dark capitalize text-[42px] font-bold my-3'>Powerful Features For Seamless Learning</p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
            <div className="w-4/5 my-3">
            <FeatureCard
             title='Interactive Learning Modules' 
             description='Dive into the world of web animation with engaging, hands-on modules that guide you through the intricacies of motion design, ensuring a dynamic and effective learning experience.'/>
            </div>
            <div className="w-4/5 my-3">
            <FeatureCard 
            title=' Real-world Project Integration'
             description='Elevate your skills by applying theoretical knowledge to practical scenarios through our systems unique feature of integrating real-world projects, allowing you to master web animation concepts with tangible, portfolio-worthy results.'/>
            </div>
          
        </div>
        <div className="">
        <div className=" flex-1 flex-end ">
                <img src={image} alt='image' className='w-auto h-full object-contain'/>
            </div>
        </div>
     </div>
    </div>
  )
}