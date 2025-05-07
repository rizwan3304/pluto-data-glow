
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Data Scientist",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced Data Scientist with expertise in machine learning and statistical analysis to join our growing team."
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement scalable cloud infrastructure solutions for data-intensive applications on AWS and Azure."
  },
  {
    id: 3,
    title: "Data Engineer",
    location: "New York, NY",
    type: "Full-time",
    description: "Build and optimize data pipelines to process large volumes of structured and unstructured data efficiently."
  },
  {
    id: 4,
    title: "Business Intelligence Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Transform complex data into actionable insights through visualization and reporting tools like Tableau and Power BI."
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-redpluto-dark">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Join Our <span className="text-redpluto-cyan">Team</span>
          </h1>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg mb-16">
            <p className="text-xl text-gray-300 mb-6">
              At RedPluto Analytics, we're building a team of passionate, innovative professionals who are excited about transforming businesses through data.
            </p>
            <p className="text-lg text-gray-300">
              We offer competitive compensation, flexible work arrangements, continuous learning opportunities, and a collaborative culture that values diversity and inclusion.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            
            <div className="max-w-5xl mx-auto mt-12">
              {jobOpenings.map(job => (
                <div key={job.id} className="glass-card p-6 rounded-lg mb-6 hover:border-redpluto-cyan/40 transition-all duration-300">
                  <div className="md:flex md:justify-between md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap items-center mt-2 text-sm text-gray-400">
                        <span className="mr-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-redpluto-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-redpluto-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-redpluto-cyan text-redpluto-dark font-semibold py-2 px-4 rounded-md hover:bg-redpluto-cyan-bright transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a role that fits?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to RedPluto Analytics.
            </p>
            <button className="btn-primary">
              Submit Open Application
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Career;
