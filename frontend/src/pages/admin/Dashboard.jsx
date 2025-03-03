import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import {
  IconAdCircle,
  IconArrowBigRight,
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconSubscript,
  IconTrophy,
  IconUserBolt,
  IconUserPlus,
} from "@tabler/icons-react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";
import { Subscribers } from "./DashboardPages/Subscribers";

export function Dashboard() {
  const name = JSON.parse(localStorage.getItem("name"));

  const links = [
    {
      label: "Challenges",
      href: "/challenges",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Founders",
      href: "/founders",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Champions",
      href: "/champions",
      icon: (
        <IconTrophy className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Subscribers",
      href: "/subscribers",
      icon: (
        <IconUserPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "min-h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between min-h-screen">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: name,
                href: "#",
                // icon: (
                //   // <img
                //   //   src="https://assets.aceternity.com/manu.png"
                //   //   className="h-7 w-7 flex-shrink-0 rounded-full"
                //   //   width={50}
                //   //   height={50}
                //   //   alt="Avatar"
                //   // />
                // ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <DashboardDemo />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Persist ventures
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      // replace href="" to to={}
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const DashboardDemo = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {<Outlet />}
      </div>
    </div>
  );
};
