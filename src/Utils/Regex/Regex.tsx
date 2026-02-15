export class Regex{
    
    private static RPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    
    public static Empty(...Strings: string[]){
        return Strings.some((String)=>
        {
            return String == "" || String == null;
        })
    }
    public static Password(Password:string): boolean{
        return this.RPassword.test(Password)
    }
}