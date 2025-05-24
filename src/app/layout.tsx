import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProviders from "../components/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finest Finish | Professional Cleaning Services",
  description:
    "Premium cleaning services for residential and commercial properties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AuthProviders>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProviders>
      </body>
    </html>
  );
}
