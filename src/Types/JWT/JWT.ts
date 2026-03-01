import {jwtDecode} from "jwt-decode";

export class Token {
    public readonly ID: number;
    
    constructor(ID: number) {
        this.ID = ID;
    }
    public static Decoded(JWT: string): Token {
    return {ID:Number(jwtDecode(JWT).sub!)}
    }
}