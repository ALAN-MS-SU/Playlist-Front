"use client"
import {UserService} from "@/Services/API/User";
import {useEffect, useState} from "react";
import {ScreenLoading} from "@/Shared/Components/Form/Request/Loading";
import {useRouter} from "next/navigation";
import {Tittle} from "@/Shared/Components/Text";
import {Button} from "@/Shared/Components/Button";
import Image from "next/image"
export function Screen({Email}:{Email:string}){
    const Router = useRouter();
    const [QrCode, setQrCode] = useState<string|undefined>();
    useEffect(()=>{
       async function GetQrCode(){
        const Blob = await UserService.QrCode(Email)
           if(!Blob) return Router.replace("/Sign/In")
           setQrCode(URL.createObjectURL(Blob));
       }
       GetQrCode();
    },[])
    if(!QrCode) return <ScreenLoading Show={true}/>
    return <div className={"w-screen h-screen flex items-center justify-center"}>
        <div className={"max-w-175 w-full h-150 bg-primary-1 rounded-2xl shadow-2xl flex flex-col items-center justify-between py-10"}>
            <Tittle Text={"Leia o QRCode com seu app de autenticação"}/>
               <Image width={0} height={0} src={QrCode} alt="QrCode" className="w-75 h-75 border-primary-4 border-2 border-solid " />
            <Button onClick={()=>Router.replace(`/Sign/TF/${Email}`)} Text={"Continuar"}/>
        </div>
    </div>
}
