import ServiceDetail from "../../components/ServiceDetail";

const ServicesPage = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Our residential cleaning service is designed to give your home a thorough, top-to-bottom clean. We pay attention to every detail, from dusting hard-to-reach places to sanitizing high-touch surfaces.",
      features: [
        "Dusting all surfaces",
        "Vacuuming and mopping floors",
        "Kitchen cleaning (appliances, counters, sinks)",
        "Bathroom sanitization",
        "Bedroom organization",
        "Window cleaning (interior)",
      ],
      image: "/images/residential-cleaning.jpg",
    },
    {
      title: "Vacation Rental Cleaning",
      description:
        "Specialized cleaning for vacation rental properties to ensure your guests arrive to a spotless space. We follow strict checklists to meet rental platform standards.",
      features: [
        "Linen changes and bed making",
        "Full bathroom sanitization",
        "Kitchen deep cleaning",
        "Restocking essentials",
        "High-touch surface disinfection",
        "Quick turnover service",
      ],
      image: "/images/vacation-cleaning.jpg",
    },
    {
      title: "Business Cleaning",
      description:
        "Professional cleaning services for offices and commercial spaces to maintain a healthy, productive work environment.",
      features: [
        "Daily or weekly office cleaning",
        "Restroom sanitization",
        "Break room cleaning",
        "Floor care (vacuuming, mopping)",
        "Trash removal",
        "High-touch surface disinfection",
      ],
      image: "/images/office-cleaning.jpg",
    },
    {
      title: "Construction Cleanup",
      description:
        "Post-construction cleaning to remove dust, debris, and construction residues, preparing your space for occupancy.",
      features: [
        "Debris removal",
        "Deep dusting of all surfaces",
        "Window cleaning (interior and exterior)",
        "Floor cleaning and polishing",
        "Final touch cleaning",
        "HVAC system cleaning",
      ],
      image: "/images/construction-cleaning.jpg",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-lighter">Services</span>
        </h1>

        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceDetail
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
