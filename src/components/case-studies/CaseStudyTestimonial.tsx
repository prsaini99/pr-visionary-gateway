
import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyTestimonialProps {
  caseStudy: CaseStudy;
}

const CaseStudyTestimonial = ({ caseStudy }: CaseStudyTestimonialProps) => {
  return (
    <div className="glass-card p-8 bg-navy/5 mb-12">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="md:w-1/4 flex justify-center">
          <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center text-navy text-xl font-bold">
            {caseStudy.testimonial.author.split(' ').map(name => name[0]).join('')}
          </div>
        </div>
        <div className="md:w-3/4">
          <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-dark italic mb-4">{caseStudy.testimonial.text}</p>
          <div className="font-medium text-navy">{caseStudy.testimonial.author}</div>
          <div className="text-sm text-gray-dark">{caseStudy.testimonial.position}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTestimonial;
