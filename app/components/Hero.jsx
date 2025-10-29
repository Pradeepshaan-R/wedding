"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const targetDate = new Date("2025-12-07T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-ivory text-burgundy px-4">
      <h1 className="text-4xl sm:text-6xl font-playfair mb-2">
        Pradeepshaan & Malisha Creancy
      </h1>
      <p className="text-lg sm:text-xl mb-6">Sunday, December 7, 2025</p>

      {/* 🧠 Render countdown only on client */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-6 text-center"
        >
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </motion.div>
      )}
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div>
      <div className="text-4xl sm:text-5xl font-playfair">
        {value?.toString().padStart(2, "0")}
      </div>
      <div className="text-sm sm:text-base uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
