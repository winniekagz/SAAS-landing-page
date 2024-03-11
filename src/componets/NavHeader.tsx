

type Props = {
    text:string
}

export default function NavHeader({text}: Props) {
  return (
        <div>
            <p className='font-[400] text-dark-purple text-[18px] hover:text-light-purple transition ease-in-out  delay-150 hover:translate-y-1 hover:scale-110 delay-600'> 
            {text}
            </p>
        </div>
   
  )
}




