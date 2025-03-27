
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Strategic Public Relations',
    description: 'Comprehensive PR strategies that align with your business objectives, enhancing visibility and credibility across targeted audiences.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/services#strategic-pr'
  },
  {
    id: 2,
    title: 'Media Relations',
    description: 'Proactive media engagement to secure positive coverage and build lasting relationships with key publications and journalists.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/services#media-relations'
  },
  {
    id: 3,
    title: 'Crisis Management',
    description: 'Swift and strategic response protocols to navigate challenging situations, minimizing reputational damage and rebuilding trust.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/services#crisis-management'
  },
  {
    id: 4,
    title: 'Investor Relations',
    description: 'Specialized communication strategies for IPOs, fundraising, and shareholder engagement, enhancing market valuation and investor confidence.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/services#investor-relations'
  }
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white shadow-sm mb-4">
            <span className="font-medium">Our Services</span>
          </div>
          
          <AnimatedText 
            tag="h2"
            text="Comprehensive PR Solutions"
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
          />
          
          <AnimatedText
            tag="p"
            text="Tailored communication strategies to elevate your brand narrative"
            className="text-gray-dark max-w-2xl mx-auto"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-medium/10 transition-all duration-300 hover:shadow-md"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="font-serif text-xl font-semibold text-navy group-hover:text-white transition-colors duration-300">{service.title}</h3>
                
                <div className={`mt-2 text-gray-dark group-hover:text-white/90 transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100'}`}>
                  <p>{service.description}</p>
                </div>
                
                <Link 
                  to={service.link}
                  className="mt-4 inline-flex items-center gap-2 text-navy font-medium group-hover:text-gold transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
