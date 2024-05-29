import { MoveLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "404 - not found",
  };
}

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[#1e1e20] text-white">
      <h4 className="text-[160px] font-bold leading-none">404</h4>
      <p className="text-center">
        Afsuski, so&apos;ralgan sahifa topilmadi. <br /> Iltimos, pastdagi
        tugmani bosib, bosh sahifaga qayting.
      </p>
      <Link href={"/"}>
        <span className="btn-primary flex items-center gap-1 px-5 mt-5 font-semibold">
          <MoveLeft /> Bosh sahifa
        </span>
      </Link>
    </div>
  );
}
