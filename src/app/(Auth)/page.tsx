import {Home} from "@/Shared/Components/Screen/Sections/Home";
import {UserService} from "@/Services/API/User";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Token} from "@/Types/JWT";
//import {PlaylistService} from "@/Services/API/Playlist";

export const dynamic = 'force-dynamic'
export default async function Page() {
  // const Playlists = await PlaylistService.Get();
  // if(!Playlists) return <></>;
  const Cookies = await cookies();
  const JWT = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME!)
  if(!JWT) return redirect("/Sign/In");
  const Decoded: Token =  Token.Decoded(JWT.value)

  const User = await UserService.Get({ID:Decoded.ID,Token:JWT.value})
  if(!User) return <>Err</>
  return (
  <><Home ID={User.ID} Name={User.Name} Email={User.Email} /></>
  
  );
}
