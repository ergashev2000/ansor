import Image from 'next/image';
import React from 'react'

export default function ServiceCard({ service }: any) {
  return (
    <div className="flex justify-center items-center flex-col gap-8 border border-primary/20 rounded-2xl py-8 bg_gradient_white">
      <div>
        <Image src={service.icon} alt='Icon' width={100} height={100}/>
      </div>
      <h3 className="font-bold text-lg lg:text-xl">{service.title}</h3>
    </div>
  );
}
