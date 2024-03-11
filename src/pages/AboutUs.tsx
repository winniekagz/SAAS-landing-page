import image from '../assets/Hero1.jpeg'
import AboutCard from '../componets/AboutCard'


const AboutUs = () => {
  return (
    <div className='flex-1 w-full h-full px-6 py-16'>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-2 ">
                <button className='text-purple bg-violet-100 rounded-lg px-10 py-3 my-3'>About us</button>
                <p className='w-2/3 text-gray-700 font-semibold text-[42px] tracking-wide my-2' >Creating Animation Masters,<br/>From Novice to Expert.</p>
                <p className='w-2/3 text-gray-500 text-[22px] my-3'>
                Crafting masters in animation is our forte, as our app seamlessly combines intuitive interfaces with comprehensive tutorials,<br/>
                ensuring you become a true animation virtuoso
        </p>
            </div>
            <div className=" flex-1 flex-end ">
                <img src={image} alt='image' className='w-auto h-full'/>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-16 ">
            <div className="">
                <AboutCard value='90 %' text='Experience academic success like never before with our online platform, boasting an impressive 90% success rate among students who have embraced our comprehensive study resources and interactive learning environment'/>
            </div>
            <div className="">
            <AboutCard value='90 %' text='Experience academic success like never before with our online platform, boasting an impressive 90% success rate among students who have embraced our comprehensive study resources and interactive learning environment'/>
            </div>
            <div className="">
            <AboutCard value='90 %' text='Experience academic success like never before with our online platform, boasting an impressive 90% success rate among students who have embraced our comprehensive study resources and interactive learning environment'/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs