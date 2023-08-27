import AccountProfile from "@/components/AccountProfile";
import { SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
		const user = await currentUser();
		
		const userData = {
			id: user?.id || "",
			username: user?.username || "",
			name: user?.firstName || "",
			image: user?.imageUrl || "",
		}
		return (
    	<div >
			<SignedOut>
				<div className="m-4 bg-white rounded-xl">
					<Link className="justify-center flex" href={"/sign-in"}>Click here to sign in</Link>
				</div>
				<div className="m-4 bg-white rounded-xl">
					<Link className="justify-center flex" href={"/sign-up"}>Click here to sign up</Link>
				</div>
			</SignedOut>
			<SignedIn> 
				<AccountProfile user={userData} />
			</SignedIn>
    	</div>
  )
}