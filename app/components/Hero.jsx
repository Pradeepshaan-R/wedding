"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // 👈 prevents SSR crash

    const targetDate = new Date("2025-12-07T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-ivory text-burgundy px-4">
        <h1 className="text-4xl sm:text-6xl font-playfair mb-2">
          Pradeepshaan & Malisha Creancy
        </h1>
        <p className="text-lg sm:text-xl">Sunday, December 7, 2025</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-ivory text-burgundy px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-playfair mb-2"
      >
        Pradeepshaan & Malisha Creancy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-lg sm:text-xl"
      >
        Sunday, December 7, 2025
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-10 flex gap-6 text-center"
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
    </div>
  );
}