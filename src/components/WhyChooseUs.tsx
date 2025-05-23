import {
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Professional Staff",
      description: "Our team consists of trained and vetted professionals.",
      icon: <CheckBadgeIcon className="h-8 w-8 text-lighter" />,
    },
    {
      title: "Eco-Friendly Products",
      description: "We use environmentally safe cleaning products.",
      icon: <SparklesIcon className="h-8 w-8 text-lighter" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Book services at times that work for you.",
      icon: <ClockIcon className="h-8 w-8 text-lighter" />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We stand behind our work with a 100% satisfaction guarantee.",
      icon: <ShieldCheckIcon className="h-8 w-8 text-lighter" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-darker to-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Why Choose <span className="text-lighter">SparkleClean</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary/10 p-6 rounded-lg backdrop-blur-sm border border-primary/20"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
