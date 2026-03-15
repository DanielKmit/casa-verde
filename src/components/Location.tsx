"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Location() {
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  return (
    <section id="location" className="py-24 px-6 bg-forest">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Map */}
        <div
          ref={mapRef}
          className="relative aspect-square md:aspect-auto rounded-sm overflow-hidden"
          style={{
            opacity: mapVisible ? 1 : 0,
            transform: mapVisible ? "none" : "translateX(-30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5!2d-5.9953!3d37.3886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzE5LjAiTiA1wrA1OSc0My4xIlc!5e0!3m2!1sen!2ses!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Casa Verde location"
          />
        </div>

        {/* Info */}
        <div
          ref={infoRef}
          className="flex flex-col justify-center"
          style={{
            opacity: infoVisible ? 1 : 0,
            transform: infoVisible ? "none" : "translateX(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-body">
            Visit Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-linen mb-8">
            Find Casa Verde
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl text-gold mb-2">Address</h3>
              <p className="text-linen/70 font-body leading-relaxed">
                Calle Sierpes, 42<br />
                41004 Seville, Spain
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl text-gold mb-2">Hours</h3>
              <div className="text-linen/70 font-body space-y-1">
                <div className="flex justify-between max-w-xs">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Tue – Thu</span>
                  <span>13:00 – 23:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Fri – Sat</span>
                  <span>13:00 – 00:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>13:00 – 22:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl text-gold mb-2">Contact</h3>
              <div className="text-linen/70 font-body space-y-1">
                <p>
                  <span className="text-linen/40 mr-2">Phone:</span>
                  +34 954 22 33 44
                </p>
                <p>
                  <span className="text-linen/40 mr-2">Email:</span>
                  hola@casaverde.es
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
