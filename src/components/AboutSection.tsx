
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const section = sectionRef.current;
          if (section) {
            section.classList.add('opacity-100');
            section.classList.remove('opacity-0', 'translate-y-10');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-redpluto-darker">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-redpluto-cyan">RedPluto</span>
          </h2>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            RedPluto transforms businesses through innovation, strategy, and measurable outcomes.
            We combine technical expertise with business insights to deliver solutions that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Vision */}
          <div className="glass-card p-8 rounded-lg hover:border-redpluto-cyan/40 transition-all duration-300">
            <div className="text-redpluto-cyan text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To be the trusted partner for businesses seeking to harness the power of data and 
              transform their operations through cutting-edge analytics and technology solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 rounded-lg hover:border-redpluto-cyan/40 transition-all duration-300">
            <div className="text-redpluto-cyan text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              Delivering exceptional value through data-driven insights that empower organizations 
              to make informed decisions, optimize operations, and achieve sustainable growth.
            </p>
          </div>

          {/* Values */}
          <div className="glass-card p-8 rounded-lg hover:border-redpluto-cyan/40 transition-all duration-300">
            <div className="text-redpluto-cyan text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-300">
              Excellence, integrity, innovation, and client success drive everything we do. 
              We believe in building lasting partnerships based on trust, transparency, and measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
