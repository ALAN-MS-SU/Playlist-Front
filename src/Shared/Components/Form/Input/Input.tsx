import {InputHTMLAttributes} from "react";
export function Input({Name,Label,className,...Props}:{Name:string,Label:string} & Omit<InputHTMLAttributes<HTMLInputElement>,"name"|"id"> ){
    
    return <div className={`flex flex-row items-center justify-between w-full gap-2`}>
        <label className={`text-lg text-end w-1/3`} htmlFor={Name}>{Label}:</label>
        <input className={`outline-none bg-bg w-2/3 h-8 rounded-lg text-sm flex flex-col justify-end px-2 shadow-md shadow-gray-600 ${className}`} id={Name} name={Name} {...Props} />
    </div>
}