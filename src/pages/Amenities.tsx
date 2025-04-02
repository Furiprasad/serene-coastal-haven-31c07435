import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Home, 
  Waves, 
  Dumbbell, 
  Trophy, 
  Bike,
  Footprints, 
  MapPin
} from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      name: "Grand Entrance Arch with Security Cabin",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7V16L12 21L21 16V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "An impressive entrance with 24/7 security, creating a secure and welcoming gateway to the community."
    },
    {
      name: "Gated Compound",
      icon: <Shield className="w-10 h-10" />,
      description: "Complete perimeter security ensuring privacy and safety for all residents and visitors."
    },
    {
      name: "Internal Roads (60 & 40 ft BT)",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Wide, well-maintained bitumen roads throughout the property for easy navigation and accessibility."
    },
    {
      name: "Avenue Plantation",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9C9 4 12 2 17 3C19.8 3.6 22 7 22 10C22 14 18 16 14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9C15 4 12 2 7 3C4.2 3.6 2 7 2 10C2 14 6 16 10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Beautiful tree-lined avenues creating shade and enhancing the aesthetic appeal of the community."
    },
    {
      name: "Outdoor Gym",
      icon: <Dumbbell className="w-10 h-10" />,
      description: "Open-air fitness area with professional equipment for healthy outdoor workouts with a view."
    },
    {
      name: "Children's Play Area",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 10V14M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Safe and fun play areas designed specifically for children of all ages."
    },
    {
      name: "Basketball Court",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.9 4.9L19.1 19.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Professional-grade basketball court for sports enthusiasts of all skill levels."
    },
    {
      name: "Badminton Court",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 8L8.9 19.1C8.3 19.7 7.5 20 6.7 20C5.9 20 5.1 19.7 4.5 19.1C3.9 18.5 3.6 17.7 3.6 16.9C3.6 16.1 3.9 15.3 4.5 14.7L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Well-maintained court for badminton games and tournaments among residents."
    },
    {
      name: "Cricket Pitch",
      icon: <Trophy className="w-10 h-10" />,
      description: "Dedicated area for cricket enthusiasts to enjoy India's favorite sport with friends and family."
    },
    {
      name: "Cycling Tracks",
      icon: <Bike className="w-10 h-10" />,
      description: "Dedicated cycling paths throughout the community for safe and enjoyable rides."
    },
    {
      name: "Jogging Tracks",
      icon: <Footprints className="w-10 h-10" />,
      description: "Well-designed jogging paths with scenic views for morning runs and evening walks."
    },
    {
      name: "Swimming Pool",
      icon: <Waves className="w-10 h-10" />,
      description: "Large swimming pool with separate kids' area, perfect for relaxation and recreation."
    },
    {
      name: "Club House",
      icon: <Home className="w-10 h-10" />,
      description: "Multi-purpose club house for community gatherings, events, and recreational activities."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Amenities</h1>
          <p className="text-xl max-w-3xl">
            SVN Bay Parck offers premium amenities designed for all age groups, combining comfort, recreation, and security.
          </p>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Amenities for All Age Groups</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            From sports facilities to security features, SVN Bay Parck is designed to provide a complete lifestyle experience for residents and visitors.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-bay-blue mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-bay-blue">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Specific Amenities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-blue mb-6">Resort Amenities</h2>
              <p className="text-lg text-gray-700 mb-6">
                In addition to the community amenities, the 15-acre luxury resort within SVN Bay Parck offers 
                exclusive facilities for residents and resort guests.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Premium Cottages with Sea View",
                  "Multi-Cuisine Restaurant",
                  "Banquet Hall for Events",
                  "Party Lawns for Celebrations",
                  "Indoor Games Room",
                  "Kids Play Zone",
                  "Beach Access"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-bay-teal mr-3 mt-1">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/resort" className="btn-primary">
                Explore Resort
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-bay-teal flex items-center justify-center text-white">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.9502 22L3.0002 9.97C3.0002 9.36 3.2902 8.78 3.7702 8.4L10.7702 2.95C11.4902 2.39 12.5002 2.39 13.2302 2.95L20.2302 8.39C20.7202 8.78 21.0002 9.35 21.0002 9.97V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 16.25V16.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-bay-blue">Premium Cottages</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-bay-blue flex items-center justify-center text-white">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-bay-blue">Restaurant</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-resort-green flex items-center justify-center text-white">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-bay-blue">Indoor Games</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-resort-orange flex items-center justify-center text-white">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9.48999 12H14.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V17.55C22 21.11 21.11 22 17.56 22H6.44C2.89 22 2 21.11 2 17.56V6.44C2 2.89 2.89 2 6.44 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-bay-blue">Party Lawn</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map of Amenities */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Property Layout</h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <img 
                src="/public/lovable-uploads/a2eb2644-2fd9-407c-bc89-5ef37c027696.png" 
                alt="SVN Bay Parck Property Layout" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-resort-green bg-opacity-10 p-4 rounded-lg">
                  <div className="inline-block w-4 h-4 rounded-full bg-resort-green mb-2"></div>
                  <p className="font-medium text-bay-blue">Beach Front Plots</p>
                </div>
                <div className="bg-resort-orange bg-opacity-10 p-4 rounded-lg">
                  <div className="inline-block w-4 h-4 rounded-full bg-resort-orange mb-2"></div>
                  <p className="font-medium text-bay-blue">Premium Resort Cottages</p>
                </div>
                <div className="bg-bay-blue bg-opacity-10 p-4 rounded-lg">
                  <div className="inline-block w-4 h-4 rounded-full bg-bay-blue mb-2"></div>
                  <p className="font-medium text-bay-blue">Luxury Resort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience SVN Bay Parck?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to schedule a site visit and explore all the amenities and facilities in person.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/plots-and-villas" className="bg-white text-bay-blue hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              View Plots & Villas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
