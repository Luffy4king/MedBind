import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBarDropdown from "./SideBarDropdown";

const SidebarItem=({item,pageName,setPageName}:any) =>{
const handleClick =() =>{
     const  updatePageName =pageName!== item.label.tolowerCase() ? item.label.tolowerCase():"" ;
     return setPageName(updatePageName);
     
};

const pathname =usePathname();

const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "rounded-md bg-graydark dark:bg-[#1e1e1e]" : ""} group relative flex items-center gap-2.5 rounded-md px-4 py-2  text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-[#1e1e1e]`}
        >
          {item.icon}
          {item.label}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SideBarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;