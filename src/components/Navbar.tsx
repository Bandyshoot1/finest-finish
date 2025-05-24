"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-darker/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Finest<span className="text-lighter">Finish</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`nav-link ${
                pathname === "/"
                  ? "text-lighter"
                  : "text-white hover:text-lighter"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`nav-link ${
                pathname === "/services"
                  ? "text-lighter"
                  : "text-white hover:text-lighter"
              }`}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className={`nav-link ${
                pathname === "/gallery"
                  ? "text-lighter"
                  : "text-white hover:text-lighter"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`nav-link ${
                pathname === "/about"
                  ? "text-lighter"
                  : "text-white hover:text-lighter"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${
                pathname === "/contact"
                  ? "text-lighter"
                  : "text-white hover:text-lighter"
              }`}
            >
              Contact
            </Link>

            {session ? (
              <div className="flex items-center space-x-4">
                {session.user.role === "admin" && (
                  <Link
                    href="/admin/gallery"
                    className="text-white hover:text-lighter"
                  >
                    Admin
                  </Link>
                )}
                <button onClick={() => signOut()} className="btn-primary">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-darker/95 backdrop-blur-lg rounded-lg mt-4 p-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`nav-link ${
                  pathname === "/" ? "text-lighter" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`nav-link ${
                  pathname === "/services" ? "text-lighter" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={`nav-link ${
                  pathname === "/gallery" ? "text-lighter" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`nav-link ${
                  pathname === "/about" ? "text-lighter" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "text-lighter" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {session ? (
                <div className="flex flex-col space-y-4 pt-4 border-t border-primary/30">
                  {session.user.role === "admin" && (
                    <Link
                      href="/admin/gallery"
                      className="text-white hover:text-lighter"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="btn-primary w-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="btn-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
