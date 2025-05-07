
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "RedPluto's data analytics solutions helped us identify key market trends and optimize our product strategy, resulting in a 30% increase in revenue.",
    author: "Jane Smith",
    position: "CEO, TechInnovate Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The cloud migration project delivered by RedPluto was seamless and exceeded our expectations. We're now operating more efficiently with significant cost savings.",
    author: "Michael Johnson",
    position: "CTO, Global Connect",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    quote: "Working with RedPluto transformed how we approach data governance. Their expertise helped us establish robust frameworks that ensure compliance and data quality.",
    author: "Sophia Chen",
    position: "Data Officer, HealthPlus",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const setTestimonial = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
    <section id="testimonials" className="py-20 bg-redpluto-darker">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client <span className="text-redpluto-cyan">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-10"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with RedPluto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="glass-card p-8 md:p-12 rounded-lg">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="mb-6 text-redpluto-cyan text-4xl flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl text-center text-white mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-redpluto-cyan mr-4"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-300 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-10">
              <button 
                onClick={(e) => { e.preventDefault(); prevTestimonial(); }}
                className="text-redpluto-cyan hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeIndex === index ? 'bg-redpluto-cyan' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={(e) => { e.preventDefault(); nextTestimonial(); }}
                className="text-redpluto-cyan hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
