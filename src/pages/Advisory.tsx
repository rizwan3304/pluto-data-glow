
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdvisorySection from '../components/AdvisorySection';
import CTASection from '../components/CTASection';

const Advisory = () => {
  return (
    <div className="min-h-screen bg-redpluto-dark">
      <Navbar />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Advisory & <span className="text-redpluto-cyan">Consulting</span>
          </h1>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg mb-16">
            <p className="text-xl text-gray-300">
              Our advisory and consulting services help businesses navigate the complex landscape of data analytics, cloud transformation, and digital innovation. We provide strategic guidance and practical solutions to drive measurable business outcomes.
            </p>
          </div>
        </div>
      </div>
      
      <AdvisorySection />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Consulting Process</h2>
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
              {/* Step 1 */}
              <div className="glass-card p-6 rounded-lg relative hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-redpluto-cyan text-redpluto-dark flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Discovery</h3>
                <p className="text-gray-300 text-sm">Understand your business challenges, goals, and current data landscape.</p>
              </div>
              
              {/* Step 2 */}
              <div className="glass-card p-6 rounded-lg relative hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-redpluto-cyan text-redpluto-dark flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate your data maturity, technology stack, and identify opportunities.</p>
              </div>
              
              {/* Step 3 */}
              <div className="glass-card p-6 rounded-lg relative hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-redpluto-cyan text-redpluto-dark flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Develop tailored roadmap and solutions aligned with your business objectives.</p>
              </div>
              
              {/* Step 4 */}
              <div className="glass-card p-6 rounded-lg relative hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-redpluto-cyan text-redpluto-dark flex items-center justify-center font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Execute the strategy with expert guidance and support at every step.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Advisory;
