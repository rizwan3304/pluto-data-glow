
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-redpluto-dark">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-redpluto-cyan">RedPluto</span>
          </h1>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg">
            <p className="text-xl text-gray-300 mb-6">
              RedPluto Analytics is a leading data analytics and consulting firm dedicated to helping businesses harness the power of their data to drive growth and innovation.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Founded by a team of data scientists and business strategists, RedPluto combines technical expertise with business acumen to deliver solutions that address real-world challenges and create tangible value.
            </p>
            
            <p className="text-lg text-gray-300">
              Our mission is to democratize data analytics and make advanced technologies accessible to organizations of all sizes. We believe that data-driven decision-making is key to success in today's competitive landscape.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Team Member 1 */}
              <div className="glass-card p-6 rounded-lg text-center hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="mb-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-redpluto-cyan" />
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-redpluto-cyan mb-2">CEO & Founder</p>
                <p className="text-gray-400 text-sm">Former data scientist with 15+ years of experience in analytics and business intelligence.</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="glass-card p-6 rounded-lg text-center hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-redpluto-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-redpluto-cyan mb-2">CTO</p>
                <p className="text-gray-400 text-sm">Cloud architecture expert specializing in AWS and Azure environments for data solutions.</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="glass-card p-6 rounded-lg text-center hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="mb-4">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Robert Johnson" className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-redpluto-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Robert Johnson</h3>
                <p className="text-redpluto-cyan mb-2">Lead Data Scientist</p>
                <p className="text-gray-400 text-sm">PhD in Machine Learning with expertise in developing AI models for business applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
