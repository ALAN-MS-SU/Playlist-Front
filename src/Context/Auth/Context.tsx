"use client"
import {createContext, ReactNode} from "react";
import {Token} from "@/Types/JWT";

export const AuthContext = createContext<Token>(new Token(1));

export function AuthProvider({ value,children }: { value:Token, children: ReactNode }) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}