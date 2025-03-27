
import { TrendingUp } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyResultsProps {
  caseStudy: CaseStudy;
}

const CaseStudyResults = ({ caseStudy }: CaseStudyResultsProps) => {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Results & Impact</h3>
      
      <div className="space-y-4 text-gray-dark mb-8">
        <p>Our strategic PR campaign for {caseStudy.title} delivered measurable results that exceeded client expectations and achieved key business objectives.</p>
        
        <ul className="space-y-3 pl-6 mt-4">
          {caseStudy.results.map((result, index) => (
            <li key={index} className="flex items-start gap-2">
              <TrendingUp className="text-gold mt-1 shrink-0" size={16} />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyResults;
