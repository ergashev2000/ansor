"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const menus = [
  {
    id: 1,
    title: "Bosh sahifa",
    slug: "/",
  },
  {
    id: 5,
    title: "BIZNING MAQSADIMIZ",
    slug: "#goal",
  },
  {
    id: 10,
    title: "Gallery",
    slug: "#gallery",
  },
  {
    id: 2,
    title: "Biz haqimizda",
    slug: "#about",
  },
  {
    id: 6,
    title: "Xizmatlar",
    slug: "#services",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="container mx-auto fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full">
      <div className="">
        <div className="backdrop-blur bg-black/40 filter w-full flex justify-between items-center rounded-sm lg:rounded-full p-3 lg:mt-2">
          <Link href={"/"}>
            <span className="text-lg font-semibold text-white uppercase pl-2 lg:pl-5">
              Ansor Safety
            </span>
          </Link>
          <nav className="max-lg:hidden">
            <ul className="text-sm uppercase flex items-center gap-5 text-white">
              {menus.map(menu => (
                <li key={menu.id}>
                  <Link href={menu.slug}>
                    <div
                      className={`hover:bg-white/20 backdrop-blur px-5 py-2 rounded-full transition-all duration-300 ${
                        pathname === menu.slug
                      ? "bg-primary hover:bg-primary hover:opacity-70" : "" }`}
                    >
                      {menu.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <nav className="">
        <button
          className="absolute right-2 top-2 text-white lg:hidden"
          onClick={handleOpenMenu}
        >
          <Menu size={44} />
        </button>
        <ul
          className={`uppercase flex-col flex justify-center transition-all duration-500 items-center gap-5 text-2xl text-center h-screen w-full bg-black text-white absolute top-0 left-0 pt-10 ${
            !isOpen ? "top-auto bottom-full" : "top-0"
          }`}
        >
          <button
            className="rounded-full flex justify-center items-center text-white absolute right-5 top-5"
            onClick={handleOpenMenu}
          >
            <X size={50} />
          </button>
          {menus.map(menu => (
            <li key={menu.id}>
              <Link href={menu.slug}>
                <div
                  className={`p-5 py-2 rounded-full transition-all duration-300`}
                >
                  {menu.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
