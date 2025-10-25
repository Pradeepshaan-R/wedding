"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const targetDate = new Date("2025-12-07T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return null;

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(updateCountdown());
    const timer = setInterval(() => setTimeLeft(updateCountdown()), 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-ivory text-burgundy px-4 overflow-hidden">
      {/* 🌸 Floral background image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <img
          src="/round-floral.png"
          alt="floral ring"
          className="w-[500px] sm:w-[700px] md:w-[800px] h-auto object-contain"
        />
      </div>

      {/* Overlay gradient for smooth fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/30 to-ivory pointer-events-none"></div>

      {/* Text content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-playfair mb-2 relative z-10"
      >
        Pradeepshaan & Malisha Creancy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-lg sm:text-xl relative z-10"
      >
        Sunday, December 7, 2025
      </motion.p>

      {/* Countdown */}
      {timeLeft && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-10 flex gap-6 text-center relative z-10"
        >
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const value = [
              timeLeft.days,
              timeLeft.hours,
              timeLeft.mins,
              timeLeft.secs,
            ][i];
            return (
              <div key={label}>
                <div className="text-4xl sm:text-5xl font-playfair">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm sm:text-base uppercase tracking-wide">
                  {label}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
