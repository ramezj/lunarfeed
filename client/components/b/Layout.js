import {Navbar} from "../navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import BoardNav from "./BoardNav";

export default function BoardLayout(props) {
    const { data: session } = useSession()
    return (
        <div className='bg-gray-300 dark:bg-zinc-950 min-h-screen bg-bottom bg-no-repeat w-full'>
            {/* <Navbar session={session}/> */}
            {/* bg-[#05050a] */}
        {/* <Navbar session={session}/> */}
        <BoardNav session={session}/>
        {props.children}
        </div>
    )
}