"use client"
import {User} from "@/Types/User"
import {Tittle} from "@/Shared/Components/Text";
import {Button} from "@/Shared/Components/Button";
import {UserService} from "@/Services/API/User";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {PopError} from "@/Shared/Components/Form/Request/Error";
import {ScreenLoading} from "@/Shared/Components/Form/Request/Loading";

export function Home({ID,Name, Email}:Pick<User,"Name"|"Email"|"ID">) {
    const Router = useRouter();
    const [Loading,SetLoading]=useState<boolean>(false);
    const [Error,SetError]=useState<string|undefined>(undefined);
    return <>
        <PopError Close={SetError} Show={!!Error} Text={Error||""}/>
        <ScreenLoading Show={Loading}/>
        <div className={"w-screen h-screen flex flex-col items-center justify-center "}>
        <div className={"w-120 h-100 py-10 flex flex-col items-center justify-between bg-primary-1 rounded-2xl shadow-xl"}>
   <Tittle Text={`Autenticado na conta`}/>
        <div className={"w-80 flex flex-col items-center justify-between bg-gray-100 rounded-2xl p-5"}>
        <pre className={"text-start w-full"}>
           {"{"}
            <br/>
            <code >&nbsp;&nbsp;{`"Nome"`}: {`"${Name}"`}</code>
            <br/>
            <code >&nbsp;&nbsp;{`"Email"`}: {`"${Email}"`}</code>
            <br/>
            {"}"}
        </pre>
            
        </div>
        <div className={"w-80 flex flex-row items-center justify-between"}>
            <Button Text={"Excluir"} onClick={async ()=>{
                SetLoading(true);
                const Res = await UserService.Delete({ID});
                if(Res) {
                    Router.replace("/Sign/In")
                    SetLoading(false);
                    return
                }
                SetLoading(false);
                SetError("Erro ao sair da conta.")
            }}/>
            <Button Text={"Sair"} onClick={async ()=>{
                SetLoading(true);
                const Res = await UserService.SignOut();
                if(Res) {
                    Router.replace("/Sign/In")
                    SetLoading(false);
                    return
                }
                SetLoading(false);
                SetError("Erro ao sair da conta.")
            }}/>
           
        </div>
    </div>
</div></>
}