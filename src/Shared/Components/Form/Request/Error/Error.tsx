"use client"
import { IoMdClose } from "react-icons/io";
import {Dispatch, SetStateAction} from "react";
export function PopError({Show,Close ,Text}: { Show: boolean, 
    Close:  Dispatch<SetStateAction<string | undefined>>,
    Text:string }) {

    return <><div
        className={`${Show ? "flex" : "hidden"} absolute w-screen h-screen bg-black opacity-50 flex-col justify-center items-center`}>
    </div> 
        <div className={`${Show ? "flex" : "hidden"} absolute flex flex-col justify-center items-center w-screen h-screen`}>
          
            <div className={"w-125 h-75 bg-bg relative flex flex-col justify-center items-center rounded-2xl"}> 
                <IoMdClose className={"text-4xl absolute top-2 right-2 text-err cursor-pointer hover:text-err-hover transition-colors ease-in"} 
                           onClick={()=>Close(undefined)}/>
                <p className={"font-bold text-err"}>{Text}</p>
            </div>
        </div>
    </>

}