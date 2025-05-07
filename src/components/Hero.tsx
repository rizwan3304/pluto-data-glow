
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-digital-network-connections-5120/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-redpluto-dark/60 backdrop-blur-sm"></div>
      </div>

      {/* Overlay */}
      <div className="container mx-auto px-4 z-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Your Data,</span>
              <br />
              <span className="text-redpluto-cyan">Our Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
              Transforming businesses through data-driven insights, innovative strategy, and measurable outcomes.
            </p>
            <div className="pt-4">
              <button className="btn-primary">
                Get a Free Consultation
              </button>
            </div>
          </div>

          {/* Animation Placeholder - Would be replaced with actual Lottie animation */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-redpluto-cyan/5 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 border border-redpluto-cyan/20 rounded-full animate-glow-pulse"></div>
              <div className="absolute inset-10 border border-redpluto-cyan/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-redpluto-cyan text-9xl opacity-70">
                  {/* This would be replaced with a Lottie animation */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-redpluto-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
