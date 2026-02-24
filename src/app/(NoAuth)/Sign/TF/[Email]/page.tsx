import {Screen} from "@/Shared/Components/Screen/Sign/TF/Screen"
export const dynamic = 'force-dynamic'
export default async function Page({params}:{params:Promise<{Email:string}>}){
    const {Email} = await params;
    return <><Screen Email={Email.replace("%40","@")}/></>
}