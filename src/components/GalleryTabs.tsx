"use client";

import { useState } from "react";
import Image from "next/image";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("residential");

  // Sample images - in a real app, these would come from your database
  const galleryImages = {
    residential: [
      "/images/gallery/residential-1.jpg",
      "/images/gallery/residential-2.jpg",
      "/images/gallery/residential-3.jpg",
      "/images/gallery/residential-4.jpg",
      "/images/gallery/residential-5.jpg",
      "/images/gallery/residential-6.jpg",
    ],
    vacation: [
      "/images/gallery/vacation-1.jpg",
      "/images/gallery/vacation-2.jpg",
      "/images/gallery/vacation-3.jpg",
    ],
    business: [
      "/images/gallery/business-1.jpg",
      "/images/gallery/business-2.jpg",
      "/images/gallery/business-3.jpg",
      "/images/gallery/business-4.jpg",
    ],
    construction: [
      "/images/gallery/construction-1.jpg",
      "/images/gallery/construction-2.jpg",
      "/images/gallery/construction-3.jpg",
    ],
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["residential", "vacation", "business", "construction"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full capitalize ${
              activeTab === tab
                ? "bg-lighter text-white"
                : "bg-primary/20 text-gray-300 hover:bg-primary/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages[activeTab as keyof typeof galleryImages].map(
          (image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={image}
                alt={`${activeTab} cleaning example ${index + 1}`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium capitalize">
                  {activeTab} Cleaning
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GalleryTabs;
