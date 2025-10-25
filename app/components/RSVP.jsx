"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      guests: form[1].value,
      attendance: form[2].value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw8jHUXeHmz4EQjbzAs_K8zGXy0ODrSXn9vLKaW0lk_TH3E458Gzi9Wa7ZZEoQVyEFt9Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl mb-6 font-playfair"
      >
        RSVP
      </motion.h2>

      <AnimatePresence>
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-burgundy/30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <input
              type="number"
              placeholder="Number of Guests"
              className="border border-burgundy/30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <select
              className="border border-burgundy/30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            >
              <option value="">Will you attend?</option>
              <option value="yes">Yes, can’t wait!</option>
              <option value="no">Sadly, can’t make it</option>
            </select>
            <button
              type="submit"
              className="bg-burgundy text-ivory py-2 rounded-md font-semibold hover:bg-gold hover:text-burgundy transition-all"
            >
              Submit RSVP
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-lg font-playfair"
          >
            💌 Thank you for your RSVP! <br /> Your response has been recorded.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
