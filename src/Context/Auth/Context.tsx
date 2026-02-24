"use client"
import {createContext, ReactNode} from "react";
import {Token} from "@/Types/JWT";

const AuthContext = createContext<Token|undefined>(undefined);

export function AuthProvider({ value,children }: { value:Token|undefined,children: ReactNode }) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}