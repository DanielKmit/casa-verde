"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full bg-linen border border-gold/30 rounded-sm px-4 py-3 font-body text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors";

  return (
    <section id="reservations" className="py-24 px-6 bg-linen-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-body">
            Reservations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-forest">
            Join Us for Dinner
          </h2>
          <p className="text-neutral-500 font-body mt-4 max-w-md mx-auto">
            Reserve your table and let us prepare an unforgettable evening for you and your loved ones.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-heading text-3xl text-forest mb-2">
              Thank You!
            </h3>
            <p className="text-neutral-600 font-body">
              Your reservation request has been received. We&apos;ll confirm by email shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white/60 backdrop-blur-sm rounded-sm p-8 md:p-12 shadow-sm border border-gold/10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Date
                </label>
                <input type="date" required className={inputClass} />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Time
                </label>
                <input type="time" required className={inputClass} />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Guests
                </label>
                <select required className={inputClass}>
                  <option value="">Number of guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="9+">9+ (Large party)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Occasion
                </label>
                <select className={inputClass}>
                  <option value="">Select occasion (optional)</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="business">Business Dinner</option>
                  <option value="date">Date Night</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm uppercase tracking-wider text-forest/70 font-body mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Dietary requirements, seating preferences, or any special requests..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-3.5 bg-forest text-linen font-body text-sm uppercase tracking-widest
                  hover:bg-forest-light transition-colors duration-300 rounded-sm"
              >
                Request Reservation
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
