// "use client"
// import {useContext} from "react";
// import {AuthContext} from "@/Context/Auth/Context";
// import Image from "next/image"
// import Logo from "@/Assets/PLName.png"
// import {Search} from "@/Shared/Components/Form/Input";
// import {Button} from "@/Shared/Components/Button";
// import { CgProfile } from "react-icons/cg";
//
// export function Header(){
//     const User = useContext(AuthContext);
//    
//     return <header className={"bg-bg w-full h-30 border-b-2 border-solid border-primary-3 px-10 flex flex-row items-center justify-between"}>
//         <Image src={Logo} alt={"Logo"} width={0} height={0} className={"w-45 h-20"} />
//         <Search/>
//         {User
//             ?<CgProfile className={"text-5xl cursor-pointer text-primary-3 transition-colors ease-in hover:text-primary-hover"}/>
//             :<Button Text={"Entrar"}/>}
//     </header>
// }