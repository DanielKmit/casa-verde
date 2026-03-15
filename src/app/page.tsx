"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <Story />
      <Divider />
      <Menu />
      <Divider />
      <Gallery />
      <Divider />
      <Reservations />
      <Location />
      <Footer />
    </main>
  );
}
