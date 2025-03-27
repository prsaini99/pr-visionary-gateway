
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const caseStudies = [
  {
    id: 1,
    title: 'Parag Milk Foods',
    subtitle: 'GO Cheese Positioning Against Market Leader',
    description: 'Strategic PR campaign that successfully positioned GO Cheese as a premium alternative to the market leader, resulting in 45% increase in brand awareness and 28% sales growth.',
    image: 'https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    link: '/case-studies#parag-milk-foods'
  },
  {
    id: 2,
    title: 'HolaChef',
    subtitle: 'Startup Scaling & Fundraising Success',
    description: 'Comprehensive media relations strategy that helped HolaChef secure Series B funding of $5M and establish itself as a leading food-tech innovator in a competitive market.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    link: '/case-studies#holachef'
  },
  {
    id: 3,
    title: 'Indiabulls Real Estate',
    subtitle: 'Reputation Management During Market Fluctuations',
    description: 'Strategic communication campaign that maintained investor confidence during market volatility, resulting in stable share price and positive media coverage.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    link: '/case-studies#indiabulls'
  }
];

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    const newIndex = Math.floor((x / width) * caseStudies.length);
    if (newIndex >= 0 && newIndex < caseStudies.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 bg-navy/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-4">
              <span className="font-medium">Case Studies</span>
            </div>
            
            <AnimatedText 
              tag="h2"
              text="Our Impact & Results"
              className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
            />
            
            <AnimatedText
              tag="p"
              text="Real stories of transformation and success through strategic PR"
              className="text-gray-dark max-w-xl"
              delay={200}
            />
          </div>
          
          <Link
            to="/case-studies"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors"
          >
            View all case studies
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div 
          ref={containerRef}
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg"
          onMouseMove={handleMouseMove}
        >
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: index === activeIndex ? 1 : 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent z-10"></div>
              
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-2/3">
                <div className="text-white/80 mb-2">{study.subtitle}</div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-white/80 mb-6">{study.description}</p>
                
                <Link 
                  to={study.link}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-6 right-6 z-20 flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
