import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Finest<span className="text-lighter">Finish</span>
            </h3>
            <p className="text-gray-300">
              Professional cleaning services for residential and commercial
              properties.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-lighter transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-lighter transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-lighter transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-lighter transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-lighter transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-lighter transition cursor-pointer">
                Residential Cleaning
              </li>
              <li className="text-gray-300 hover:text-lighter transition cursor-pointer">
                Vacation Rental Cleaning
              </li>
              <li className="text-gray-300 hover:text-lighter transition cursor-pointer">
                Business Cleaning
              </li>
              <li className="text-gray-300 hover:text-lighter transition cursor-pointer">
                Construction Cleanup
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-300 hover:text-lighter transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-lighter transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-lighter transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-lighter transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-gray-300">Email: info@finestfinish.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="border-t border-primary/30 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Finest Finish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
