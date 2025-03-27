
import AnimatedText from '@/components/AnimatedText';

const CaseStudyHero = () => {
  return (
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
            <span className="font-medium">Case Studies</span>
          </div>
          
          <AnimatedText 
            tag="h1"
            text="Our Impact & Results"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
          />
          
          <AnimatedText
            tag="p"
            text="Real stories of transformation through strategic PR and communication excellence"
            className="text-gray-dark text-lg max-w-2xl mx-auto"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
