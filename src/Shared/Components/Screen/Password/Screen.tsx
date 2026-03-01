"use client"
import {Form} from "@/Shared/Components/Form";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Tittle} from "@/Shared/Components/Text";
import {ScreenLoading} from "@/Shared/Components/Form/Request/Loading";
import {PopError} from "@/Shared/Components/Form/Request/Error";
import {Input} from "@/Shared/Components/Form/Input";
import {Button} from "@/Shared/Components/Button";
import {PasswordService} from "@/Services/API/User/Password";
function Screen(){
    const Router = useRouter();
    const [Loading,SetLoading]=useState<boolean>(false);
    const [Error,SetError]=useState<string|undefined>(undefined);
    const [Step, setStep] = useState(0);
    const [Email, setEmail] = useState<string|undefined>(undefined);
   
    const Init = async (Target: HTMLFormElement)=>{
      
        const FormEmail = new FormData(Target).get("Email")!.toString();
        const Res = await PasswordService.Init({Email:FormEmail})
        if(!Res){
            SetError("Falha ao validar email.");
            SetLoading(false);
            return;
        }
        setStep(1);
        setEmail(FormEmail)
        SetLoading(false);
        return;
    }
    const TF = async (Target: HTMLFormElement)=>{
      
        const Code = new FormData(Target).get("Code")!.toString();
        const Res = await PasswordService.TF({Email:Email!,Code})
        if(!Res){
            SetError("Código invalido.");
            SetLoading(false);
            return;
        }
        setStep(2);
        SetLoading(false);
        return;
    }
    const Update = async (Target: HTMLFormElement)=>{
        const Password = new FormData(Target).get("Password")!.toString();
        const Res = await PasswordService.Update({Email:Email!,Password})
        if(!Res){
            SetError("Falha ao trocar a senha.");
            SetLoading(false);
            return;
        }
        Router.replace("/Sign/In");
        SetLoading(false);
        return;
    }
    return <>
        <ScreenLoading Show={Loading}/>
        <PopError Show={!!Error} Close={SetError} Text={Error||""}/>
        <div className={"h-screen w-screen flex flex-col justify-center items-center"}>
        <Form onSubmit={async (e)=>{
            e.preventDefault();
            SetLoading(true);
            if(Step == 0 && !Email) {
                await Init(e.currentTarget)
                return;
            } 
            if(Step == 1 && Email) {
                await TF(e.currentTarget)
                return;
            } 
            if(Step == 2 && Email) {
                await Update(e.currentTarget)
                return;
            }
            
        }} className={"max-w-2xl h-90 py-15 px-10"}>
            {(Step == 0 && !Email) && <>
                <Tittle Text={"Insira seu email"}/>
                <Input Label={"Email"} Name={"Email"} type={"email"} placeholder={"Email"}/>
                <Button type={"submit"} Text={"Enviar"}/>
            </>}
            {(Step == 1 && Email) && <>
                <Tittle Text={"Insira o código de autenticação"}/>
                <Input Label={"Código"} Name={"Code"} type={"text"} placeholder={"Código"}/>
                <Button type={"submit"} Text={"Enviar"}/>
            </>}
            {(Step == 2 && Email) &&  <>
                <Tittle Text={"Insira sua nova senha"}/>
                <Input Label={"Senha"} Name={"Password"} type={"password"} placeholder={"Nova Senha"}/>
                <Button type={"submit"} Text={"Trocar"}/>
            </> }
        </Form>
    </div>
       
    
      
   
    </>
}

export default Screen
