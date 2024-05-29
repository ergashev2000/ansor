import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Goal from "@/components/Goal";
import Services from "@/components/Services";
import React from "react";
import Map from "@/components/Map";

export default function page() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Goal />
      <Services />
      <Gallery />
      <Contact />
      <Map />
    </main>
  );
}
