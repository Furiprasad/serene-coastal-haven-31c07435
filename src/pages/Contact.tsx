
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'plots' // Default interest
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. Our team will get back to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'plots'
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our team to learn more about SVN Bay Parck or to schedule a site visit.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-bay-blue mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-bay-blue rounded-full p-3 text-white mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-bay-blue">Phone / WhatsApp</h3>
                    <p className="text-lg text-gray-700 mb-1">+91 85999 24242</p>
                    <p className="text-lg text-gray-700">+91 85999 36363</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bay-teal rounded-full p-3 text-white mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-bay-blue">Email</h3>
                    <p className="text-lg text-gray-700">info@svnsjd.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-resort-green rounded-full p-3 text-white mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-bay-blue">Location</h3>
                    <p className="text-lg text-gray-700">
                      SVN Bay Parck<br />
                      Koshta Junction, Srikakulam<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-bay-blue">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-bay-blue text-white p-3 rounded-full hover:bg-bay-blue-light transition-colors">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bay-blue text-white p-3 rounded-full hover:bg-bay-blue-light transition-colors">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153A4.904 4.904 0 0 1 2.525 18.55c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bay-blue text-white p-3 rounded-full hover:bg-bay-blue-light transition-colors">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/918599924242" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6 6.31999C16.8 5.49999 15.8 4.83999 14.7 4.35999C13.6 3.87999 12.3 3.63999 11.1 3.63999C9.70001 3.63999 8.40001 3.91999 7.10001 4.45999C5.90001 4.99999 4.80001 5.75999 3.90001 6.67999C3.00001 7.59999 2.20001 8.69999 1.70001 9.89999C1.10001 11.2 0.900012 12.5 0.900012 13.9C0.900012 15.7 1.30001 17.5 2.10001 19L0.800012 23.6L5.60001 22.3C7.10001 23 8.80001 23.4 10.5 23.4H10.6C12 23.4 13.3 23.1 14.6 22.6C15.8 22 16.9 21.3 17.8 20.3C18.7 19.4 19.4 18.3 19.9 17.1C20.4 15.8 20.7 14.5 20.7 13.1C20.7 11.9 20.5 10.7 20 9.59999C19.6 8.39999 18.8 7.31999 17.6 6.31999ZM11.1 21.4C9.60001 21.4 8.10001 21 6.80001 20.2L6.50001 20L3.80001 20.8L4.60001 18.2L4.30001 17.9C3.50001 16.6 3.00001 15 3.00001 13.4C3.00001 12.3 3.20001 11.3 3.60001 10.3C4.00001 9.29999 4.60001 8.49999 5.30001 7.79999C6.00001 7.09999 6.80001 6.49999 7.80001 6.09999C8.80001 5.69999 9.90001 5.49999 11 5.49999C12 5.49999 13 5.69999 13.9 6.09999C14.8 6.49999 15.5 6.99999 16.2 7.69999C16.9 8.39999 17.4 9.09999 17.7 9.99999C18 10.9 18.2 11.8 18.2 12.8C18.2 13.9 18 14.9 17.6 15.9C17.2 16.9 16.6 17.7 15.9 18.4C15.2 19.1 14.3 19.7 13.4 20.1C12.3 21 11.2 21.4 10 21.4H11.1ZM15.7 11.3C15.4 11.1 14.2 10.5 14 10.4C13.8 10.3 13.6 10.3 13.4 10.6C13.2 10.9 12.8 11.4 12.6 11.7C12.5 11.9 12.3 11.9 12 11.7C10.6 11 9.70001 10.3 8.80001 8.79999C8.50001 8.29999 9.00001 8.39999 9.40001 7.59999C9.50001 7.39999 9.40001 7.19999 9.40001 6.99999C9.40001 6.79999 8.80001 5.59999 8.60001 5.09999C8.40001 4.49999 8.10001 4.49999 7.90001 4.49999C7.70001 4.49999 7.50001 4.49999 7.30001 4.49999C7.10001 4.49999 6.80001 4.59999 6.60001 4.79999C6.40001 4.99999 5.70001 5.59999 5.70001 6.79999C5.70001 7.99999 6.60001 9.19999 6.70001 9.39999C6.80001 9.59999 8.60001 12.4 11.2 13.5C13 14.2 13.8 14.3 14.8 14.1C15.4 14 16.3 13.5 16.6 12.9C16.8 12.3 16.8 11.8 16.7 11.7C16.7 11.5 16.5 11.5 15.7 11.3Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-bay-blue mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bay-blue"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bay-blue"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bay-blue"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bay-blue"
                    >
                      <option value="plots">Beachfront Plots</option>
                      <option value="villas">Luxury Villas</option>
                      <option value="resort">Resort Stay</option>
                      <option value="site-visit">Scheduling a Site Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bay-blue"
                      placeholder="Tell us more about your requirements"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-bay-blue hover:bg-bay-blue-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Visit Our Property</h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                We invite you to schedule a site visit to experience the beauty and potential of SVN Bay Parck in person.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-bay-blue bg-opacity-10 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center bg-bay-blue text-white rounded-full w-16 h-16 mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-bay-blue">Schedule a Visit</h3>
                  <p className="text-gray-600">
                    Contact us to arrange a convenient time for your site visit.
                  </p>
                </div>
                
                <div className="bg-bay-teal bg-opacity-10 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center bg-bay-teal text-white rounded-full w-16 h-16 mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-bay-blue">Explore the Property</h3>
                  <p className="text-gray-600">
                    Our representatives will guide you through the entire property.
                  </p>
                </div>
                
                <div className="bg-resort-green bg-opacity-10 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center bg-resort-green text-white rounded-full w-16 h-16 mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-bay-blue">Personalized Consultation</h3>
                  <p className="text-gray-600">
                    Discuss your requirements with our experts and get detailed information.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="tel:+918599924242" 
                  className="btn-primary"
                >
                  Call to Schedule: +91 85999 24242
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-bay-blue">What documents are required to purchase a plot?</h3>
              <p className="text-gray-700">
                For plot purchase, you'll need identity proof (Aadhar/PAN), address proof, passport-sized photographs, and bank statements to demonstrate financial capability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-bay-blue">Are the plots RERA approved?</h3>
              <p className="text-gray-700">
                Yes, all plots at SVN Bay Parck are RERA approved (AP RERA NO: P01070381701) and SUDA approved, ensuring legal compliance and clear titles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-bay-blue">What amenities are available for plot owners?</h3>
              <p className="text-gray-700">
                Plot owners get complimentary resort membership with access to all amenities including swimming pool, gym, sports courts, and preferential rates at resort facilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-bay-blue">Is financing available for plot purchase?</h3>
              <p className="text-gray-700">
                Yes, we have tie-ups with several banks and financial institutions that offer loans for plot purchases. Our team can assist you with the application process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
