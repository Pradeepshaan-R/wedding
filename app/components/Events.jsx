"use client";
import { motion } from "framer-motion";

// Wedding events list
const events = [
  {
    title: "Wedding Ceremony",
    time: "3:30 PM",
    place: "Grandeeza Hotel, Lagoon Front",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-burgundy"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25v19.5M3 12h18M4.5 12l7.5-7.5L19.5 12"
        />
      </svg>
    ),
  },
  {
    title: "Wedding Registration",
    time: "5:30 PM",
    place: "Grandeeza Hotel, Grand Ballroom 3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-burgundy"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M3 8.25V6A2.25 2.25 0 015.25 3.75h13.5A2.25 2.25 0 0121 6v2.25M3 12h18"
        />
      </svg>
    ),
  },
  {
    title: "Reception & Dinner",
    time: "6:30 PM",
    place: "Grandeeza Hotel, Grand Ballroom 3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-burgundy"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5a4.5 4.5 0 11-9 0m9 0V6.75a2.25 2.25 0 00-2.25-2.25h-3A2.25 2.25 0 008.25 6.75V10.5m0 0a4.5 4.5 0 119 0z"
        />
      </svg>
    ),
  },
];

// Main component
export default function Events() {
  return (
    <section className="py-20 px-6 bg-burgundy/5 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl mb-8 font-playfair"
      >
        Wedding Events
      </motion.h2>

      {/* Event Cards */}
      <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto mb-16">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 border border-burgundy/20 rounded-xl bg-white/70 shadow-md flex flex-col items-center"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-burgundy/90 to-gold/60 mb-4">
              <div className="bg-ivory w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                {event.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm mb-1">{event.time}</p>
            <p className="text-sm">{event.place}</p>
          </motion.div>
        ))}
      </div>

      {/* 📍 Location Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="text-2xl font-playfair mb-4">Venue Location</h3>
        <p className="text-sm mb-6">
          Grandeeza Hotel, 772 Colombo–Negombo Road, Negombo — Lagoon Front
        </p>

        {/* Google Map Embed */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md border border-burgundy/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63351.882137821326!2d79.8290849!3d7.2058919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2eea545b9dc45%3A0x7389bb7b5eb5e75d!2sGrandeeza%20Hotel!5e0!3m2!1sen!2slk!4v1711870332533!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Directions Button */}
        <div className="mt-6">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Grandeeza+Hotel+Negombo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burgundy text-ivory px-6 py-2 rounded-md font-semibold hover:bg-gold hover:text-burgundy transition-all"
          >
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
