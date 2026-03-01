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
            const [Name,Email,Password] = new FormData(e.currentTarget).values().map((Value)=>String(Value));
            
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
            let Res = await UserService.SignUp({Name,Email,Password})
            if(!Res) {
                SetError("Erro ao criar conta.");
                SetLoading(false);
                return;
            }
            Res = await UserService.SignIn({Email,Password})
            if (Res) {
                return Router.push(`/Sign/QrCode/${Email}`);
            }
            SetError("Ao gerar o QrCode.")
            SetLoading(false);
            
        }} className={`max-w-2xl h-140 py-15 relative z-10`}>
            <Tittle Text={"Criar conta"}/>
            <Input placeholder={"Nome"} Name={"Name"} Label={"Nome"} type={"text"}/>
            <Input placeholder={"Email"} Name={"Email"} Label={"Email"} type={"email"}/>
            <Input placeholder={"Senha"} Name={"Password"} Label={"Password"} type={"password"}/>
            <Button type={"submit"} Text={"Cadastrar"}/>
            <div className={"w-full flex flex-col justify-between items-center absolute bottom-2"}>
                <p className={"text-sm"}>Já tem uma conta? <Link href={"/Sign/In"} className={"text-primary-4 underline"} >Entrar</Link></p>
                <p className={"text-sm"}>Não lembra a senha? <Link href={"/Sign/Password"} className={"text-primary-4 underline"} >Esqueci a senha</Link></p>
            </div>
        </Form>
    </div>
    </>
}