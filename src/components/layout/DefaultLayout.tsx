'use client'

import React, { useLayoutEffect, useState } from "react"
import Sidebar from "../Sidebar";
import Header from "../Header/Index";
import { useSession } from "next-auth/react";

import { usePathname,useRouter } from "next/navigation";





export default function DefaultLayout ({
    children,

}:{
    children:React.ReactNode,
}) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const{data:session,status}=useSession();
    const router= useRouter();

    const pathname= usePathname();

    const publicRoutes = [
        "/auth-page/signup",
        "/auth-page/signin",
        "/verify-email",
        "/reset-password",
        "forget-password",
    ]
    useLayoutEffect(() =>{
        if(status=== 'unauthenticated' && !publicRoutes.includes(pathname)){
            router.push('/auth-page/signin')
        }
    },[status,router,pathname])
    return (
        <div className="flex">
            {/* /slide bar */}
               <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-1 flex-col lg:ml-72.5">
                {/* header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="mx-auto max-w-screen-2xl p-4 dark:[#121212] md:p-6 xl:p-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}