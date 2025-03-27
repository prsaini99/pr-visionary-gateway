
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = heroRef.current?.getBoundingClientRect();
      
      if (!rect) return;
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xOffset = ((x / rect.width) - 0.5) * 20;
      const yOffset = ((y / rect.height) - 0.5) * 20;
      
      heroRef.current.style.setProperty('--x-offset', `${xOffset}px`);
      heroRef.current.style.setProperty('--y-offset', `${yOffset}px`);
    };
    
    heroRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(10, 35, 66, 0.03) 0%, rgba(10, 35, 66, 0.01) 100%)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 rounded-full opacity-20 bg-gold blur-[100px]"
        style={{
          transform: 'translate(calc(-50% + var(--x-offset, 0px)), calc(-50% + var(--y-offset, 0px)))',
        }}
      ></div>
      
      <div 
        className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full opacity-10 bg-navy blur-[80px]"
        style={{
          transform: 'translate(calc(-30% + var(--x-offset, 0px)), calc(-30% + var(--y-offset, 0px)))',
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="mb-2 inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/50 backdrop-blur-sm animate-fade-in">
          <span className="font-medium">PR Excellence Since 2000</span>
        </div>
        
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-navy opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fusing Imagination <span className="text-gold">&</span> Knowledge
        </h1>
        
        <AnimatedText 
          tag="p"
          text="Trusted PR Expertise with Proven Results for Over 2 Decades"
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-dark"
          delay={400}
        />
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/case-studies" 
            className="group bg-navy hover:bg-navy-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            Explore Our Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/contact" 
            className="bg-white hover:bg-gray-light text-navy border border-navy/20 font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-navy opacity-70"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
