
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const clients = [
  { name: "L&T Realty", category: "Real Estate" },
  { name: "Indiabulls Real Estate", category: "Real Estate" },
  { name: "NIRMAL", category: "Real Estate" },
  { name: "Hiranandani", category: "Real Estate" },
  { name: "DAAWAT", category: "Food & Beverage" },
  { name: "Mobikwik", category: "Technology" },
  { name: "RELIANCE Big Entertainment", category: "Entertainment" },
  { name: "HURUN REPORT INDIA", category: "Business" },
  { name: "AIS (Asahi India Glass Ltd.)", category: "Manufacturing" },
  { name: "INDOSTAR", category: "Finance" },
  { name: "CERA", category: "Manufacturing" },
  { name: "Reserve Bank of India", category: "Government" },
  { name: "ISRAEL DIPLOMATIC NETWORK", category: "Government" },
  { name: "EAST INDIA COMPANY", category: "Retail" },
  { name: "PARAMOUNT AIRWAYS", category: "Travel" },
  { name: "DHL", category: "Logistics" },
  { name: "Holland", category: "Government" },
  { name: "SHARP", category: "Technology" },
  { name: "JSW", category: "Manufacturing" },
  { name: "Gowardhan", category: "Food & Beverage" },
  { name: "GO", category: "Food & Beverage" },
  { name: "PRIDE OF COWS", category: "Food & Beverage" },
  { name: "PARAG", category: "Food & Beverage" },
];

// Get unique categories
const categories = ["All", ...Array.from(new Set(clients.map(client => client.category)))];

const Clients = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredClients, setFilteredClients] = useState(clients);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedCategory === "All") {
      setFilteredClients(clients);
    } else {
      setFilteredClients(clients.filter(client => client.category === selectedCategory));
    }
  }, [selectedCategory]);

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
              <span className="font-medium">Our Clients</span>
            </div>
            
            <AnimatedText 
              tag="h1"
              text="Trusted by Industry Leaders"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            />
            
            <AnimatedText
              tag="p"
              text="Over two decades, we've helped shape the narratives of leading brands across diverse industries"
              className="text-gray-dark text-lg max-w-2xl mx-auto"
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-navy/5 text-navy hover:bg-navy/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredClients.map((client, index) => (
              <div
                key={client.name}
                className="glass-card p-6 text-center hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="h-20 flex items-center justify-center mb-4 bg-white/80 rounded border border-gray-medium/10 p-3">
                  <span className="text-navy font-medium">{client.name}</span>
                </div>
                <div className="text-xs text-gray-dark">{client.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              tag="h2"
              text="Client Testimonials"
              className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
            />
            
            <AnimatedText
              tag="p"
              text="What our clients say about their experience working with us"
              className="text-gray-dark max-w-2xl mx-auto"
              delay={200}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-dark italic mb-6">
                "The Prais Consultation team delivered exceptional results for our product launch campaign. Their strategic approach and media connections helped us secure coverage in top-tier publications, exceeding our expectations."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold">
                    DH
                  </div>
                </div>
                <div>
                  <div className="font-medium text-navy">David Hughes</div>
                  <div className="text-sm text-gray-dark">Marketing Director, DHL</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-dark italic mb-6">
                "During a potential PR crisis, the team at Prais Consultation provided swift, strategic guidance that helped us navigate the situation effectively. Their proactive approach and crisis management expertise were invaluable."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold">
                    AR
                  </div>
                </div>
                <div>
                  <div className="font-medium text-navy">Anjali Rattan</div>
                  <div className="text-sm text-gray-dark">CEO, Indiabulls Real Estate</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-dark italic mb-6">
                "We've worked with Prais Consultation for over five years, and they consistently deliver exceptional results. Their understanding of our brand and industry has made them an invaluable extension of our marketing team."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold">
                    SM
                  </div>
                </div>
                <div>
                  <div className="font-medium text-navy">Sanjiv Mehta</div>
                  <div className="text-sm text-gray-dark">CMO, Parag Milk Foods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              tag="h2"
              text="Industries We Serve"
              className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
            />
            
            <AnimatedText
              tag="p"
              text="Expertise across diverse sectors with tailored PR strategies for each industry's unique challenges"
              className="text-gray-dark max-w-2xl mx-auto"
              delay={200}
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Real Estate & Construction",
              "Technology & IT",
              "Food & Beverage",
              "Finance & Banking",
              "Government & Public Sector",
              "Retail & Consumer Goods",
              "Travel & Hospitality",
              "Manufacturing",
              "Healthcare & Pharma",
              "Education",
              "Entertainment & Media",
              "Logistics & Transportation"
            ].map((industry, index) => (
              <div 
                key={industry}
                className="glass-card p-6 text-center hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="font-medium text-navy">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText 
            tag="h2"
            text="Join Our Prestigious Client Portfolio"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
          />
          
          <AnimatedText
            tag="p"
            text="Let's discuss how our PR expertise can elevate your brand's narrative and achieve your communication objectives"
            className="text-white/80 max-w-2xl mx-auto mb-8"
            delay={200}
          />
          
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-navy hover:bg-gold hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Clients;
