import React from 'react'

export default function ServiceCard({ service }: any) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 border border-primary/20 rounded-2xl py-8 bg_gradient_white">
      <div>{service.icon}</div>
      <h3 className="font-bold text-lg lg:text-3xl">{service.title}</h3>
    </div>
  );
}
