
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <span className="font-medium">About Us</span>
            </div>
            
            <AnimatedText 
              tag="h1"
              text="Two Decades of PR Excellence"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            />
            
            <AnimatedText
              tag="p"
              text="Crafting impactful narratives that elevate brands and create lasting impressions across diverse industries."
              className="text-gray-dark text-lg max-w-2xl mx-auto"
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText 
                tag="h2"
                text="Our Journey"
                className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6"
              />
              
              <div className="space-y-4 text-gray-dark">
                <p>
                  Founded in 2000, Prais Consultation has evolved into one of India's most trusted PR consultancies, serving clients across industries with strategic communication expertise.
                </p>
                <p>
                  What began as a small team with big aspirations has grown into a nationwide network of PR professionals, operating in more than 250 cities while maintaining our commitment to excellence and personalized service.
                </p>
                <p>
                  Throughout our journey, we've navigated the changing media landscape, embracing new technologies and communication channels while staying true to the timeless principles of authentic storytelling and relationship building.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Prais Consultation Team" 
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-gold mr-2">20</div>
                  <div className="text-navy text-xl">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-dark mb-6 flex-1">
                To be the most trusted PR partner for organizations seeking to build lasting narratives that resonate with audiences and drive meaningful impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Setting new standards in strategic communications</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Delivering measurable results that surpass expectations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Expanding our reach while maintaining personalized service</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-dark mb-6 flex-1">
                To empower our clients with strategic communication solutions that enhance their brand narratives, navigate challenges effectively, and capitalize on opportunities in an ever-evolving media landscape.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Crafting authentic narratives that resonate with target audiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Building and nurturing meaningful media relationships</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-gray-dark">Consistently delivering value through innovative PR strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Strengths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              tag="h2"
              text="Our Key Strengths"
              className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
            />
            
            <AnimatedText
              tag="p"
              text="The pillars that distinguish our approach to public relations"
              className="text-gray-dark max-w-2xl mx-auto"
              delay={200}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">Crisis Communication</h3>
              <p className="text-gray-dark">
                Expert navigation through challenging situations with rapid response protocols and reputation management strategies that minimize impact and restore trust.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">Media Relations</h3>
              <p className="text-gray-dark">
                Strong network of media connections across print, broadcast, and digital platforms, cultivated over two decades to ensure impactful coverage for our clients.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V12m0 0V9.5m0 2.5h.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 001.5 1.5H18m-6-3v-1.5m0 1.5H9.5a1.5 1.5 0 00-1.5 1.5v1a1.5 1.5 0 01-1.5 1.5H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">Nationwide Presence</h3>
              <p className="text-gray-dark">
                Extensive network spanning 250+ cities across India, providing localized expertise with a deep understanding of regional media landscapes and cultural nuances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Profile */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <AnimatedText 
                tag="h2"
                text="Leadership"
                className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6"
              />
              
              <h3 className="text-xl font-medium text-navy mb-2">Subhash Pais</h3>
              <p className="text-gold mb-4">Director, Strategic PR Initiatives</p>
              
              <div className="space-y-4 text-gray-dark">
                <p>
                  With over 25 years of experience in public relations and strategic communications, Subhash has established himself as a trusted advisor to some of India's most prominent brands and organizations.
                </p>
                <p>
                  His expertise in crisis management and corporate communication has helped numerous clients navigate complex challenges while maintaining their reputation and stakeholder trust.
                </p>
                <p>
                  Under his leadership, Prais Consultation has grown from a boutique agency to a nationwide PR powerhouse with a proven track record of delivering impactful results across sectors.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Subhash Pais" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-gold mr-2">25+</div>
                  <div className="text-navy text-xl">Years of<br />Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
