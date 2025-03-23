
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Database, LineChart, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    testimonials: false,
    cta: false
  });

  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set hero to visible after mount with a short delay
    const heroTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === featuresRef.current) {
            setIsVisible(prev => ({ ...prev, features: true }));
          } else if (entry.target === testimonialsRef.current) {
            setIsVisible(prev => ({ ...prev, testimonials: true }));
          } else if (entry.target === ctaRef.current) {
            setIsVisible(prev => ({ ...prev, cta: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Decision Making",
      description: "Leverage cutting-edge AI algorithms to make data-driven decisions with confidence."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Infrastructure",
      description: "Scalable and secure data architecture designed for performance and reliability."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast trends and stay ahead of market changes with our predictive tools."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer APIs",
      description: "Integrate our technology directly into your workflows with our robust API solutions."
    }
  ];

  const testimonials = [
    {
      quote: "Datsaki transformed our approach to market analysis. We've seen a 40% increase in prediction accuracy since implementation.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The integration was seamless, and the results were immediate. Datsaki's platform helped us reduce decision-making time by 60%.",
      author: "Alex Chen",
      position: "Data Strategy Director, Innovate Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                Transform Data into Intelligent Decisions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 text-balance">
                Datsaki combines cutting-edge AI technology with intuitive design to help businesses make smarter, data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-black text-white rounded-full font-medium text-base transition-medium hover:bg-black/90 hover:scale-[1.03]"
                >
                  Get Started
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-3.5 bg-white text-black border border-black/20 rounded-full font-medium text-base transition-medium hover:bg-black/5 hover:scale-[1.03]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Animation Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-70 pointer-events-none overflow-hidden">
          <HeroAnimation />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Solutions for Modern Businesses</h2>
            <p className="text-lg text-gray-700">
              Our platform delivers powerful tools that simplify complex data challenges and drive real business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl neo-brutalism hover-lift transition-all duration-700 ${
                  isVisible.features 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 text-black">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" ref={testimonialsRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Companies</h2>
            <p className="text-lg text-gray-700">
              See how Datsaki is helping businesses achieve remarkable results.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`w-full flex-shrink-0 p-8 transition-all duration-700 ${
                      isVisible.testimonials 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-16'
                    }`}
                  >
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                      <p className="text-xl italic mb-8">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-black"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black text-white" ref={ctaRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              isVisible.cta 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the growing number of businesses leveraging Datsaki's AI platform to make smarter decisions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-medium hover:bg-gray-100 hover:scale-[1.03]"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
