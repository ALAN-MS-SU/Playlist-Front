"use client"
import {useState} from "react";
import Image from "next/image";
import Loading from "@/assets/Loding.gif";
export function PopLoading(){
    const [Show,SetShow] = useState(false);
   document.addEventListener("Error",()=>{
       SetShow(!Show);
   })
    return<div className={`${Show ? "block" : "hidden" } absolute w-screen h-screen bg-black opacity-5`}>
       <Image alt={"Loading"} src={Loading} />
   </div>
    
}