"use client"
import {useState} from "react";
import Image from "next/image";
import Loading from "@/Assets/Loding.gif";
export function ScreenLoading({Show}:{Show:boolean}){
    
    return<div className={`${Show ? "flex" : "hidden" } absolute w-screen h-screen bg-black opacity-50 flex-col justify-center items-center`}>
       <Image alt={"Loading"} src={Loading} />
   </div>
    
}