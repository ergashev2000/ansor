import Image from 'next/image'
import React from 'react'

import Img from '@/assets/images/img/6.jpg'
import Img2 from "@/assets/images/img/10.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto py-10 px-2 lg:pb-14 lg:pt-20">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold text-center py-10 text-primary">
            KOMPANIYA HAQIDA
          </h2>
        </div>
        <div className="flex gap-10 max-lg:flex-col items-start lg:h-[700px]">
          <div className="lg:w-1/2 h-full border-2 border-gray-300 p-2 rounded-2xl">
            <Image
              src={Img}
              alt="Ansor Safety"
              width={700}
              height={700}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="space-y-5 lg:w-1/2 h-full flex flex-col justify-between">
            <div className="lg:h-2/3 ">
              <h2 className="text-3xl 2x:text-4xl font-bold text-primary">
                “Ansor Safety” MCHJ
              </h2>
              <p className="pt-6 2xl:text-lg">
                &emsp; “Ansor Safety” MCHJ 2023-yil 12-iyundagi №21091874-sonli
                guvohnomaga muvofiq tashkil etilgan bo‘lib, faoliyatini asosan
                avtotransport va mashinasozlik mahsulotlarini sinovlari va
                sertifikatlashtirish ishlariga qaratilgan.
              </p>
              <p className="2xl:text-lg">
                &emsp;“Ansor Safety” MCHJ qoshidagi sinov laboratoriyalar
                majmuasi O‘zbekiston Respublikasi Milliy akkreditatsiya tizimida
                O&apos;ZAK.SL.0342-sonli reestr raqami bilan O‘zDSt ISO/IEC
                17025:2019 standarti talablariga muvofiq sinov laboratoriyasi
                sifatida akkreditatsiyadan o‘tkazilgan.
              </p>
            </div>

            <div className="lg:block hidden xl:h-[320px] 2xl:h-[350px] border-2 border-gray-300 p-2 rounded-2xl text-lg">
              <Image
                src={Img2}
                alt="Ansor Safety"
                width={600}
                height={600}
                className="rounded-xl w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
