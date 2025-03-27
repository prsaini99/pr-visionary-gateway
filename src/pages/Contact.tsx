
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally would send data to server
    console.log({ name, email, phone, company, message });
    
    // Show success state
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
              <span className="font-medium">Get In Touch</span>
            </div>
            
            <AnimatedText 
              tag="h1"
              text="Contact Prais Consultation"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
            />
            
            <AnimatedText
              tag="p"
              text="Let's discuss how we can help elevate your brand's narrative and achieve your communication objectives"
              className="text-gray-dark text-lg max-w-2xl mx-auto"
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-navy" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Phone</h3>
              <a href="tel:+919769551228" className="text-gray-dark hover:text-navy transition-colors">
                Subhash Pais – +91 9769551228
              </a>
            </div>
            
            <div className="glass-card p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-navy" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Email</h3>
              <a href="mailto:info@praisconsultation.com" className="text-gray-dark hover:text-navy transition-colors">
                info@praisconsultation.com
              </a>
            </div>
            
            <div className="glass-card p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-navy" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Address</h3>
              <address className="text-gray-dark not-italic">
                Mumbai, Maharashtra, India
              </address>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Send us a message</h2>
              <p className="text-gray-dark">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-medium text-navy mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-dark mb-8 max-w-md">
                  Thank you for reaching out to us. A member of our team will contact you shortly to discuss your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Send Another Message
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                      placeholder="ABC Corporation"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-light text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-navy/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Our Coverage</h2>
            <p className="text-gray-dark max-w-2xl mx-auto">
              With a strong presence across 250+ cities nationwide, we provide localized expertise with global standards
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.74109995787518!3d19.08219783953158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655268128019!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'].map((city) => (
                  <div key={city} className="bg-navy/5 px-3 py-2 rounded text-sm text-navy text-center">
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-dark">And 240+ more cities across India</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText 
            tag="h2"
            text="Start Your PR Journey With Us"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
          />
          
          <AnimatedText
            tag="p"
            text="Let's create impactful narratives that elevate your brand and drive business growth"
            className="text-white/80 max-w-2xl mx-auto mb-8"
            delay={200}
          />
          
          <a 
            href="tel:+919769551228" 
            className="inline-flex items-center gap-2 bg-white text-navy hover:bg-gold hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Call Us Now
            <Phone size={16} />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
