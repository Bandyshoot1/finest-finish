import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-lighter">SparkleClean</span>
            </h1>
            <p className="text-gray-300 mb-4">
              Founded in 2015, SparkleClean has grown from a small local
              cleaning service to a trusted name in professional cleaning
              throughout the region.
            </p>
            <p className="text-gray-300 mb-4">
              Our mission is simple: to provide exceptional cleaning services
              that exceed our clients' expectations while using eco-friendly
              products that are safe for your family, pets, and the environment.
            </p>
            <p className="text-gray-300 mb-6">
              All our team members undergo rigorous training and background
              checks to ensure we deliver consistent, high-quality service you
              can trust.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-lighter">50+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-lighter">10</h3>
                <p className="text-gray-300">Professional Staff</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative h-96 w-full"
          >
            <Image
              src="/images/about-team.jpg"
              alt="SparkleClean team"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-lighter p-4 rounded-xl w-3/4 z-10">
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-800">
                Dedicated professionals committed to delivering exceptional
                cleaning services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
