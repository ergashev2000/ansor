import Image from "next/image";
import React from "react";
import Consulting from "@/assets/images/consulting-message-svgrepo-com.svg";
import Certificate from "@/assets/images/certificate-degree-diploma-svgrepo-com.svg";

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto py-10">
        <div className="py-5 text-center">
          <h2 className=" uppercase text-2xl lg:text-4xl font-semibold">
            Bizning xizmatlarimiz
          </h2>
          <p className="font-semibold text-sm lg:text-lg">
            Ansor Safety MChJ sizga quyidagi xizmatlar turlarini taklif etadi:
          </p>
        </div>
        <div className="flex gap-10 justify-evenly pt-5 max-lg:flex-col">
          <div className="flex justify-center flex-col items-center gap-5 lg:w-1/3">
            <div className="w-16 h-16">
              <Certificate />
            </div>
            <p className="text-center text-lg">
              Laboratoriya sinovlari orqali metallurgiya mahsulotlarining
              muvofiqligini tasdiqlash
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 lg:w-1/3">
            <div className="w-16 h-16">
              <Consulting />
            </div>
            <p className="text-center text-lg">
              O‘zbekiston Respublikasining ishlab chiqarish korxonalariga
              mahsulot sifati bo‘yicha konsalting xizmatlarini ko‘rsatish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
