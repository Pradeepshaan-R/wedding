"use client";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative py-20 px-6 bg-ivory text-burgundy overflow-hidden">
      {/* Subtle floral background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/round-floral.png')] bg-center bg-contain bg-no-repeat"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-playfair text-center mb-10 relative z-10"
      >
        Our Story
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/couple.png"
            alt="Proposal illustration"
            className="w-full sm:w-[420px] md:w-[480px] lg:w-[520px] rounded-xl object-contain opacity-80 mix-blend-multiply transition-all duration-700 hover:opacity-100"
          />
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            It all began with two hearts chasing dreams in their own worlds —
            until destiny made them cross paths. What started as a friendship
            soon turned into a bond filled with laughter, long conversations,
            and endless coffee dates.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Through every little moment, they discovered not just love but a
            partnership — one built on faith, patience, and a shared vision of a
            beautiful tomorrow.
          </p>
          <p className="text-base sm:text-lg italic font-playfair">
            And on December 7, 2025, their story begins a new chapter — one
            written together, forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
