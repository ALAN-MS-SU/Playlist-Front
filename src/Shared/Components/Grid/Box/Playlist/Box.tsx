// "use client"
// import {Playlist} from "@/Types/Playlist";
// import {Tittle} from "@/Shared/Components/Text";
// import {Youtube} from "@/Utils/URL";
// import Image from "next/image"
// export function Box({Name,ID,User,Cover}:Omit<Playlist,"Items">){
//     const YTURL = new Youtube(Cover)
//     return(
//         <div className={"w-120 h-80 rounded-3xl flex flex-col justify-between items-start" +
//             "overflow-hidden  "}>
//             <div className={"w-full h-70 relative "}>
//                 <Image width={10000} height={10000} alt={"Capa"} src={YTURL.Cover()}
//                        className={"w-full h-full rounded-2xl z-30 absolute"}
//             />
//             <div className={"w-full h-full rounded-2xl bg-gray-500 absolute bottom-1.5 z-20 border-t border-solid border-text-light"} />
//             <div className={"w-full h-full rounded-2xl bg-gray-400 absolute bottom-3 z-10"} />
//           
//             </div>
//             <div className={"w-full px-1"}>
//            <Tittle className={"text-start text-xl"} Text={Name}/>
//           
//             <p className={"text-start text-[100%]"}>Criador: {User}</p>
//         </div>
//         </div>
//     )
// } 