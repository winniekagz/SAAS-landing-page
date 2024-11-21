import { useEffect, useState } from "react";
import HeroImg from "../../assets/Hero.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Input from "../../componets/Input";
import Button from "../../componets/Buttons";

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1600"
      className=" w-full h-full flex flex-col items-center py-16 md:py-32 bg-purple"
    >
      {/* Main Heading */}
      <p
        className="relative text-5xl md:text-[150px] lg:text-[250px] text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-light-blue to-light-purple"
      >
        ANIMATE
      </p>

      {/* Hero Image */}
      <div
        className={`flex justify-center items-center h-60 md:h-96 ${
          imageLoaded ? "transition-all duration-1000 ease-in delay-1000" : ""
        }`}
      >
        <img
          src={HeroImg}
          alt="Hero"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="w-3/4 h-auto md:w-auto md:h-96 
          transform absolute top-[40%] -rotate-6 -skew-y-6 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10 w-full max-w-7xl px-4 md:px-8">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-bg-main text-base md:text-lg">
            Our platform helps you create dynamic quizzes to improve your
            animation skills.
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <Input placeholder="Enter your Email" name="email" />
            <Button bgColor="white" text="Submit" textColor="dark" />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-bg-main text-base md:text-lg text-center md:text-right">
          <p>
            Take on challenges, build interactive projects, and bring your
            animations to life with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
