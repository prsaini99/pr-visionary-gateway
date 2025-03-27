
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const clients = [
  { name: "L&T Realty", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Indiabulls Real Estate", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "NIRMAL", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Hiranandani", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "DAAWAT", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Mobikwik", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "RELIANCE Big Entertainment", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "HURUN REPORT INDIA", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "AIS", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "INDOSTAR", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "CERA", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Reserve Bank of India", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "ISRAEL DIPLOMATIC NETWORK", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "EAST INDIA COMPANY", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "PARAMOUNT AIRWAYS", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "DHL", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Holland", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "SHARP", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "JSW", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "Gowardhan", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "GO", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "PRIDE OF COWS", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
  { name: "PARAG", logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=250&h=100&fit=crop&auto=format" },
];

const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  // Show a subset of clients on the home page
  const featuredClients = clients.slice(0, 8);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <AnimatedText
            tag="h2"
            text="Trusted by Industry Leaders"
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
          />
          <AnimatedText
            tag="p"
            text="Over the years, we've helped shape the narratives of leading brands across diverse industries"
            className="text-gray-dark max-w-2xl mx-auto"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {featuredClients.map((client, index) => (
            <div
              key={client.name}
              className={cn(
                "flex items-center justify-center p-4 h-24 bg-gray-light/50 rounded-lg transition-all duration-500 hover:bg-white hover:shadow-md opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white/80 rounded border border-gray-medium/10 p-3">
                <span className="text-navy font-medium">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
