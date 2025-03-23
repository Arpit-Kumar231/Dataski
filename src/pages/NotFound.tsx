
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center py-20">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium transition-medium hover:bg-black/90"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
