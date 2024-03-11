interface CardProps{
    text:string,
    value:string
}

export default function AboutCard({text,value}:CardProps) {
  return (
    <div className='bg-gradient-to-r from-bg-main to-bg-white p-8'>
        <p className="text-center text-purple text-[32px] font-bold">
{value}
        </p>
        <p className=" text-gray-500 text-[14px] my-3">
            {text}
        </p>
    </div>
  )
}
