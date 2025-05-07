
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExpertiseSection from '../components/ExpertiseSection';
import BenefitsSection from '../components/BenefitsSection';
import CTASection from '../components/CTASection';

const Expertise = () => {
  return (
    <div className="min-h-screen bg-redpluto-dark">
      <Navbar />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="text-redpluto-cyan">Expertise</span>
          </h1>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg mb-16">
            <p className="text-xl text-gray-300">
              At RedPluto Analytics, we offer a comprehensive range of data and technology services designed to help organizations harness the full potential of their data assets and drive digital transformation.
            </p>
          </div>
        </div>
      </div>
      
      <ExpertiseSection />
      <BenefitsSection />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Stack</h2>
          
          <div className="max-w-5xl mx-auto mt-12 glass-card p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">AWS</div>
                <p className="text-sm text-gray-300">Cloud Infrastructure</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">Azure</div>
                <p className="text-sm text-gray-300">Cloud Services</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">Python</div>
                <p className="text-sm text-gray-300">Data Processing</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">TensorFlow</div>
                <p className="text-sm text-gray-300">Machine Learning</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">Tableau</div>
                <p className="text-sm text-gray-300">Visualization</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">Snowflake</div>
                <p className="text-sm text-gray-300">Data Warehousing</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">Hadoop</div>
                <p className="text-sm text-gray-300">Big Data</p>
              </div>
              <div className="p-4">
                <div className="text-redpluto-cyan text-4xl mb-3">React</div>
                <p className="text-sm text-gray-300">Web Development</p>
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

export default Expertise;
