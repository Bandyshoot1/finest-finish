import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-primary/20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="text-white">Professional </span>
          <span className="text-lighter">Cleaning Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          We provide top-quality cleaning services for homes and businesses,
          leaving your space sparkling clean and fresh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/services" className="btn-primary px-8 py-3 text-lg">
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
