import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse: boolean;
}

const ServiceDetail = ({
  title,
  description,
  features,
  image,
  reverse,
}: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center`}
    >
      <div className="lg:w-1/2">
        <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent" />
        </div>
      </div>

      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-lighter">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>

        <h3 className="text-xl font-semibold mb-3">Service Includes:</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-lighter mr-2">✓</span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="btn-primary mt-6">Book This Service</button>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
