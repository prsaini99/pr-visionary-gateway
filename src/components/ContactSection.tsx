
import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally would send data to server
    console.log({ name, email, phone, message });
    
    // Show success state
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div 
        className="absolute left-1/4 bottom-1/4 w-96 h-96 rounded-full opacity-10 bg-gold blur-[80px]"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 border border-navy/10 rounded-full text-sm text-navy bg-white/70 backdrop-blur-sm mb-4">
            <span className="font-medium">Get In Touch</span>
          </div>
          
          <AnimatedText 
            tag="h2"
            text="Contact Prais Consultation"
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
          />
          
          <AnimatedText
            tag="p"
            text="Let's discuss how we can help elevate your brand's narrative"
            className="text-gray-dark max-w-2xl mx-auto"
            delay={200}
          />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Send us a message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-medium text-navy mb-2">Message Sent!</h4>
                  <p className="text-gray-dark">Thank you for reaching out. We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                      Full Name
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                        Email Address
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
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
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
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-navy/20"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-light text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold mt-1" size={20} />
                    <div>
                      <div className="font-medium text-navy">Phone</div>
                      <a href="tel:+919769551228" className="text-gray-dark hover:text-navy transition-colors">
                        Subhash Pais – +91 9769551228
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <div className="font-medium text-navy">Email</div>
                      <a href="mailto:info@praisconsultation.com" className="text-gray-dark hover:text-navy transition-colors">
                        info@praisconsultation.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" size={20} />
                    <div>
                      <div className="font-medium text-navy">Address</div>
                      <address className="text-gray-dark not-italic">
                        Mumbai, Maharashtra, India
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">Our Coverage</h3>
                <p className="text-gray-dark mb-4">
                  With a strong presence across 250+ cities nationwide, we provide localized expertise with global standards.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'].map((city) => (
                    <div key={city} className="bg-navy/5 px-3 py-2 rounded text-sm text-navy text-center">
                      {city}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-gray-dark">And 240+ more cities...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
