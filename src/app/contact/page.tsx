"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Contact <span className="text-lighter">Us</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-darker/70 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lighter"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-darker/70 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lighter"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-darker/70 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lighter"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lighter text-primary py-3 px-6 rounded-lg font-bold hover:bg-lighter/90 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
