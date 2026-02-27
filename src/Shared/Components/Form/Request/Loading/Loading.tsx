"use client"
import {useState} from "react";
import Image from "next/image";
import Loading from "@/Assets/Loding.gif";
export function ScreenLoading({Show}:{Show:boolean}){
    
    return<div className={`${Show ? "flex" : "hidden" } absolute w-screen h-screen bg-black opacity-50 flex-col justify-center items-center z-20`}>
       <Image alt={"Loading"} src={Loading} />
   </div>
    
}
export function ContentLoading({Show}:{Show:boolean}){

    return<div className={`${Show ? "flex" : "hidden" } w-full h-full bg-primary-4 opacity-80 flex-col justify-center items-center`}>
        <Image alt={"Loading"} src={Loading} />
    </div>

}