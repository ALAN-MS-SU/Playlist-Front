import {ButtonHTMLAttributes} from "react";

export function Button({Text,...Props}: ButtonHTMLAttributes<HTMLButtonElement> &{Text:string} ){
    return <button className={`bg-transparent border-2 border-solid border-primary-3 text-lg text-text-dark 
    px-7 py-3 font-bold cursor-pointer rounded-lg hover:bg-primary-3 hover:text-text-light transition-all ease-in duration-200`}
                   type={"button"} {...Props}>{Text}</button>
}