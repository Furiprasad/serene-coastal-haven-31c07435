
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, TrendingUp } from 'lucide-react';

const GoogleMap = () => {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5078040655417!2d83.7581077!3d18.140506799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0f0027cff3bb%3A0xeabdd61628bb3c6!2sSVN%20Bay%20Parck!5e0!3m2!1sen!2sin!4v1743577578450!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="SVN Bay Parck Location"
      ></iframe>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover SVN Bay Parck</h1>
          <p className="text-xl max-w-3xl">
            A premium 40-acre beachfront community offering the perfect balance of luxury living and natural beauty
            on the shores of the Bay of Bengal.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-blue mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck was conceived with a vision to create a premium beachfront living experience that 
                harmonizes luxury amenities with the natural beauty of the Bay of Bengal shoreline.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Located at the strategic Koshta Junction in Srikakulam, Andhra Pradesh, our development offers 
                unmatched investment potential with its proximity to the upcoming Bhogapuram Airport and 
                major urban centers.
              </p>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg border-l-4 border-bay-blue mb-6">
                <div className="flex-shrink-0 mr-4 text-bay-blue">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-bold text-bay-blue">RERA & SUDA Approved</p>
                  <p className="text-sm text-gray-600">AP RERA NO: P01070381701</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/public/lovable-uploads/c6df5e53-21e6-49ca-b611-08734bc20a3c.png" 
                alt="Bay of Bengal Beachfront" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-bay-blue mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 17H2C2 17 2 19.5 2 20.5C2 21.5 3 22 3 22H21C21 22 22 21.5 22 20.5C22 19.5 22 17 22 17Z" fill="currentColor" opacity="0.4"/>
                  <path d="M15.5 2H8.5C5.78 2 5 2.5 5 6V17H19V6C19 2.5 18.22 2 15.5 2ZM14.5 14H9.5C9.09 14 8.75 13.66 8.75 13.25C8.75 12.84 9.09 12.5 9.5 12.5H14.5C14.91 12.5 15.25 12.84 15.25 13.25C15.25 13.66 14.91 14 14.5 14ZM14.5 10H9.5C9.09 10 8.75 9.66 8.75 9.25C8.75 8.84 9.09 8.5 9.5 8.5H14.5C14.91 8.5 15.25 8.84 15.25 9.25C15.25 9.66 14.91 10 14.5 10Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">25 Acres of Beachfront Plots</h3>
              <p className="text-gray-700">
                Premium pre-demarcated plots ranging from 200 to 267 sq yds with direct beach access and stunning views of the Bay of Bengal.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-bay-teal mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z" fill="currentColor"/>
                  <path d="M18 17.75H6C5.59 17.75 5.25 17.41 5.25 17C5.25 16.59 5.59 16.25 6 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z" fill="currentColor"/>
                  <path d="M21.0701 22H2.93006C2.50006 22 2.11006 21.75 1.93006 21.35C1.76006 20.96 1.83006 20.5 2.13006 20.19L5.00006 17.25H19.0001L21.8701 20.19C22.1701 20.5 22.2401 20.96 22.0701 21.35C21.8901 21.75 21.5001 22 21.0701 22Z" fill="currentColor"/>
                  <path d="M18.9999 17.25H4.99994V4.2C4.99994 3.43 5.42994 2.73 6.11994 2.35L10.7999 0.15C11.5299 -0.25 12.4399 -0.25 13.1699 0.15L17.8499 2.35C18.5399 2.73 18.9699 3.43 18.9699 4.2V17.25H18.9999Z" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">15 Acres Luxury Resort</h3>
              <p className="text-gray-700">
                A dedicated luxury resort featuring premium cottages, swimming pool, banquet hall, restaurant, and recreational areas for residents and guests.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-resort-green mb-4">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">High ROI Potential</h3>
              <p className="text-gray-700">
                Strategic location near the upcoming Bhogapuram Airport and major highways, ensuring excellent appreciation potential and return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Our Location</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            SVN Bay Parck is located at Koshta Junction, Srikakulam, with easy access to major landmarks and transportation hubs.
          </p>
          
          <GoogleMap />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Chennai-Kolkata Highway", distance: "10 km" },
              { name: "Bhogapuram Airport", distance: "35 km" },
              { name: "Vizianagaram City", distance: "40 km" },
              { name: "Srikakulam City", distance: "25 km" }
            ].map((location, index) => (
              <div key={index} className="flex items-start">
                <MapPin className="w-5 h-5 text-bay-teal mr-3 mt-1" />
                <div>
                  <span className="font-medium text-bay-blue">{location.name}</span>
                  <span className="text-gray-600 ml-2">({location.distance})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Bay Parck?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a site visit today and see for yourself why SVN Bay Parck is the premier beachfront destination in Andhra Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/plots-and-villas" className="bg-white text-bay-blue hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              View Plots & Villas
            </Link>
            <Link to="/contact" className="bg-bay-blue hover:bg-bay-blue-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
