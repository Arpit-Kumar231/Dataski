
import { useState, useEffect, useRef } from "react";
import { Brain, Database, LineChart, Code, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Features = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    capabilities: false,
    benefits: false,
    integrations: false
  });

  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);

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
          if (entry.target === capabilitiesRef.current) {
            setIsVisible(prev => ({ ...prev, capabilities: true }));
          } else if (entry.target === benefitsRef.current) {
            setIsVisible(prev => ({ ...prev, benefits: true }));
          } else if (entry.target === integrationsRef.current) {
            setIsVisible(prev => ({ ...prev, integrations: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (capabilitiesRef.current) observer.observe(capabilitiesRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (integrationsRef.current) observer.observe(integrationsRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const capabilities = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Advanced AI Decision Making",
      description: "Our proprietary AI algorithms analyze complex data sets to extract actionable insights, enabling better strategic decision-making across your organization."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Intelligent Data Infrastructure",
      description: "Built on a scalable, secure foundation that adapts to your growing data needs while maintaining peak performance and reliability."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Predictive Analytics & Forecasting",
      description: "Anticipate market trends, customer behaviors, and operational challenges before they impact your business."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Developer-Friendly API Ecosystem",
      description: "Seamlessly integrate Dataski's capabilities into your existing systems with our comprehensive API solutions."
    }
  ];

  const benefits = [
    {
      title: "Enhanced Decision Accuracy",
      description: "Minimize human error and biases in your decision processes with AI-driven insights based on comprehensive data analysis."
    },
    {
      title: "Operational Efficiency",
      description: "Automate routine analyses and focus your team's energy on strategic initiatives that drive business growth."
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of market trends and competitor movements with real-time data insights and predictive capabilities."
    },
    {
      title: "Risk Mitigation",
      description: "Identify potential risks early and develop proactive strategies to address challenges before they affect your business."
    },
    {
      title: "Cost Reduction",
      description: "Optimize resource allocation and reduce wasteful spending by making data-driven operational decisions."
    },
    {
      title: "Scalable Growth",
      description: "Our platform grows with your business, providing consistent insights regardless of your data volume or complexity."
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "https://www.svgrepo.com/show/303235/salesforce-2-logo.svg" },
    { name: "Microsoft Azure", logo: "https://www.svgrepo.com/show/303372/azure-1-logo.svg" },
    { name: "AWS", logo: "https://www.svgrepo.com/show/303709/amazon-web-services-2-logo.svg" },
    { name: "Google Cloud", logo: "https://www.svgrepo.com/show/303553/google-cloud-logo.svg" },
    { name: "Slack", logo: "https://www.svgrepo.com/show/303268/slack-logo.svg" },
    { name: "HubSpot", logo: "https://www.svgrepo.com/show/303265/hubspot-logo.svg" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Features & Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Discover how Dataski's advanced AI & ML capabilities can transform your business operations and decision-making processes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" ref={capabilitiesRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI & ML Capabilities</h2>
            <p className="text-lg text-gray-700">
              Our platform leverages cutting-edge artificial intelligence and machine learning to deliver powerful business solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className={`bg-white p-10 rounded-2xl neo-brutalism transition-all duration-700 ${
                  isVisible.capabilities 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 text-black">{capability.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32" ref={benefitsRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Businesses</h2>
            <p className="text-lg text-gray-700">
              See how small and medium-sized enterprises achieve remarkable results with Dataski.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible.benefits 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 text-black flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" ref={integrationsRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
              isVisible.integrations 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-lg text-gray-700">
              Dataski integrates with your existing tools and platforms for a unified workflow.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-700 ${
              isVisible.integrations 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {integrations.map((integration, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
