import Image from "next/image";
import React from "react";

import Certification from "@/assets/images/Аккредитация гувоҳномаси-1.webp";

export default function Certifications() {
  return (
    <section id="certificate">
      <div className="container mx-auto py-10 lg:py-20">
        <div className="py-5">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Akkreditatsiya
          </h2>
        </div>
        <div className="flex items-center gap-5 max-lg:flex-col">
          <div className="lg:w-1/2 space-y-2 lg:space-y-6 p-5">
            <h3 className="lg:text-3xl font-semibold">
              Avtomobillarni sinov qiluvchi laboratoriya Akkreditatsiyasi
            </h3>
            <p>
              Ushbu akkreditatsiya avtomobillarni sinovdan o&apos;tkazish
              bo&apos;yicha yuqori standartlarga javob beradigan laboratoriyamiz
              tomonidan taqdim etilgan. Laboratoriyamizda zamonaviy
              texnologiyalar yordamida avtomobillarni xavfsizlik, samaradorlik,
              va ekologik me&apos;yorlarga mosligini sinovdan o&apos;tkazamiz.
              Tajribali mutaxassislar jamoamiz har bir testni aniq va ishonchli
              o&apos;tkazadi, shuningdek, natijalarni batafsil tahlil qilib,
              mijozlarimizga to&apos;liq hisobot taqdim etadi.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center py-2 lg:py-8 flex-col">
            <div className="w-[350px]">
              <Image
                src={Certification}
                alt="img"
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
