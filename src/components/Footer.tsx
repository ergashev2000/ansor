import { FacebookIcon, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    icon: <Instagram />,
    url: "https://www.instagram.com/ansorsafety2024/",
  },
  {
    id: 2,
    icon: <Youtube />,
    url: "http://youtube.com",
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    url: "http://facebook.com",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-black w-full py-5">
        <div className="container mx-auto flex justify-between items-center max-lg:flex-col-reverse max-lg:gap-4 max-lg:px-2">
          <p className="text-white font-medium text-sm">
            © 2024 · “Ansor Safety” MCHJ
          </p>
          <ul className="flex items-center gap-4 text-xs">
            <li className="text-sm text-white">
              Bizni ijtimoiy tarmoqlarimiz:{" "}
            </li>
            {links.map(link => (
              <li key={link.id}>
                <Link href={link.url} target="_blank">
                  <div className="bg-white hover:text-white flex justify-center items-center rounded shadow-sm border w-7 h-7 border-gray-300 hover:bg-transparent transition-all duration-300">
                    {link.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
