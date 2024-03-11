import { Menu } from '@headlessui/react'



interface ButtonProps {
    text:string
    bgColor?:string
    textColor?:string
}
export default function Button({text,bgColor,textColor}:ButtonProps) {
    const bgColorClass=`bg-${bgColor}`
    const textColorClass=`text-${textColor}`
  return (
    <Menu>
        <Menu.Button 
        className={`${bgColor?bgColorClass:'bg-dark-purple'} 
        ${textColor?textColorClass:'text-white '} 
        text-[18px] transition ease-in-out delay-150 hover:traslate-y-1
        font-bold hover:scale-110 hover:bg-light-purple duration-300 hover:delay-300
        px-4
        py-3 h-[48px]
        rounded-lg 
        shadow
        hover:`} >
            {text}
        </Menu.Button>
    </Menu>
  )
}
