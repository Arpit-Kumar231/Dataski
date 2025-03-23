
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    plans: false,
    faq: false
  });

  const plansRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
          if (entry.target === plansRef.current) {
            setIsVisible(prev => ({ ...prev, plans: true }));
          } else if (entry.target === faqRef.current) {
            setIsVisible(prev => ({ ...prev, faq: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (plansRef.current) observer.observe(plansRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams just beginning their data journey",
      price: "$29",
      period: "per month",
      cta: "Get Started",
      features: [
        { included: true, text: "Basic AI analysis tools" },
        { included: true, text: "Up to 100,000 data points" },
        { included: true, text: "Weekly insights report" },
        { included: true, text: "Email support" },
        { included: false, text: "Advanced predictive models" },
        { included: false, text: "Custom integrations" },
        { included: false, text: "Dedicated account manager" },
        { included: false, text: "On-demand scaling" }
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses requiring deeper insights",
      price: "$99",
      period: "per month",
      cta: "Get Started",
      popular: true,
      features: [
        { included: true, text: "Advanced AI analysis tools" },
        { included: true, text: "Up to 1 million data points" },
        { included: true, text: "Daily insights reports" },
        { included: true, text: "Priority email & chat support" },
        { included: true, text: "Advanced predictive models" },
        { included: true, text: "Basic custom integrations" },
        { included: false, text: "Dedicated account manager" },
        { included: false, text: "On-demand scaling" }
      ]
    },
    {
      name: "Enterprise",
      description: "For organizations with complex data needs and scale",
      price: "Custom",
      period: "contact for pricing",
      cta: "Contact Sales",
      features: [
        { included: true, text: "Full AI toolset with custom models" },
        { included: true, text: "Unlimited data points" },
        { included: true, text: "Real-time insights dashboard" },
        { included: true, text: "24/7 premium support" },
        { included: true, text: "Advanced predictive models" },
        { included: true, text: "Full API access & custom integrations" },
        { included: true, text: "Dedicated account manager" },
        { included: true, text: "On-demand scaling" }
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Datsaki's pricing scale with my business?",
      answer: "Our pricing plans are designed to grow with your business. Start with the plan that fits your current needs, and you can upgrade anytime as your data requirements increase. For businesses with specific needs, we also offer custom pricing solutions."
    },
    {
      question: "Can I try Datsaki before committing to a subscription?",
      answer: "Yes! We offer a 14-day free trial on our Starter and Professional plans with no credit card required. For Enterprise plans, we can arrange a custom demo tailored to your specific use case."
    },
    {
      question: "What kind of support is included with each plan?",
      answer: "The Starter plan includes standard email support with 24-48 hour response times. The Professional plan adds priority email and chat support with faster response times. Enterprise plans include 24/7 premium support with a dedicated account manager."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. You'll continue to have access to your plan until the end of your current billing period."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Choose the plan that's right for your business. All plans include access to our core AI platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50" ref={plansRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl neo-brutalism hover-lift transition-all duration-700 ${
                  isVisible.plans 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                } ${plan.popular ? 'border-2 border-black' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-4">
                    <div className="bg-black text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <Link
                    to="/contact"
                    className={`block w-full py-3 rounded-full text-center font-medium transition-medium ${
                      plan.popular
                        ? "bg-black text-white hover:bg-black/90"
                        : "bg-white text-black border border-black/20 hover:bg-black/5"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                <div className="border-t border-gray-200 p-8">
                  <h4 className="font-semibold mb-6">What's included:</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-800" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32" ref={faqRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
              isVisible.faq 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>
          
          <div 
            className={`max-w-3xl mx-auto divide-y divide-gray-200 transition-all duration-700 ${
              isVisible.faq 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {openFaq === index ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`mt-3 transition-all duration-300 overflow-hidden ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
