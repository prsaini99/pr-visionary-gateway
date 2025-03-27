
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  results: string[];
  image: string;
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'parag-milk-foods',
    title: 'Parag Milk Foods',
    subtitle: 'GO Cheese Positioning Against Market Leader',
    challenge: "Establish GO Cheese as a premium alternative to the dominant market leader in a highly competitive category, overcoming limited brand awareness and entrenched consumer preferences.",
    approach: "Developed a comprehensive PR strategy focusing on product differentiation, quality ingredients, and innovative flavors. Executed a multi-channel media campaign highlighting GO Cheese's farm-to-fork process and superior taste profile.",
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
    challenge: "Establish brand credibility and media presence for a food-tech startup in a crowded market to support Series B fundraising efforts and customer acquisition goals.",
    approach: "Created a strategic media relations plan highlighting the founder's vision, unique business model, and culinary expertise. Developed a thought leadership program positioning HolaChef at the forefront of food-tech innovation.",
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
    challenge: "Maintain investor confidence and positive brand perception during a period of significant real estate market volatility and regulatory changes that impacted the entire sector.",
    approach: "Implemented a proactive reputation management strategy focusing on transparent communication, financial stability messaging, and highlighting the company's long-term vision. Developed a crisis preparedness plan to address potential negative scenarios.",
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
    challenge: "Launch a high-end luxury residential project during an economic slowdown, targeting ultra-high-net-worth individuals with a compelling narrative that would drive sales despite market conditions.",
    approach: "Crafted an exclusive PR campaign emphasizing the project's unique architectural elements, premium amenities, and investment value. Created targeted media engagements with luxury lifestyle and business publications, complemented by invitation-only preview events.",
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
