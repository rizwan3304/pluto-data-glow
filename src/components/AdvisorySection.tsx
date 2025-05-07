
import React, { useEffect, useRef } from 'react';

const advisoryServices = [
  {
    title: "Data Strategy",
    description: "Develop comprehensive data strategies aligned with business objectives to maximize value from your data assets.",
  },
  {
    title: "DevOps",
    description: "Implement DevOps practices to streamline development, deployment, and operations of your data systems.",
  },
  {
    title: "Cloud Migration",
    description: "Seamlessly transition your data infrastructure to cloud platforms for enhanced scalability and efficiency.",
  },
  {
    title: "BI Modeling",
    description: "Create business intelligence models that provide actionable insights for strategic decision-making.",
  },
  {
    title: "Automation",
    description: "Automate repetitive data processes to increase efficiency and reduce operational costs.",
  },
  {
    title: "Vendor/Tool Selection",
    description: "Navigate the complex landscape of data tools and platforms to select the best solutions for your needs.",
  },
];

const AdvisorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate list items with delay
          itemsRef.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add('animate-slide-in');
                item.style.opacity = '1';
              }, index * 150);
            }
          });
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
    <section id="advisory" className="py-20 bg-redpluto-darker">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advisory & <span className="text-redpluto-cyan">Consulting</span>
          </h2>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-10"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expert consultants provide strategic guidance to help you navigate the complex world of data and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="glass-card p-8 rounded-lg">
            <ul className="space-y-6">
              {advisoryServices.map((service, index) => (
                <li 
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="flex items-start opacity-0"
                >
                  <div className="text-redpluto-cyan flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <div className="absolute top-0 left-0 w-64 h-64 bg-redpluto-cyan/5 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-redpluto-cyan/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-redpluto-cyan w-48 h-48 opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 16c0-1.1-1.8-2-4-2s-4 .9-4 2"></path>
                      <circle cx="12" cy="7" r="3"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
