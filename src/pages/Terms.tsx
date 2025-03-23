
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set content to visible after mount with a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-3xl mx-auto prose prose-lg prose-black prose-headings:font-semibold prose-a:text-black prose-a:no-underline hover:prose-a:underline transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2>1. Introduction</h2>
            <p>
              Welcome to Datsaki. These Terms and Conditions govern your use of our website and services. By accessing or using Datsaki, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h2>2. Use of Services</h2>
            <p>
              Datsaki provides AI and machine learning solutions for data analysis and decision-making. Your use of our services is subject to these Terms and any additional terms specific to the services you use.
            </p>
            
            <h3>2.1 Account Registration</h3>
            <p>
              To access certain features of Datsaki, you may be required to register for an account. You must provide accurate and complete information and keep your account details secure.
            </p>
            
            <h3>2.2 User Responsibilities</h3>
            <p>
              You are responsible for all activities that occur under your account. You must immediately notify Datsaki of any unauthorized use of your account or any other breach of security.
            </p>
            
            <h2>3. Data Privacy</h2>
            <p>
              Your privacy is important to us. Our <a href="/privacy">Privacy Policy</a> describes how we collect, use, and protect your personal information. By using Datsaki, you consent to our data practices as described in our Privacy Policy.
            </p>
            
            <h2>4. Intellectual Property</h2>
            <p>
              The content, features, and functionality of Datsaki, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by Datsaki or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>5. User Content</h2>
            <p>
              When you submit, upload, or otherwise make available any content through Datsaki, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display that content in connection with the services we provide to you.
            </p>
            
            <h2>6. Subscription Terms</h2>
            <p>
              If you purchase a subscription to Datsaki services, you agree to pay the applicable fees as they become due. Subscription fees are non-refundable except as required by law or as explicitly stated in these Terms.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Datsaki, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              Datsaki reserves the right to modify these Terms at any time. We will provide notice of significant changes to these Terms by posting the revised Terms on our website. Your continued use of Datsaki after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@datsaki.com<br />
              Address: 123 Tech Avenue, Suite 100, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Terms;
