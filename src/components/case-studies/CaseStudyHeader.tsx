
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

const CaseStudyHeader = ({ caseStudy }: CaseStudyHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-4">
        <span className="font-medium">{caseStudy.subtitle}</span>
      </div>
      
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
        {caseStudy.title}
      </h2>
      
      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudyHeader;
