"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve the greater metropolitan area. Contact us to confirm if we service your specific location.",
    },
    {
      question: "How often should I schedule cleaning services?",
      answer:
        "This depends on your needs. Many clients opt for weekly, bi-weekly, or monthly services. We can help determine what works best for you.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No, we bring all our own professional-grade equipment and eco-friendly cleaning products.",
    },
    {
      question: "Are your cleaners background checked?",
      answer:
        "Yes, all our team members undergo thorough background checks and training before joining our team.",
    },
    {
      question: "How do I pay for services?",
      answer:
        "We accept all major credit cards, and payment is processed securely through our online system after service completion.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Frequently Asked <span className="text-lighter">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-primary/30 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-lighter" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-lighter" />
                )}
              </button>

              {activeIndex === index && (
                <div className="mt-2 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
