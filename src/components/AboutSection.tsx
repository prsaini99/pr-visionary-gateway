
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-light/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div 
        className="absolute right-1/4 top-1/4 w-96 h-96 rounded-full opacity-10 bg-gold blur-[80px]"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                    alt="PR Strategy Meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg max-w-[200px]">
                  <div className="text-navy font-bold text-4xl">20+</div>
                  <div className="text-gray-dark text-sm">Years of Industry Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-6">
                <span className="font-medium">About Prais Consultation</span>
              </div>
              
              <AnimatedText 
                tag="h2"
                text="Leading with Strategic Communication"
                className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6"
              />
              
              <AnimatedText
                tag="p"
                text="At Prais Consultation, we've been at the forefront of strategic communications for more than two decades, crafting narratives that resonate and drive impact."
                className="text-gray-dark mb-4"
                delay={200}
              />
              
              <AnimatedText
                tag="p"
                text="Our expertise spans across crisis communication, media relations, and reputation management, helping prominent brands navigate complex challenges and capitalize on opportunities."
                className="text-gray-dark mb-6"
                delay={300}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-navy mb-1">Strategic Media Outreach</div>
                  <div className="text-sm text-gray-dark">Targeted communications that reach the right audiences through the most effective channels.</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-navy mb-1">Crisis Management</div>
                  <div className="text-sm text-gray-dark">Rapid response strategies that protect and rebuild reputation during challenging times.</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-navy mb-1">Brand Positioning</div>
                  <div className="text-sm text-gray-dark">Compelling narratives that differentiate your brand in competitive markets.</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-semibold text-navy mb-1">Nationwide Presence</div>
                  <div className="text-sm text-gray-dark">Operating across 250+ cities with localized expertise and global standards.</div>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors"
              >
                Learn more about our approach
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
