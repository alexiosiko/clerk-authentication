import Image from "next/image"
import { sidebarLinks } from "@/constants";
import { SignOutButton } from "@clerk/nextjs";
import BackArrow from "@/public/assets/back-arrow.png";
import RightArrow from "@/public/assets/right-arrow.png";
import SettingsButton from "@/public/assets/settings.png";
import Logout from "@/public/assets/logout.svg";
import Link from "next/link";

type Props = {
	user: {
		id: string,
		username: string,
		name: string,
		image: string,
	}
}

export default async function  AccountProfile({ user } : Props) {
	return (
		<section className="rounded-3xl text-center bg-white p-2">
			<div className="flex flex-row justify-between m-2 mb-4">
				<Link href={"/"}>
					<Image className="hover:bg-gray-100 transition rounded-xl" src={BackArrow} width={30} height={30} alt="back-arrow" />
				</Link>
				<h1 className="text-7xl">Profile</h1>
				<Image className="hover:bg-gray-100 transition rounded-xl p-1 cursor-pointer" src={SettingsButton} width={30} height={30} alt="back-arrow" />
			</div>
			<Image className="m-auto rounded-full" src={user.image} alt="profile-image" width={100} height={100}/>
			<p className="m-2" style={{ fontSize: 20}}>{user.name}</p>
			{sidebarLinks.map((link, index) => 
				<Link key={index} className="w-4/5 m-auto flex p-3 text-left  hover:bg-gray-100 transition items-center justify-between rounded-xl" href={"/"}>
				<div className="flex items-center">
				<Image src={link.imgURL} alt={link.label} width={24} height={24} />
				<p className="ml-3">{link.label}</p>
				</div>
				<Image src={RightArrow} alt="right-arrow" width={24} height={24} />
			</Link>
			)}
			<div className="w-4/5 m-auto flex text-left p-3 items-center justify-between hover:bg-gray-100 transition rounded-xl">
				<div className="flex items-center">
						<Image className="mr-3" src={Logout} alt="right-arrow" width={24} height={24} />
						<div className="text-red-600 weight-bold">
							<SignOutButton />
						</div>
				</div>
				<Image src={RightArrow} alt="right-arrow" width={24} height={24} />
			</div>
		</section>
	)
} 