
type Props = {
    text:string
}

export default function HeaderText({text}: Props) {
  return (
    <div>
        <p className='font-[800] text-dark-purple text-[28px]'> {text}</p>
    </div>
  )
}