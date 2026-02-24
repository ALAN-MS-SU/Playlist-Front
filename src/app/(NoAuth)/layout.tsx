"use server"
import { cookies } from 'next/headers';
import {redirect} from "next/navigation";

export default async function Layout({children}:{children:React.ReactNode}) {
    const Cookies = await cookies();
    const Token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME!);
    if(Token) return redirect("/");
    return <>{children}</>
}