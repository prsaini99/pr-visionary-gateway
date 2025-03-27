
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudiesData';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
import CaseStudyNavigation from '@/components/case-studies/CaseStudyNavigation';
import CaseStudyHeader from '@/components/case-studies/CaseStudyHeader';
import CaseStudyDetails from '@/components/case-studies/CaseStudyDetails';
import CaseStudyResults from '@/components/case-studies/CaseStudyResults';
import CaseStudyTestimonial from '@/components/case-studies/CaseStudyTestimonial';

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
      
      <CaseStudyHero />
      
      <CaseStudyNavigation 
        caseStudies={caseStudies} 
        selectedCase={selectedCase} 
        onSelectCase={setSelectedCase} 
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <CaseStudyHeader caseStudy={selectedCase} />
            <CaseStudyDetails caseStudy={selectedCase} />
            <CaseStudyResults caseStudy={selectedCase} />
            <CaseStudyTestimonial caseStudy={selectedCase} />
            
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
