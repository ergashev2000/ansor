import React from 'react'
import ServiceCard from './GoalCard'
import Certificate from "@/assets/images/iconmonstr-certificate-6.svg";
import Check from "@/assets/images/iconmonstr-check-mark-6.svg";
import Lifebuoy from "@/assets/images/iconmonstr-lifebuoy-6.svg";
import Briefcase from "@/assets/images/iconmonstr-briefcase-5.svg";
import Flask from "@/assets/images/iconmonstr-flask-21.svg";
import Clipboard from "@/assets/images/iconmonstr-clipboard-11.svg";

const services = [
  {
    id: 1,
    title: "Sertifikatlash",
    icon: <Certificate />,
  },
  {
    id: 2,
    title: "Tekshirish",
    icon: <Check />,
  },
  {
    id: 3,
    title: "Arbitraj",
    icon: <Lifebuoy />,
  },
  {
    id: 4,
    title: "Pudratchilar",
    icon: <Briefcase />,
  },
  {
    id: 5,
    title: "Laboratoriyalar",
    icon: <Flask />,
  },
  {
    id: 6,
    title: "Qabul qilish",
    icon: <Clipboard />,
  },
];

export default function Goal() {
  return (
    <section className="py-14" id="goal">
      <div className="container mx-auto px-2 py-5">
        <div className="pb-14 space-y-4 text-center mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-semibold uppercase text-center text-primary">
            ASOSIY MAQSADIMIZ
          </h2>
          <p>
            Sinov laboratoriyasida zarur va etarli sharoitlarni yaratish va
            ta&apos;minlash. Sinov ob&apos;ektlari to&apos;g&apos;risida
            ishonchli, ob&apos;ektiv asoslangan ma&apos;lumotlarning o&apos;z
            vaqtida olinishini ta&apos;minlash. Sinov laboratoriyasi sinov
            sohasida quyidagi tadbirlarni amalga oshirishni rejalashtirmoqda:
          </p>
        </div>
        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
