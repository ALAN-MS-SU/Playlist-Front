"use server"
import { cookies } from 'next/headers';
import {AuthProvider} from "@/Context/Auth/Context";
import {Token} from "@/Types/JWT"
import {redirect} from "next/navigation";
export default async function Layout({children}:{children:React.ReactNode}) {
    const Cookies = await cookies();
    const JWT = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME!)
    if(!JWT) return redirect("/Sign/In");
    const Decoded: Token =  Token.Decoded(JWT.value)
    return <AuthProvider value={Decoded}>{children}</AuthProvider>
}