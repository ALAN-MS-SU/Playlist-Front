"use server"
import { cookies } from 'next/headers';
import {AuthProvider} from "@/Context/Auth/Context";
import {Token} from "@/Types/JWT"
export default async function Layout({children}:{children:React.ReactNode}) {
    const Cookies = await cookies();
    const JWT = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME!)
    const Decoded: Token|undefined = JWT ? Token.Decoded(JWT.value) : undefined
    return <AuthProvider value={Decoded}>{children}</AuthProvider>
}