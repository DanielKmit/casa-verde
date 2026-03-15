"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="The Verde family in their kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-sm -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-body">
            Our Story
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">
            Three Generations of Passion
          </h2>
          <div className="space-y-4 text-neutral-600 font-body leading-relaxed">
            <p>
              In 1965, our grandmother María Elena opened the doors of a small
              kitchen on Calle Sierpes with nothing but her mother&apos;s recipes and a
              dream. The aroma of saffron and slow-roasted peppers drifted through
              the narrow streets of Seville, drawing neighbors who became family.
            </p>
            <p>
              Her son Antonio expanded the restaurant in the 1980s, adding the
              courtyard where jasmine still climbs the old stone walls. He introduced
              the wine cellar — a curated collection of Andalucían vintages that
              remains one of Seville&apos;s finest.
            </p>
            <p>
              Today, Antonio&apos;s daughter Lucía leads the kitchen, honoring her
              grandmother&apos;s traditions while bringing fresh creativity to every
              plate. The recipes remain the same. The love, even stronger.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-px bg-gold" />
            <p className="font-heading text-forest text-lg italic">
              &ldquo;Every dish tells a story of our family&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
