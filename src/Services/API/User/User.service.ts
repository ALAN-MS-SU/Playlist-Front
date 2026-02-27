import {API} from "../";
import {User} from "@/Types/User"

export class UserService {
    public static async SignIn({Email,Password}: Pick<User,"Email"|"Password">){
        return await API.post("/User/SignIn", {Email, Password}).then(res => {
            return res.status === 202;

        }).catch(()=>false);
    }
    public static async SignOut({Name,Email,Password}:{Name:string,Email:string,Password:string}){
        return await API.post("/User", {Name,Email, Password}).then(res => {
            return res.status === 201;
        }).catch(()=>false);
    }
    public static async QrCode(Email:string){
        return await API.get(`/User/QrCode/${Email}`,{responseType:"blob"}).then((data)=>{
          return data.data;
        }).catch(()=>undefined);
    }
    public static async TF({Email,Code}:{Email:string,Code:string}){
        const Expires = Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRES!)*1000*60*60*24;
        return await API.post(`User/2FA`,{Email,Code},{withCredentials:true}).then(res=>{
            return res.status === 202;
        }).catch(()=>false);
    }
}