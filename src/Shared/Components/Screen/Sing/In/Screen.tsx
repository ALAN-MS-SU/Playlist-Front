"use client"
import {Form} from "@/Shared/Components/Form"
import {Input} from "@/Shared/Components/Form/Input";
import {Tittle} from "@/Shared/Components/Text";
import {Button} from "@/Shared/Components/Button";
import {Regex} from "@/Utils/Regex";
import {PopLoading} from "@/Shared/Components/Popup/Loading";
export function SignIn(){
  
    return <>
        <PopLoading/>
    <div className={"flex flex-col justify-center items-center h-screen"}>
        <Form onSubmit={async (e)=>{
            e.preventDefault();
            const [Email,Password] = new FormData(e.currentTarget).values().map((Value)=>String(Value));
            
            if(Regex.Empty(Email,Password)) {
              //  document.dispatchEvent("Error")
                return;
            }
            
        }} className={`max-w-2xl h-120`}>
            <Tittle Text={"Entrar"}/>
            <Input placeholder={"Email"} Name={"Email"} Label={"Email"} type={"email"}/>
            <Input placeholder={"Senha"} Name={"Password"} Label={"Password"} type={"password"}/>
            <Button type={"submit"} Text={"Entrar"}/>
        </Form>
    </div>
    </>
}