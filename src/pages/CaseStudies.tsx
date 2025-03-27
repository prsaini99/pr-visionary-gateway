
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowRight, Trophy, TrendingUp, Target, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 'parag-milk-foods',
    title: 'Parag Milk Foods',
    subtitle: 'GO Cheese Positioning Against Market Leader',
    challenge: 'Establish GO Cheese as a premium alternative to the dominant market leader in a highly competitive category, overcoming limited brand awareness and entrenched consumer preferences.',
    approach: 'Developed a comprehensive PR strategy focusing on product differentiation, quality ingredients, and innovative flavors. Executed a multi-channel media campaign highlighting GO Cheese's farm-to-fork process and superior taste profile.',
    results: [
      '45% increase in brand awareness within 6 months',
      '28% sales growth year-over-year following the campaign',
      'Secured features in 15+ top-tier food publications',
      'Successfully positioned as a premium alternative in consumer perception surveys'
    ],
    image: 'https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      text: "Prais Consultation's strategic approach transformed our market positioning. Their understanding of consumer psychology and media relationships helped us establish GO Cheese as a credible competitor to the category leader.",
      author: "Sanjiv Mehta",
      position: "CMO, Parag Milk Foods"
    }
  },
  {
    id: 'holachef',
    title: 'HolaChef',
    subtitle: 'Startup Scaling & Fundraising Success',
    challenge: 'Establish brand credibility and media presence for a food-tech startup in a crowded market to support Series B fundraising efforts and customer acquisition goals.',
    approach: 'Created a strategic media relations plan highlighting the founder's vision, unique business model, and culinary expertise. Developed a thought leadership program positioning HolaChef at the forefront of food-tech innovation.',
    results: [
      'Secured $5M Series B funding with positive investor sentiment',
      'Generated 75+ media features across business and lifestyle publications',
      'Increased monthly active users by 68% during the campaign period',
      'Established the founder as a recognized industry thought leader'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      text: "The team at Prais Consultation played a crucial role in our fundraising success. Their strategic media placements and messaging helped us stand out in a competitive market and attracted investor interest that was essential for our growth.",
      author: "Anuj Srivastava",
      position: "Founder & CEO, HolaChef"
    }
  },
  {
    id: 'indiabulls',
    title: 'Indiabulls Real Estate',
    subtitle: 'Reputation Management During Market Fluctuations',
    challenge: 'Maintain investor confidence and positive brand perception during a period of significant real estate market volatility and regulatory changes that impacted the entire sector.',
    approach: 'Implemented a proactive reputation management strategy focusing on transparent communication, financial stability messaging, and highlighting the company's long-term vision. Developed a crisis preparedness plan to address potential negative scenarios.',
    results: [
      'Maintained stable share price despite sector-wide volatility',
      'Secured positive coverage in 80% of media mentions during the period',
      'Successfully managed communication around regulatory changes',
      'Strengthened relationships with financial analysts and media'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      text: "In challenging market conditions, Prais Consultation's strategic counsel was invaluable. Their proactive approach to reputation management and investor communications helped us navigate uncertainty with confidence.",
      author: "Anjali Rattan",
      position: "CEO, Indiabulls Real Estate"
    }
  },
  {
    id: 'l-and-t-realty',
    title: 'L&T Realty',
    subtitle: 'Luxury Project Launch Campaign',
    challenge: 'Launch a high-end luxury residential project during an economic slowdown, targeting ultra-high-net-worth individuals with a compelling narrative that would drive sales despite market conditions.',
    approach: 'Crafted an exclusive PR campaign emphasizing the project's unique architectural elements, premium amenities, and investment value. Created targeted media engagements with luxury lifestyle and business publications, complemented by invitation-only preview events.',
    results: [
      '85% of units sold within the first three months of launch',
      'Coverage in 25+ premium publications reaching the target demographic',
      'Successfully positioned the project as "recession-proof" investment',
      'Generated 120+ high-quality leads through media coverage'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      text: "The strategic PR approach developed by Prais Consultation was instrumental in achieving our sales targets despite challenging market conditions. Their understanding of luxury positioning and ability to reach our exact target audience was exceptional.",
      author: "Rajesh Kumar",
      position: "Marketing Director, L&T Realty"
    }
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for hash in URL to show specific case study
    if (window.location.hash) {
      const caseId = window.location.hash.substring(1);
      const matchingCase = caseStudies.find(cs => cs.id === caseId);
      if (matchingCase) {
        setSelectedCase(matchingCase);
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
      
      {/* Case Study Navigation */}
      <section className="py-12 bg-white border-b border-gray-medium/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((caseStudy) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(caseStudy)}
                className={`glass-card p-6 text-left transition-all duration-300 hover:shadow-md ${
                  selectedCase.id === caseStudy.id 
                    ? 'ring-2 ring-navy shadow-md' 
                    : ''
                }`}
              >
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">{caseStudy.title}</h3>
                <p className="text-gray-dark text-sm mb-4">{caseStudy.subtitle}</p>
                <div className={`text-sm font-medium transition-colors ${
                  selectedCase.id === caseStudy.id 
                    ? 'text-gold' 
                    : 'text-navy'
                }`}>
                  View Case Study
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-4">
                <span className="font-medium">{selectedCase.subtitle}</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                {selectedCase.title}
              </h2>
              
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
                <img 
                  src={selectedCase.image} 
                  alt={selectedCase.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-gold mr-2" size={20} />
                  <h3 className="font-medium text-navy">The Challenge</h3>
                </div>
                <p className="text-gray-dark">{selectedCase.challenge}</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-gold mr-2" size={20} />
                  <h3 className="font-medium text-navy">Our Approach</h3>
                </div>
                <p className="text-gray-dark">{selectedCase.approach}</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="text-gold mr-2" size={20} />
                  <h3 className="font-medium text-navy">Key Outcomes</h3>
                </div>
                <ul className="text-gray-dark space-y-2">
                  {selectedCase.results.slice(0, 2).map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <TrendingUp className="text-gold mt-1 shrink-0" size={14} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Results & Impact</h3>
              
              <div className="space-y-4 text-gray-dark mb-8">
                <p>Our strategic PR campaign for {selectedCase.title} delivered measurable results that exceeded client expectations and achieved key business objectives.</p>
                
                <ul className="space-y-3 pl-6 mt-4">
                  {selectedCase.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <TrendingUp className="text-gold mt-1 shrink-0" size={16} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card p-8 bg-navy/5">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center text-navy text-xl font-bold">
                      {selectedCase.testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-dark italic mb-4">{selectedCase.testimonial.text}</p>
                    <div className="font-medium text-navy">{selectedCase.testimonial.author}</div>
                    <div className="text-sm text-gray-dark">{selectedCase.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center py-8">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
