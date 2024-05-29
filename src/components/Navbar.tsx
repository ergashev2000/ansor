"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import Logo from "@/assets/images/logo.png";

const menus = [
  {
    id: 1,
    title: "Bosh sahifa",
    slug: "/",
  },
  {
    id: 2,
    title: "Biz haqimizda",
    slug: "#about",
  },
  {
    id: 5,
    title: "BIZNING MAQSADIMIZ",
    slug: "#goal",
  },
  {
    id: 6,
    title: "Xizmatlar",
    slug: "#services",
  },
  {
    id: 10,
    title: "Gallery",
    slug: "#gallery",
  },
  {
    id: 11,
    title: "Contact",
    slug: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState(1);

  const handleOpenMenu = () => {
    setIsOpen(prev => !prev);
  };


  return (
    <header className="container mx-auto fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full">
      <div className="relative">
        <div className="backdrop-blur bg-black/10 filter w-full flex justify-between items-center rounded-sm lg:rounded-full pr-2 lg:mt-2 max-lg:py-5">
          <Link href="/">
            <div className="h-16">
              <Image
                src={Logo}
                alt="Ansor logo"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <nav className="max-lg:hidden py-2">
            <ul className="text-sm uppercase flex items-center gap-3 2xl:gap-5 text-white">
              {menus.map(menu => (
                <li key={menu.id}>
                  <Link href={menu.slug}>
                    <div
                      className={`backdrop-blur xl:text-xs 2xl:text-base px-4 py-2 rounded-full transition-all duration-300 ${
                      menu.id === hash
                          ? "bg-primary hover:opacity-70"
                          : ""
                      }`}
                      onClick={() => setHash(menu.id)}
                    >
                      {menu.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav className="">
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white lg:hidden"
            onClick={handleOpenMenu}
          >
            <Menu size={44} />
          </button>
          <ul
            className={`uppercase flex-col flex justify-center transition-all duration-500 items-center gap-5 text-2xl text-center h-screen w-full bg-black text-white absolute top-0 left-0 pt-10 ${
              !isOpen ? "-translate-y-[calc(100%+20px)]" : "-translate-y-0"
            }`}
          >
            <button
              className="rounded-full flex justify-center items-center text-white absolute right-2 top-2"
              onClick={handleOpenMenu}
            >
              <X size={50} />
            </button>
            {menus.map(menu => (
              <li key={menu.id}>
                <Link href={menu.slug}>
                  <div
                    className={`p-5 py-2 rounded-full transition-all duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
