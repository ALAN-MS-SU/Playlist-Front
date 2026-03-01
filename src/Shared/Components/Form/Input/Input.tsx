import {InputHTMLAttributes} from "react";
import { FaSearch } from "react-icons/fa";
export function Input({Name,Label,className,...Props}:{Name:string,Label?:string} & Omit<InputHTMLAttributes<HTMLInputElement>,"name"|"id"> ){
    
    return <div className={`flex flex-row items-center justify-between w-full gap-2`}>
        {Label && <label className={`text-lg text-end w-1/4`} htmlFor={Name}>{Label}:</label>}
        <input className={`outline-none bg-bg w-3/4 h-8 rounded-lg text-sm flex flex-col justify-end px-2 shadow-md shadow-gray-600 ${className}`} 
               id={Name} name={Name} {...Props} />
    </div>
}
export function Search(){
    return <div className={`flex flex-row items-center justify-between w-auto gap-2`}>
        <div className={"bg-bg h-10 w-100 flex flex-row items-center justify-between px-2 shadow-sm shadow-gray-600 rounded-full"}>
            <FaSearch className={"cursor-pointer"} onClick={()=>{
                document.getElementById("Search")!.focus()
            }}  />
            <input className={`outline-none h-full w-94/100 flex flex-col justify-end `} 
               id={"Search"} name={"Search"}  />
        </div>
    </div>
}