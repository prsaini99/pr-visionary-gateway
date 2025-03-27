
import { Target, Users, Trophy, TrendingUp } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="glass-card p-6">
        <div className="flex items-center mb-4">
          <Target className="text-gold mr-2" size={20} />
          <h3 className="font-medium text-navy">The Challenge</h3>
        </div>
        <p className="text-gray-dark">{caseStudy.challenge}</p>
      </div>
      
      <div className="glass-card p-6">
        <div className="flex items-center mb-4">
          <Users className="text-gold mr-2" size={20} />
          <h3 className="font-medium text-navy">Our Approach</h3>
        </div>
        <p className="text-gray-dark">{caseStudy.approach}</p>
      </div>
      
      <div className="glass-card p-6">
        <div className="flex items-center mb-4">
          <Trophy className="text-gold mr-2" size={20} />
          <h3 className="font-medium text-navy">Key Outcomes</h3>
        </div>
        <ul className="text-gray-dark space-y-2">
          {caseStudy.results.slice(0, 2).map((result, index) => (
            <li key={index} className="flex items-start gap-2">
              <TrendingUp className="text-gold mt-1 shrink-0" size={14} />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
