"use client";

import { useState } from "react";
import Image from "next/image";
import { TrashIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const AdminGalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("residential");
  const [uploading, setUploading] = useState(false);

  // Sample images - in a real app, these would come from your database
  const [galleryImages, setGalleryImages] = useState({
    residential: [
      { id: 1, url: "/images/gallery/residential-1.jpg" },
      { id: 2, url: "/images/gallery/residential-2.jpg" },
      { id: 3, url: "/images/gallery/residential-3.jpg" },
    ],
    vacation: [
      { id: 1, url: "/images/gallery/vacation-1.jpg" },
      { id: 2, url: "/images/gallery/vacation-2.jpg" },
    ],
    business: [
      { id: 1, url: "/images/gallery/business-1.jpg" },
      { id: 2, url: "/images/gallery/business-2.jpg" },
    ],
    construction: [
      { id: 1, url: "/images/gallery/construction-1.jpg" },
      { id: 2, url: "/images/gallery/construction-2.jpg" },
    ],
  });

  const handleDelete = (tab: string, id: number) => {
    setGalleryImages((prev) => ({
      ...prev,
      [tab]: prev[tab as keyof typeof prev].filter((img) => img.id !== id),
    }));
  };

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    tab: string
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    // In a real app, you would upload to your backend or storage service here
    // For now, we'll just simulate an upload
    setTimeout(() => {
      const newImages = Array.from(files).map((file, i) => ({
        id: Date.now() + i,
        url: URL.createObjectURL(file),
      }));

      setGalleryImages((prev) => ({
        ...prev,
        [tab]: [...prev[tab as keyof typeof prev], ...newImages],
      }));
      setUploading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-wrap mb-8 gap-2">
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

      <div className="mb-8">
        <label className="btn-primary inline-flex items-center cursor-pointer">
          <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
          Upload Images
          <input
            type="file"
            multiple
            onChange={(e) => handleUpload(e, activeTab)}
            className="hidden"
            accept="image/*"
            disabled={uploading}
          />
        </label>
        {uploading && <span className="ml-4 text-gray-300">Uploading...</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages[activeTab as keyof typeof galleryImages].map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            <Image
              src={image.url}
              alt={`${activeTab} cleaning example`}
              fill
              className="object-cover"
            />
            <button
              onClick={() => handleDelete(activeTab, image.id)}
              className="absolute top-2 right-2 bg-red-500/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-medium capitalize">
                {activeTab} Cleaning
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGalleryTabs;
