import {API} from "../";
import {User} from "@/Types/User"

export class UserService {
    
    public static async Get({ID,Token}:Pick<User, "ID">&{Token:string}):Promise<Omit<User,"Password">|undefined> {
        return await API.get(`/User/Profile/${ID}`,{ headers:{
                Cookie:`${process.env.NEXT_PUBLIC_TOKEN_NAME!}=${Token}`
            }}).then(data =>{
            return data.data
        }).catch(err=>{return undefined})
    }
    public static async SignIn({Email,Password}: Pick<User,"Email"|"Password">){
        return await API.post("/User/SignIn", {Email, Password}).then(res => {
            return res.status === 202;

        }).catch(()=>false);
    }
    public static async SignUp({Name,Email,Password}:{Name:string,Email:string,Password:string}){
        return await API.post("/User", {Name,Email, Password}).then(res => {
            return res.status === 201;
        }).catch(()=>false);
    }
    public static async SignOut(){
        return await API.head("/User",{withCredentials:true}).then(res=>{return res.status == 204}).catch(()=>false);
    }
    public static async Delete({ID}:Pick<User, "ID">){
        return await API.delete(`/User/${ID}`,{withCredentials:true}).then(res=>{return res.status === 204}).catch(()=>false);
    }
    public static async QrCode(Email:string){
        return await API.get(`/User/QrCode/${Email}`,{responseType:"blob"}).then((data)=>{
          return data.data;
        }).catch(()=>undefined);
    }
    public static async TF({Email,Code}:{Email:string,Code:string}){
        return await API.post(`User/2FA`,{Email,Code},{withCredentials:true}).then(res=>{
            return res.status === 202;
        }).catch(()=>false);
    }
}