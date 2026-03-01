"use client"
import {Form} from "@/Shared/Components/Form"
import {Input} from "@/Shared/Components/Form/Input";
import {Tittle} from "@/Shared/Components/Text";
import {Button} from "@/Shared/Components/Button";
import {Regex} from "@/Utils/Regex";
import {useState} from "react";
import {ScreenLoading} from "@/Shared/Components/Form/Request/Loading";
import {PopError} from "@/Shared/Components/Form/Request/Error";
import {UserService} from "@/Services/API/User";
import {useRouter} from "next/navigation";
import Link from "next/link";

export function Screen(){
    const Router = useRouter();
  const [Loading,SetLoading]=useState<boolean>(false);
  const [Error,SetError]=useState<string|undefined>(undefined);
    return <>
        <PopError Close={SetError} Show={!!Error} Text={Error||""}/>
     <ScreenLoading Show={Loading}/>
    <div className={"flex flex-col justify-center items-center h-screen"}>
        <Form onSubmit={async (e)=>{
            e.preventDefault();
            SetLoading(true);
            const [Email,Password] = new FormData(e.currentTarget).values().map((Value)=>String(Value));
            
            if(Regex.Empty(Email,Password)) {
                SetError("Preencha todos os campos.")
                SetLoading(false);
                return;
            }
            if(!Regex.Password(Password)){
                SetError("Use uma senha forte.")
                SetLoading(false);
                return;
            }
            const Login = await UserService.SignIn({Email,Password})
            if (Login) {
                return Router.push(`/Sign/QrCode/${Email}`);
            }
            SetError("Credenciais inválidas")
            SetLoading(false);
            
        }} className={`max-w-2xl h-130 py-15 relative`}>
            <Tittle Text={"Entrar"}/>
            <Input placeholder={"Email"} Name={"Email"} Label={"Email"} type={"email"}/>
            <Input placeholder={"Senha"} Name={"Password"} Label={"Password"} type={"password"}/>
            <Button type={"submit"} Text={"Entrar"}/>
            <div className={"w-full flex flex-col justify-between items-center absolute bottom-2"}>
                <p className={"text-sm"}>Não tem uma conta? <Link href={"/Sign/Up"} className={"text-primary-4 underline"} >Criar conta</Link></p>
                <p className={"text-sm"}>Não lembra a senha? <Link href={"/Sign/Password"} className={"text-primary-4 underline"} >Esqueci a senha</Link></p>
            </div>
        </Form>
    </div>
    </>
}