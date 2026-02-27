// import {API} from "@/Services/API"
// import {Playlist} from "@/Types/Playlist";
// export class PlaylistService {
//    
//     public static async Get():Promise<Omit<Playlist,"Items">[]|undefined>{
//         return await API.get("/Playlist").then((Res)=>{
//             if(Res.status != 200) return undefined;
//             return Res.data;
//         }).catch(()=>undefined)
//     }
//     public static async View(ID:number):Promise<Playlist>{
//         return await API.get(`/Playlist/${ID}`).then((Res)=>{
//             if(Res.status != 200) return undefined;
//             return Res.data;
//         }).catch(()=>undefined)
//     }
// }