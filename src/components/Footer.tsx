
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-2xl font-serif font-bold">
                <span className="text-white">Prais</span>
                <span className="text-gold">Consultation</span>
              </h1>
            </Link>
            
            <p className="text-white/70 mb-6 max-w-md">
              Leading PR consultancy providing high-impact strategic communications, media relations, and crisis management for prominent brands across industries.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/clients" className="text-white/70 hover:text-gold transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-gold transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-gold">Phone:</span>
                <a href="tel:+919769551228" className="text-white/70 hover:text-white transition-colors">
                  +91 9769551228
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">Email:</span>
                <a href="mailto:info@praisconsultation.com" className="text-white/70 hover:text-white transition-colors">
                  info@praisconsultation.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">Address:</span>
                <span className="text-white/70">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © 2025 Prais Consultation. All Rights Reserved.
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-4 text-sm text-white/70">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
