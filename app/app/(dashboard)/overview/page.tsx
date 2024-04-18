import { Metadata } from "next"
import { auth } from "@/auth";
import { GetUserById } from "@/actions/user/GetUserById";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Astralics | Overview",
    description: "Generated by create next app",
};
  
export default async function Page() {
    const session = await auth();
    if(!session) redirect('/login');
    const user = await GetUserById(session.user?.id as string);
    if(user.user?.isFirstTimeUser === true) {
        // redirect('/create')
    }
    return (
        <>
        </>
    )
}