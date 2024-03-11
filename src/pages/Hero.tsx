
import { useEffect, useState } from 'react';
import HeroImg from '../assets/Hero.png'
import Input from '../componets/Input';
import Button from '../componets/Buttons';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      AOS.init();
    }, [])
    useEffect(() => {
      const handleImageLoad = () => {
        setImageLoaded(true);
      };
  
      const image = new Image();
      image.src = HeroImg;
      image.onload = handleImageLoad;
  
     
      return () => {
        image.onload = null;
      };
    }, []);
  return (
    <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1600"
     className='w-full bg-purple h-full flex justify-center py-32'>
  <div className="">
  <p
   className=' relative text-6xl md:text-[250px] lg:text-[400px] w-full text-center
   bg-clip-text text-transparent bg-gradient-to-r from-light-blue  to-light-purple'>ANIMATE</p>
    


    <div className={`flex justify-center h-44 ${imageLoaded ? 'transition-all duration-1000 ease-in delay-1000' : ''}`}>
          
        <img src={HeroImg} alt='Hero'
        data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"
         className='h-96 absolute inset-y-[498px] skew-x-90 -rotate-6  -skew-y-6'/>
    </div>
    <div className="flex justify-between flex-col md:flex-row items-end ">
    <div className="">
        <p className='w-2/3 text-bg-main'>
            Our platform Helps tou create  dynamic quizes to help you  learna nd shappen your animation stills
        </p>
        <div className="flex gap-3 mt-3">
        <Input placeholder='Enter your  Email' name='email'/>
        <Button bgColor='white' text='submit' textColor='dark'/>
        </div>
    </div>
    <div className=" flex gap-3 justify-end">
     <div className=" my-2">
   
     </div>
     <p className='w-2/3 text-bg-main'>
            Our platform Helps tou create  dynamic quizes to help you  learna nd shappen your animation stills
        </p>
    </div>
</div>
    </div>
    </div>
  )
}



export default Hero
