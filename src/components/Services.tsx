import Image from "next/image";
import React from "react";
import Consulting from "@/assets/images/consulting-message-svgrepo-com.svg";
import Certificate from "@/assets/images/certificate-degree-diploma-svgrepo-com.svg";

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto py-14">
        <div className="py-8 text-center">
          <h2 className=" uppercase text-2xl lg:text-4xl font-semibold">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-sm lg:text-lg">
            Ansor Safety MChJ sizga quyidagi xizmatlar turlarini taklif etadi:
          </p>
        </div>
        <div className="flex gap-10 justify-evenly pt-5 max-lg:flex-col">
          <div className="flex justify-center flex-col items-center gap-5 lg:w-1/3">
            <div className="w-36 h-36 rounded-full flex justify-center items-center bg-primary bg-opacity-50 shadow-lg">
              <Certificate />
            </div>
            <p className="text-center text-lg">
              Laboratoriya sinovlari orqali metallurgiya mahsulotlarining
              muvofiqligini tasdiqlash
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 lg:w-1/3">
            <div className="w-36 h-36 rounded-full flex justify-center items-center bg-secondly bg-opacity-50 shadow-lg">
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
