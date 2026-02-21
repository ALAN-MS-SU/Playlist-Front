import {API} from "../";
import {User} from "@/Types/User"

export class UserService {
    public static async SignIn({Email,Password}: Pick<User,"Email"|"Password">){
        return await API.post("/User/SignIn", {Email, Password}).then(res => {
            return res.status === 202;

        }).catch(()=>false);
    }
    public static async QrCode(Email:string){
        return await API.get(`/User/QrCode/${Email}`,{responseType:"blob"}).then((data)=>{
          return data.data;
        }).catch(()=>undefined);
    }
}