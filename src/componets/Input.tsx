
interface InputProps{
    placeholder:string,
    name:string
}

export default function Input({name,placeholder}:InputProps) {
  return (
    <div>
        <div>
            <input type="text"
             id="first_name" 
             className="bg-gray-50/20 border h-[48px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
             placeholder={placeholder} 
             name={name}
             required />
        </div>
    </div>
  )
}
