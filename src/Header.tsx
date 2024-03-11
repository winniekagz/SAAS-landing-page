
import Button from './componets/Buttons'
import HeaderText from './componets/HeaderText'
import NavHeader from './componets/NavHeader'

export default function Header() {
  return (
    <div className='w-full bg-white p-4 flex justify-between items-start'>
       <div className=""> 
       <HeaderText text='Animate'/>
       </div> 
       <div className=" flex gap-x-6"> 
       <NavHeader text='Home'/>
        <NavHeader text='About'/>
        <NavHeader text='Contact Us'/>
       </div>
       <div className="">
        <Button text='Get Started' />
       </div>
    </div>
  )
}
