'use client';
import { useState, useEffect } from 'react';
import { assets } from "@/assets/assets";
import SlideBar from "@/Components/AdminComponents/SlideBar";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Layout({ children }) {

  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Watch screen width
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 900;
      setIsMobile(isNowMobile);

      // Automatically close sidebar on mobile screens
      if (isNowMobile) {
        setSidebarOpen(false);
      }
    };

    handleResize(); // check once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        {/* Sidebar */}
        <div
          className={`
            transition-transform duration-300 h-full
            ${isMobile
              ? `fixed top-0 left-0 z-40 w-80 bg-white 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
              : 'w-80 relative'}
         `}
        >
          <SlideBar onLinkClick={() => isMobile && setSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[600px] px-6 border-b border-black">
            {isMobile && (
              // <div className="fixed top-4 left-4 w-24">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="py-2 px-3 bg-black text-white rounded-md top-4 left-4  "
              >
                {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
              // </div>
            )}
            <h3 className="font-medium">Admin panel</h3>
            <Image src={assets.profile_icon} width={40} alt="profile" />
          </div>
          {children}
        </div>
      </div>

    </>
  )
}