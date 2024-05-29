import Link from "next/link";
import React from "react";

import Money from "@/assets/images/money.svg";
import Guarantee from "@/assets/images/guarantee.svg";
import Certificate from "@/assets/images/certificate.svg";

export default function Hero() {
  return (
    <section className="hero_bg_img h-screen w-full flex items-center relative">
      <div className="w-full h-fit bg-[#0A1C37] py-2 shadow-md absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="container mx-auto flex items-center justify-between py-2 text-white max-lg:hidden">
          <div className="flex items-center gap-2">
            <span className="">
              <Money />
            </span>
            <div className="">
              <h3 className="font-semibold text-xl text-secondly">
                Yaxshi Narxlar
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="">
              <Guarantee />
            </span>
            <div className="">
              <h3 className="font-semibold text-xl text-secondly">Garantiya</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="">
              <Certificate />
            </span>
            <div className="">
              <h3 className="font-semibold text-xl text-secondly">
                Sertifikatlash
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center container mx-auto ">
        <div className="w-full xl:w-1/2 text-white space-x-2 xl:space-y-6 z-10">
          <h1 className="text-3xl xl:text-6xl font-semibold pl-2">Ansor Safety</h1>
          <p>
            Mahsulotning O‘zbekiston Respublikasi Milliy sertifikatlashtirish
            tizimi talablariga muvofiqligini baholash
          </p>

          <div className="flex items-center gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-lg:pt-5">
            <Link
              href={"tel:+998951774979"}
              className=" py-2 px-4  xl:py-3 xl:px-5 whitespace-nowrap rounded-xl bg-primary text-white uppercase hover:bg-[#273f60] border border-primary transition-all duration-300 max-lg:text-sm"
            >
              Bizning xizmatlarimiz
            </Link>
            <div className="">
              <div className="flex items-center gap-4 text-white">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone-call"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                </span>
                <div>
                  <Link href={"tel:+998951774979"}>
                    <div className="font-semibold xl:text-xl whitespace-nowrap">
                      +998 (95) 177 49 79
                    </div>
                  </Link>
                  <p className="text-sm">24/7 maslahat olish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
