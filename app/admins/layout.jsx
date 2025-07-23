import { assets } from "@/assets/assets";
import SlideBar from "@/Components/AdminComponents/SlideBar";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <SlideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[600px] px-12 border-b border-black">
            <h3 className="font-medium">Admin panel</h3>
            <Image src={assets.profile_icon} width={40} alt="profile" />
          </div>
          {children}
        </div>
      </div>

    </>
  )
}