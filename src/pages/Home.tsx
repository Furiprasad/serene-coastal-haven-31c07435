
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PalmtreeIcon, 
  Hotel, 
  Home as HomeIcon, 
  Waves, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/lovable-uploads/91ffd1c8-0809-4f82-b79b-f64de90c40b0.png"
            alt="Bay of Bengal Beachfront" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bay-blue/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              SVN Bay Parck
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              A World Away on the Shores of the Bay of Bengal
            </p>
            <p className="text-lg mb-8 max-w-xl">
              Located at Koshta Junction, Srikakulam, Andhra Pradesh, SVN Bay Parck is a 40-acre gated beachfront community offering 206 premium plots, luxury resort cottages, and serviced villas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plots-and-villas" className="btn-primary">
                Book Your Plot Today
              </Link>
              <Link to="/resort" className="btn-secondary">
                Explore Resort
              </Link>
            </div>
            <p className="mt-4 text-white/80 font-medium">
              Free Resort Membership for Every Plot Owner!
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title mb-16">Experience Bay Parck</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-scale">
              <div className="inline-flex items-center justify-center bg-bay-blue text-white rounded-full w-16 h-16 mb-6">
                <HomeIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">Premium Beachfront Plots</h3>
              <p className="text-gray-600">
                206 pre-demarcated plots ranging from 200 to 267 sq yds with direct beach access.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-scale">
              <div className="inline-flex items-center justify-center bg-bay-teal text-white rounded-full w-16 h-16 mb-6">
                <Hotel className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">Luxury Resort</h3>
              <p className="text-gray-600">
                15 acres dedicated to premium resort cottages with world-class amenities and services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover-scale">
              <div className="inline-flex items-center justify-center bg-resort-green text-white rounded-full w-16 h-16 mb-6">
                <Waves className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-bay-blue">Spectacular Amenities</h3>
              <p className="text-gray-600">
                Swimming pool, gym, sports courts, jogging tracks, and many more world-class facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bay-blue mb-6">
                A Premium Beachfront Community
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck offers an unparalleled living experience with stunning views of the Bay of Bengal. Our 40-acre gated community combines the tranquility of beachfront living with the luxury of modern amenities.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "25 acres of premium beach-facing plots",
                  "15 acres dedicated to luxury resort cottages",
                  "RERA & SUDA approved (AP RERA NO: P01070381701)",
                  "Gated community with 24/7 security",
                  "Proximity to Bhogapuram Airport and future developments"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-bay-teal">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/public/lovable-uploads/a2eb2644-2fd9-407c-bc89-5ef37c027696.png" 
                alt="SVN Bay Parck Property Map" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Prime Location</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            SVN Bay Parck is strategically located at Koshta Junction, Srikakulam, with easy access to major landmarks and transportation hubs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Chennai-Kolkata Highway", 
                distance: "10 km",
                icon: <MapPin className="h-10 w-10" /> 
              },
              { 
                name: "Bhogapuram Airport", 
                distance: "35 km",
                icon: <MapPin className="h-10 w-10" /> 
              },
              { 
                name: "Vizianagaram City", 
                distance: "40 km",
                icon: <MapPin className="h-10 w-10" /> 
              },
              { 
                name: "Srikakulam City", 
                distance: "25 km",
                icon: <MapPin className="h-10 w-10" /> 
              }
            ].map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center text-bay-blue mb-4">
                  {location.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-bay-blue">{location.name}</h3>
                <p className="text-gray-600">{location.distance}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/location" className="btn-primary">
              View Location Details
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Own Your Slice of Paradise?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss the opportunity to invest in a premium beachfront property with excellent amenities and high ROI potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us Today
            </Link>
            <a 
              href="https://wa.me/918599924242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2">
                <path d="M17.6 6.31999C16.8 5.49999 15.8 4.83999 14.7 4.35999C13.6 3.87999 12.3 3.63999 11.1 3.63999C9.70001 3.63999 8.40001 3.91999 7.10001 4.45999C5.90001 4.99999 4.80001 5.75999 3.90001 6.67999C3.00001 7.59999 2.20001 8.69999 1.70001 9.89999C1.10001 11.2 0.900012 12.5 0.900012 13.9C0.900012 15.7 1.30001 17.5 2.10001 19L0.800012 23.6L5.60001 22.3C7.10001 23 8.80001 23.4 10.5 23.4H10.6C12 23.4 13.3 23.1 14.6 22.6C15.8 22 16.9 21.3 17.8 20.3C18.7 19.4 19.4 18.3 19.9 17.1C20.4 15.8 20.7 14.5 20.7 13.1C20.7 11.9 20.5 10.7 20 9.59999C19.6 8.39999 18.8 7.31999 17.6 6.31999ZM11.1 21.4C9.60001 21.4 8.10001 21 6.80001 20.2L6.50001 20L3.80001 20.8L4.60001 18.2L4.30001 17.9C3.50001 16.6 3.00001 15 3.00001 13.4C3.00001 12.3 3.20001 11.3 3.60001 10.3C4.00001 9.29999 4.60001 8.49999 5.30001 7.79999C6.00001 7.09999 6.80001 6.49999 7.80001 6.09999C8.80001 5.69999 9.90001 5.49999 11 5.49999C12 5.49999 13 5.69999 13.9 6.09999C14.8 6.49999 15.5 6.99999 16.2 7.69999C16.9 8.39999 17.4 9.09999 17.7 9.99999C18 10.9 18.2 11.8 18.2 12.8C18.2 13.9 18 14.9 17.6 15.9C17.2 16.9 16.6 17.7 15.9 18.4C15.2 19.1 14.3 19.7 13.4 20.1C12.3 21 11.2 21.4 10 21.4H11.1ZM15.7 11.3C15.4 11.1 14.2 10.5 14 10.4C13.8 10.3 13.6 10.3 13.4 10.6C13.2 10.9 12.8 11.4 12.6 11.7C12.5 11.9 12.3 11.9 12 11.7C10.6 11 9.70001 10.3 8.80001 8.79999C8.50001 8.29999 9.00001 8.39999 9.40001 7.59999C9.50001 7.39999 9.40001 7.19999 9.40001 6.99999C9.40001 6.79999 8.80001 5.59999 8.60001 5.09999C8.40001 4.49999 8.10001 4.49999 7.90001 4.49999C7.70001 4.49999 7.50001 4.49999 7.30001 4.49999C7.10001 4.49999 6.80001 4.59999 6.60001 4.79999C6.40001 4.99999 5.70001 5.59999 5.70001 6.79999C5.70001 7.99999 6.60001 9.19999 6.70001 9.39999C6.80001 9.59999 8.60001 12.4 11.2 13.5C13 14.2 13.8 14.3 14.8 14.1C15.4 14 16.3 13.5 16.6 12.9C16.8 12.3 16.8 11.8 16.7 11.7C16.7 11.5 16.5 11.5 15.7 11.3Z" fill="currentColor" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
