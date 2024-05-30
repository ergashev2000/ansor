import React from "react";
import Link from "next/link";
import Image from "next/image";

import Money from "@/assets/images/money.svg";
import Guarantee from "@/assets/images/guarantee.svg";
import Certificate from "@/assets/images/certificate.svg";

import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero_bg_img h-screen w-full flex items-center relative">
      <div className="w-full h-fit bg-[#0A1C37] py-2 shadow-md absolute bottom-0 left-1/2 -translate-x-1/2">
        <ul className="container mx-auto flex items-center justify-around py-2 text-white max-lg:hidden">
          <li className="flex items-center gap-2">
            <div>
              <Image src={Money} alt="Image" width={50} height={50} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-secondly">
                Yaxshi Narxlar
              </h3>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div>
              <Image src={Guarantee} alt="Image" width={50} height={50} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-secondly">Kafolat</h3>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div>
              <Image src={Certificate} alt="Image" width={50} height={50} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-secondly">
                Sertifikatlash
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center container mx-auto ">
        <div className="w-full xl:w-1/2 text-white space-x-2 xl:space-y-6 z-10 ">
          <div className="space-y-3 px-2">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
              Ansor Safety
            </h1>
            <p className="max-lg:text-lg">
              Mahsulotning O‘zbekiston Respublikasi Milliy sertifikatlashtirish
              tizimi talablariga muvofiqligini baholash
            </p>
          </div>
          <div className="flex items-center gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-lg:pt-10">
            <Link
              href={"#services"}
              className="py-4 px-6 xl:py-3 xl:px-5 whitespace-nowrap rounded-xl bg-primary text-white uppercase hover:bg-[#273f60] border border-primary transition-all duration-300 max-lg:text-sm"
            >
              Bizning xizmatlarimiz
            </Link>
            <div className="flex items-center gap-4 text-white pt-2">
              <span>
                <Phone />
              </span>
              <div>
                <Link href={"tel:+998951774979"}>
                  <div className="font-semibold xl:text-xl whitespace-nowrap">
                    +998 (95) 177 49 79
                  </div>
                </Link>
                <p className="text-xs font-medium">
                  24/7 maslahat olish mumkin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
