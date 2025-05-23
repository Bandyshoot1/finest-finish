"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AdminGalleryTabs from "../../../components/AdminGalleryTabs";

const AdminGalleryPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (session?.user.role !== "admin") {
    redirect("/");
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Gallery <span className="text-lighter">Management</span>
        </h1>

        <AdminGalleryTabs />
      </div>
    </section>
  );
};

export default AdminGalleryPage;
