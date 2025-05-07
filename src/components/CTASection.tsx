
import React, { useEffect, useRef } from 'react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <section className="py-20 bg-redpluto-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-redpluto-cyan/5 filter blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-redpluto-cyan/10 filter blur-3xl"></div>
      </div>

      <div 
        ref={sectionRef}
        className="container mx-auto px-4 relative z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="glass-card p-8 md:p-12 rounded-lg text-center max-w-4xl mx-auto backdrop-blur-md glow-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Talk About <span className="text-redpluto-cyan">Your Data</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to harness the full potential of your data? Our experts are here to help you transform your business through innovative data solutions.
          </p>
          
          <button className="btn-primary text-lg px-8 py-4 animate-glow-pulse">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
