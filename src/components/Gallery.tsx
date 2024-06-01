"use client";

import React, { useState } from "react";
import CustomSwiper from "./Swiper";
import Image, { StaticImageData } from "next/image";

import Img1 from "@/assets/images/img/1.jpg";
import Img2 from "@/assets/images/img/2.jpg";
import Img3 from "@/assets/images/img/3.jpg";
import Img4 from "@/assets/images/img/4.jpg";
import Img5 from "@/assets/images/img/5.jpg";
import Img6 from "@/assets/images/img/6.jpg";
import Img7 from "@/assets/images/img/7.jpg";
import Img8 from "@/assets/images/img/8.jpg";
import Img9 from "@/assets/images/img/9.jpg";
import Img10 from "@/assets/images/img/10.jpg";
import Img11 from "@/assets/images/img/11.jpg";
import Img12 from "@/assets/images/img/12.jpg";
import { ScanSearch } from "lucide-react";

const data = [
  { id: 1, title: "Photo 1", img: Img1 },
  { id: 2, title: "Photo 2", img: Img2 },
  { id: 3, title: "Photo 3", img: Img3 },
  { id: 4, title: "Photo 4", img: Img4 },
  { id: 5, title: "Photo 5", img: Img5 },
  { id: 6, title: "Photo 6", img: Img6 },
  { id: 7, title: "Photo 7", img: Img7 },
  { id: 8, title: "Photo 8", img: Img8 },
  { id: 9, title: "Photo 9", img: Img9 },
  { id: 10, title: "Photo 10", img: Img10 },
  { id: 11, title: "Photo 11", img: Img11 },
  { id: 12, title: "Photo 12", img: Img12 },
];

type ImageData = {
  id: number;
  title: string;
  img: StaticImageData;
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <section id="gallery">
      <div className="container mx-auto px-2 pt-10 pb-16 lg:py-20">
        <div className="py-8">
          <h2 className="text-4xl font-semibold text-center uppercase text-primary">
            Gallery
          </h2>
        </div>
        <CustomSwiper between={30} pagination slidesNumber={2}>
          {data.map(item => (
            <div
              className="w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden cursor-pointer relative border-2 border-gray-300"
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <button className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-black/40 text-white rounded w-12 h-12 flex justify-center items-center backdrop-blur-sm">
                <ScanSearch size={40} />
              </button>
              <Image
                src={item.img}
                alt={item.title}
                title={item.title}
                width={700}
                height={700}
                loading="lazy"
                className="object-cover w-full h-full "
              />
            </div>
          ))}
        </CustomSwiper>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div>
              <button
                className="absolute top-0 right-0 mt-2 mr-5 text-white text-5xl"
                onClick={handleClose}
              >
                &times;
              </button>
              <Image
                src={selectedImage.img}
                alt={selectedImage.title}
                title={selectedImage.title}
                width={1000}
                height={1000}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
