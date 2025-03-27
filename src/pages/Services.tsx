
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowRight, CheckCircle, Activity, Users, Shield, BarChart4 } from 'lucide-react';

const serviceCategories = [
  {
    id: 'strategic-pr',
    title: 'Strategic Public Relations',
    icon: Activity,
    description: 'Comprehensive PR strategies that align with your business objectives, enhancing visibility and credibility across targeted audiences.',
    features: [
      'Brand Positioning & Messaging',
      'Corporate Communication',
      'Integrated PR Campaigns',
      'Thought Leadership Programs',
      'Event Conceptualization & Management'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'media-relations',
    title: 'Media Relations',
    icon: Users,
    description: 'Proactive media engagement to secure positive coverage and build lasting relationships with key publications and journalists.',
    features: [
      'Media Strategy Development',
      'Press Release Creation & Distribution',
      'Media Training & Spokesperson Preparation',
      'Press Conference Organization',
      'Editorial Outreach & Placement'
    ],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'crisis-management',
    title: 'Crisis Management',
    icon: Shield,
    description: 'Swift and strategic response protocols to navigate challenging situations, minimizing reputational damage and rebuilding trust.',
    features: [
      'Crisis Preparedness Planning',
      'Rapid Response Teams',
      'Stakeholder Communication',
      'Media Monitoring & Response',
      'Reputation Recovery Strategies'
    ],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'investor-relations',
    title: 'Investor Relations',
    icon: BarChart4,
    description: 'Specialized communication strategies for IPOs, fundraising, and shareholder engagement, enhancing market valuation and investor confidence.',
    features: [
      'IPO Communication Planning',
      'Investor Presentations & Materials',
      'Earnings Announcements',
      'Shareholder Communication',
      'Financial Media Relations'
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll to specific service if hash is present
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        const yOffset = -100; // Adjust for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-light/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div 
          className="absolute right-1/4 top-1/4 w-96 h-96 rounded-full opacity-10 bg-gold blur-[80px]"
        ></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-6">
              <span className="font-medium">Our Services</span>
            </div>
            
            <AnimatedText 
              tag="h1"
              text="Comprehensive PR Solutions"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            />
            
            <AnimatedText
              tag="p"
              text="Tailored strategies that elevate your brand narrative and drive meaningful impact across channels."
              className="text-gray-dark text-lg max-w-2xl mx-auto"
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="glass-card p-6 text-center hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/10 transition-colors">
                    <Icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">{category.title}</h3>
                  <p className="text-gray-dark text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="inline-flex items-center justify-center text-navy font-medium text-sm group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {serviceCategories.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            id={service.id}
            key={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-navy/5' : 'bg-white'}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <Icon className="w-6 h-6 text-gold" />
                    <span className="font-medium text-navy">{service.title}</span>
                  </div>
                  
                  <AnimatedText 
                    tag="h2"
                    text={service.title}
                    className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6"
                  />
                  
                  <AnimatedText
                    tag="p"
                    text={service.description}
                    className="text-gray-dark mb-8"
                    delay={200}
                  />
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                        <span className="text-gray-dark">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Discuss Your Requirements
                    <ArrowRight size={16} />
                  </a>
                </div>
                
                <div className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText 
            tag="h2"
            text="Ready to Elevate Your Brand Narrative?"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
          />
          
          <AnimatedText
            tag="p"
            text="Let's discuss how our PR expertise can help you achieve your communication objectives"
            className="text-white/80 max-w-2xl mx-auto mb-8"
            delay={200}
          />
          
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-navy hover:bg-gold hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
