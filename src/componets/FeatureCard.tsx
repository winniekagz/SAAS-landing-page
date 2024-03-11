interface CardProps{
    title:string,
    description:string
}
export default function FeatureCard({title,description}:CardProps) {
  return (
    <div className="bg-gradient-to-r from-bg-main to-bg-white p-8">
        <p className="text-light-purple my-2 fonnt-bold text-[28px]">{title}</p>
        <p className="text-gray-500 text-[16px] my-3">{description}</p>
    </div>
  )
}
