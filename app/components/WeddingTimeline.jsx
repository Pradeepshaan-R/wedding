"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const timeline = [
  {
    time: "3:30 PM",
    title: "Wedding Ceremony 🌸",
    description:
      "Join us at the Lagoon Front, Grandeeza Hotel, as we say 'I do' surrounded by love and laughter.",
  },
  {
    time: "5:30 PM",
    title: "Registration 💍",
    description:
      "A moment to make it official — witness the signing and celebrate the beginning of forever.",
  },
  {
    time: "6:30 PM",
    title: "Reception & Dinner 🍽️",
    description:
      "Let’s raise a toast and enjoy a delightful dinner at Grand Ballroom 3 — filled with music, smiles, and stories.",
  },
  {
    time: "8:30 PM",
    title: "First Dance 💃",
    description:
      "As the lights dim, watch the couple’s first dance — a moment to remember, forever.",
  },
];

export default function WeddingTimeline() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generate petals only after window is available
    const newPetals = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.8 + 0.3,
      duration: 6 + Math.random() * 4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <section className="relative py-24 px-6 bg-ivory text-burgundy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/round-floral.png')] bg-center bg-contain bg-no-repeat"></div>

      {/* Floating petals */}
      {typeof window !== "undefined" && petals.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {petals.map((petal, i) => (
            <motion.span
              key={i}
              className="absolute text-pink-300 opacity-40"
              initial={{
                x: petal.x,
                y: petal.y,
                scale: petal.scale,
              }}
              animate={{
                y: [petal.y, petal.y - 120, petal.y],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: petal.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              ❀
            </motion.span>
          ))}
        </div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-playfair text-center mb-20 relative z-10"
      >
        The Wedding Day Timeline
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[3px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-burgundy/30 before:to-pink-400/40">
        {timeline.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Glowing dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-tr from-burgundy to-pink-300 rounded-full shadow-md shadow-pink-200"
              animate={{
                boxShadow: [
                  "0 0 8px #ffb6c1",
                  "0 0 20px #ffb6c1",
                  "0 0 8px #ffb6c1",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            ></motion.div>

            {/* Event card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`w-full md:w-1/2 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-md relative z-10 hover:shadow-lg ${
                index % 2 === 0
                  ? "md:pr-12 md:text-left text-center"
                  : "md:pl-12 md:text-right text-center"
              }`}
            >
              <h3 className="text-xl font-semibold font-playfair mb-1">
                {event.title}
              </h3>
              <p className="font-medium text-burgundy/80 mb-2">{event.time}</p>
              <p className="text-sm leading-relaxed">{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
