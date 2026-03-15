"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80", alt: "Spanish paella", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80", alt: "Restaurant courtyard", span: "" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", alt: "Plated tapas", span: "" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Warm restaurant interior", span: "md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80", alt: "Wine cellar", span: "" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Chef preparing dishes", span: "" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", alt: "Grilled seafood", span: "md:col-span-2" },
];

function GalleryImage({ photo, index }: { photo: (typeof photos)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-sm group aspect-square ${photo.span}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />
    </div>
  );
}

export default function Gallery() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-body">
            Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-forest">
            Moments at Casa Verde
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <GalleryImage key={photo.src} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
