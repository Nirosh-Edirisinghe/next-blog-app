import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SlideBar = ({ onLinkClick }) => {
  return (
    <div className='flex flex-col h-[100vh] bg-slate-100'>
      <Link href="/">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt='logo' />
      </div>
      </Link>
      <div onClick={onLinkClick} className=" sm:w-80 h-[100%] relative py-12 border border-black">
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
          <Link href='/admins/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} alt='add' /><p>Add blogs</p>
          </Link>

          <Link href='/admins/blogList' className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.blog_icon} alt='add' /><p>Blog list</p>
          </Link>

          <Link href='/admins/subscription' className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email_icon} alt='add' /><p>Subscription</p>
          </Link>
        </div>
        

      </div>
    </div>
  )
}

export default SlideBar
