"use client"

import {Form} from "@/Shared/Components/Form/Template";
import {Input} from "@/Shared/Components/Form/Input";
import {Tittle} from "@/Shared/Components/Text";
import {Button} from "@/Shared/Components/Button";
import {ScreenLoading} from "@/Shared/Components/Form/Request/Loading";
import {useRouter} from "next/navigation";
import {PopError} from "@/Shared/Components/Form/Request/Error";
import {useState} from "react";
import {UserService} from "@/Services/API/User";
import {AwaiterMulti} from "next/dist/server/after/awaiter";
export function Screen({Email}:{Email:string}){
    const Router = useRouter();
    const [Loading,SetLoading]=useState<boolean>(false);
    const [Error,SetError]=useState<string|undefined>(undefined);
    return <>
        <ScreenLoading Show={Loading}/>
        <PopError Show={!!Error} Close={SetError} Text={Error||""}/>
        <div className={"flex flex-col w-screen h-screen items-center justify-center"}>
        <Form onSubmit={async (e)=>{
            e.preventDefault();
            SetLoading(true);
            const Code = String(new FormData(e.currentTarget).get("Code"));
            const JWT = await UserService.TF({Email,Code})
            if(JWT) {
                Router.replace("/");
                SetLoading(false);
                return;
            }
            SetError("Autenticação negada.");
            SetLoading(false);
        }} className={"max-w-2xl h-100"}>
            <Tittle Text={"Insira o código"}/>
          <Input Name={"Code"} Label={"Código"} placeholder={"Código"} />
          <Button type={"submit"} Text={"Validar"}/>  
        </Form>
    </div></>
} 