import React from "react";
import Image from "next/image";
import Link from "next/link";

import Certification from "@/assets/images/certification.webp";

export default function Certifications() {
  return (
    <section id="certificate">
      <div className="container mx-auto px-2 py-10 lg:py-20">
        <div className="py-2">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center uppercase text-primary">
            SINOV LABORATORIYALAR MAJMUASI
          </h2>
        </div>
        <div className="flex items-center gap-5 max-lg:flex-col">
          <div className="lg:w-1/2 space-y-2 lg:space-y-4">
            <h3 className="lg:text-3xl font-semibold">
              Sinov laboratoriyalari majmuasi xalqaro standartlar talabi asosida
              akkreditatsiyadan o‘tkazilgan.
            </h3>
            <p>
              Laboratoriyada zamonaviy sinov uskunalar va texnologiyalar
              yordamida avtotransport va mashinasozlik mahsulotlarini
              xavfsizlik, samaradorlik, iqlim sharoitlariga va ekologik
              me&apos;yorlarga mosligini sinovlardan o&apos;tkaziladi. Tajribali
              mutaxassislar jamoamiz har bir sinovni aniq va ishonchli,
              shuningdek, natijalarni batafsil tahlil qilib, mijozlarimizga
              to&apos;liq xulosa taqdim etadi.
            </p>
            <div className="flex items-center justify-between gap-5 max-lg:flex-col max-lg:gap-2 pt-4">
              <Link
                href="https://akkred.uz/reestr?page=1&typeOrgan=5&region=&searchInn=310552795"
                className="block w-full"
                target="_blank"
              >
                <div className="py-2 rounded-lg px-6 border border-primary w-fit max-lg:w-full text-center max-lg:py-5">
                  Milliy akkreditatsiya reestri
                </div>
              </Link>
              <Link
                href={"/akkreditatsiya.pdf"}
                download
                rel="noopener noreferrer"
                target="_blank"
                className="block w-full"
              >
                <div className="py-2 rounded-lg px-6 max-lg:w-full text-center bg-primary hover:bg-transparent border border-primary transition-all duration-300 w-fit text-white hover:text-black max-lg:py-5">
                  Akkreditatsiya o&lsquo;tkazish sohasi
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center py-2 lg:py-8 flex-col">
            <div className="w-[350px]">
              <Image
                src={Certification}
                alt="certification image"
                width={800}
                height={800}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
