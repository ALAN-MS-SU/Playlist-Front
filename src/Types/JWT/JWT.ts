export class Token {
    public readonly ID: number;
    
    constructor(ID: number) {
        this.ID = ID;
    }
    public static Decoded(JWT: string): Token {
        const payload = JWT.split(".")[1]
        return  {ID:Number(JSON.parse(atob(payload)).sub)}
    }
}