
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Generative AI in Business Analytics",
    excerpt: "Explore how generative AI is transforming business analytics and creating new opportunities for data-driven decision making.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 2, 2025",
    author: "John Doe",
    category: "Artificial Intelligence"
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Enterprise Data",
    excerpt: "Best practices and strategies for successfully migrating enterprise data systems to cloud platforms.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "April 28, 2025",
    author: "Jane Smith",
    category: "Cloud Computing"
  },
  {
    id: 3,
    title: "Building Effective Data Governance Frameworks",
    excerpt: "How to establish robust data governance frameworks that ensure compliance while enabling innovation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "April 21, 2025",
    author: "Robert Johnson",
    category: "Data Governance"
  },
  {
    id: 4,
    title: "Real-time Analytics: Transforming Business Decision Making",
    excerpt: "How real-time data analytics capabilities are changing the pace and accuracy of business decisions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 15, 2025",
    author: "Sarah Williams",
    category: "Data Analytics"
  },
  {
    id: 5,
    title: "The Role of Data Visualization in Modern Business Intelligence",
    excerpt: "Exploring how data visualization techniques can unlock insights and improve understanding across organizations.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    date: "April 8, 2025",
    author: "Michael Chen",
    category: "Business Intelligence"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-redpluto-dark">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="text-redpluto-cyan">Blog</span>
          </h1>
          <div className="w-20 h-1 bg-redpluto-cyan mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg mb-16">
            <p className="text-xl text-gray-300">
              Insights, trends, and thought leadership from RedPluto's data experts. Stay updated with the latest in data analytics, AI, cloud technologies, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map(post => (
              <div key={post.id} className="glass-card rounded-lg overflow-hidden hover:border-redpluto-cyan/40 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-redpluto-cyan">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">By {post.author}</span>
                    <a 
                      href="#" 
                      className="text-redpluto-cyan text-sm hover:text-white transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="border border-redpluto-cyan/50 text-redpluto-cyan hover:bg-redpluto-cyan/10 px-6 py-3 rounded-md transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
