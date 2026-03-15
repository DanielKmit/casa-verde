"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type MenuItem = { name: string; desc: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  Tapas: [
    { name: "Patatas Bravas", desc: "Crispy potatoes with smoky paprika aioli and spicy tomato sauce", price: "€7" },
    { name: "Gambas al Ajillo", desc: "Sizzling prawns in garlic, chili, and olive oil with crusty bread", price: "€12" },
    { name: "Jamón Ibérico", desc: "Hand-carved acorn-fed Ibérico ham aged 36 months, with pan con tomate", price: "€18" },
    { name: "Croquetas de Jamón", desc: "Grandmother María Elena's creamy béchamel croquettes with Serrano ham", price: "€9" },
    { name: "Pimientos de Padrón", desc: "Blistered Padrón peppers with flaky Maldon sea salt", price: "€6" },
    { name: "Boquerones en Vinagre", desc: "Fresh white anchovies marinated in sherry vinegar and garlic", price: "€8" },
  ],
  Mains: [
    { name: "Paella Valenciana", desc: "Saffron rice with rabbit, chicken, green beans, and rosemary — our signature dish for two", price: "€28" },
    { name: "Rabo de Toro", desc: "Slow-braised oxtail in red wine with root vegetables, served with creamy mashed potatoes", price: "€24" },
    { name: "Bacalao a la Vizcaína", desc: "Salt cod in a rich roasted pepper and tomato sauce with sautéed spinach", price: "€22" },
    { name: "Cochinillo Asado", desc: "Roasted suckling pig with crispy skin, apple compote, and seasonal vegetables", price: "€26" },
    { name: "Lubina a la Sal", desc: "Whole sea bass baked in a salt crust, filleted tableside, with lemon and herbs", price: "€30" },
  ],
  Desserts: [
    { name: "Crema Catalana", desc: "Our version of the classic custard with caramelized sugar and orange zest", price: "€8" },
    { name: "Churros con Chocolate", desc: "Freshly fried churros with rich dark chocolate dipping sauce", price: "€7" },
    { name: "Tarta de Santiago", desc: "Traditional Galician almond cake dusted with powdered sugar", price: "€9" },
    { name: "Flan de Naranja", desc: "Silky orange flan with a pool of bittersweet caramel", price: "€8" },
  ],
  Wine: [
    { name: "Manzanilla — La Gitana", desc: "Crisp, pale sherry from Sanlúcar de Barrameda. Perfect with seafood tapas", price: "€6 / €24" },
    { name: "Albariño — Pazo Señorans", desc: "Aromatic white from Rías Baixas with stone fruit and mineral notes", price: "€8 / €32" },
    { name: "Tempranillo — Pesquera Crianza", desc: "Elegant Ribera del Duero red with dark cherry and vanilla oak", price: "€9 / €36" },
    { name: "Garnacha — Priorat — Clos Mogador", desc: "Bold, full-bodied red from ancient vines in Catalonia's Priorat region", price: "€14 / €56" },
    { name: "Pedro Ximénez — Toro Albalá", desc: "Luscious sweet sherry with notes of fig, date, and dark chocolate", price: "€8 / €32" },
  ],
};

const tabs = Object.keys(menuData);

export default function Menu() {
  const [active, setActive] = useState("Tapas");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="menu" className="py-24 px-6 bg-forest">
      <div className="max-w-5xl mx-auto">
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
            The Menu
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-linen">
            A Taste of Andalucía
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-6 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2.5 text-sm uppercase tracking-widest font-body transition-all duration-300 rounded-sm ${
                active === tab
                  ? "bg-gold text-forest"
                  : "text-linen/60 hover:text-gold border border-linen/20 hover:border-gold/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid gap-0 divide-y divide-linen/10"
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-6 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-heading text-xl md:text-2xl text-linen">
                      {item.name}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-linen/20 hidden md:block" />
                    <span className="font-heading text-gold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-linen/50 font-body text-sm mt-1 md:max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
