
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-medium ${
        isScrolled || isMobileMenuOpen
          ? "py-4 glass-dark backdrop-blur-xl bg-white/80 border-b border-black/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight z-10">
          Datasaki
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium text-sm tracking-wide hover-lift-sm link-underline"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="font-medium text-sm tracking-wide hover-lift-sm link-underline"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="font-medium text-sm tracking-wide hover-lift-sm link-underline"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="font-medium text-sm tracking-wide hover-lift-sm link-underline"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-black text-white rounded-full font-medium text-sm transition-medium hover:bg-black/90 hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-10"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-medium" />
          ) : (
            <Menu size={24} className="transition-medium" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center transition-medium ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            <Link
              to="/"
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-4 px-8 py-3 bg-black text-white rounded-full font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
