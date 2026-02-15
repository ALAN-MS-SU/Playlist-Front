"use client"
import {FormHTMLAttributes} from "react";

export function Form({children, className,...Props}: {children:React.ReactNode}& FormHTMLAttributes<HTMLFormElement>){
    
    return <form className={`bg-primary-1 w-full rounded-3xl shadow-2xl flex flex-col items-center justify-between px-40 py-10 ${className}`} {...Props}>
        {children}
    </form>
}