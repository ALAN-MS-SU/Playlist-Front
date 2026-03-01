import {API} from "../../";
import {User} from "@/Types/User"

export class PasswordService {
    public static async Init({Email}:Pick<User,"Email">){
        return await API.post(`/User/Password/${Email}`).then(res=>res.status == 204).catch(()=>false)
    }
    public static async TF({Email,Code}:Pick<User,"Email">&{Code:string}){
        return await API.post(`/User/Password/2FA`,{Email,Code}).then(res=>res.status == 202).catch(()=>false)
    }
    public static async Update({Email,Password}:Pick<User,"Email"|"Password">){
        return await API.patch(`/User/Password`,{Email,Password}).then(res=>res.status == 204).catch(()=>false)
    }
}