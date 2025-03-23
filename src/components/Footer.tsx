
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Dataski</h3>
            <p className="text-gray-300 max-w-xs">
              Empowering businesses with cutting-edge AI & ML solutions for data-driven
              decision making.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-medium hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-medium hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-medium hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Features & Services
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Blog
              </Link>
              <Link
                to="/docs"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Documentation
              </Link>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-white transition-medium"
              >
                FAQ
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white transition-medium"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@datsaki.com"
                className="flex items-center text-gray-300 hover:text-white transition-medium"
              >
                <Mail size={18} className="mr-2" />
                info@dataski.com
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition-medium"
              >
                <MessageSquare size={18} className="mr-2" />
                Live Chat
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center md:text-left md:flex md:justify-between text-gray-400">
          <p>&copy; {new Date().getFullYear()} Datsaki. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-white transition-medium">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
