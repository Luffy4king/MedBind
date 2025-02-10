import React from "react";
 import Link from "next/link";
  import { usePathname } from "next/navigation";

  const SideBarDropdown = ({item}:any)=>{
    const pathname = usePathname();

    return (
        <ul className="mb-5 mt-4 flex flex-col gap2.5 pl-6">
            {item.map((item:any,index:number) =>(
                <li key={index}>
                    <Link href={item.route}
                    className={`group relative flex items-center gap-2.5 rounded-md px-4font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                   pathname===item.route?'text-white':"" }`}>
                    </Link>
                </li>
            ))}
        </ul>
    )
  }

  export default SideBarDropdown;