"use client";

import { useState } from "react";
import Image from "next/image";
import { TrashIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { ref, uploadBytes, listAll, deleteObject } from "firebase/storage";
import { storage } from "../lib/firebase";

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

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    tab: string
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const storageRef = ref(storage, `gallery/${tab}/${file.name}`);
        await uploadBytes(storageRef, file);

        // In a real app, you would store this reference in your database
        return {
          id: file.name,
          url: `gallery/${tab}/${file.name}`,
        };
      });

      const newImages = await Promise.all(uploadPromises);
      setGalleryImages((prev) => ({
        ...prev,
        [tab]: [...prev[tab as keyof typeof prev], ...newImages],
      }));
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
    }
  };

  // Update the handleDelete function
  const handleDelete = async (tab: string, id: string) => {
    try {
      const imageRef = ref(storage, id);
      await deleteObject(imageRef);

      setGalleryImages((prev) => ({
        ...prev,
        [tab]: prev[tab as keyof typeof prev].filter((img) => img.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
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
