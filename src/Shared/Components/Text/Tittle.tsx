import {HTMLAttributes} from "react";

export  function Tittle({Text,className}:{Text:string}&Pick<HTMLAttributes<HTMLHeadingElement>,"className">){
    
    return <span className={`text-center font-bold text-2xl ${className}`}>{Text}</span>
}