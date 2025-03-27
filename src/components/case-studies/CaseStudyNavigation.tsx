
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyNavigationProps {
  caseStudies: CaseStudy[];
  selectedCase: CaseStudy;
  onSelectCase: (caseStudy: CaseStudy) => void;
}

const CaseStudyNavigation = ({ 
  caseStudies, 
  selectedCase, 
  onSelectCase 
}: CaseStudyNavigationProps) => {
  return (
    <section className="py-12 bg-white border-b border-gray-medium/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((caseStudy) => (
            <button
              key={caseStudy.id}
              onClick={() => onSelectCase(caseStudy)}
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
  );
};

export default CaseStudyNavigation;
