import ServiceCard from "./ServiceCard";
import {
  HomeIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const ServicesPreview = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Thorough cleaning for your home, including all rooms, kitchens, and bathrooms.",
      icon: <HomeIcon className="h-10 w-10 text-lighter" />,
    },
    {
      title: "Vacation Rental Cleaning",
      description:
        "Specialized cleaning for vacation rentals to ensure guest satisfaction.",
      icon: <HomeModernIcon className="h-10 w-10 text-lighter" />,
    },
    {
      title: "Business Cleaning",
      description:
        "Professional cleaning services for offices and commercial spaces.",
      icon: <BuildingOfficeIcon className="h-10 w-10 text-lighter" />,
    },
    {
      title: "Construction Cleanup",
      description:
        "Post-construction cleaning to prepare your space for occupancy.",
      icon: <BuildingStorefrontIcon className="h-10 w-10 text-lighter" />,
    },
  ];

  return (
    <section className="py-20 bg-darker/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Our <span className="text-lighter">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="btn-primary px-8 py-3 text-lg">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
