
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Navigation, Car, Building, Compass } from 'lucide-react';

const Location: React.FC = () => {
  const landmarks = [
    {
      name: "Chennai-Kolkata Highway",
      distance: "10 km",
      icon: <Car className="h-8 w-8" />,
      description: "Easy access to the national highway connecting major cities"
    },
    {
      name: "Bhogapuram Airport",
      distance: "35 km",
      icon: <Plane className="h-8 w-8" />,
      description: "Proximity to the upcoming international airport"
    },
    {
      name: "Vizianagaram City",
      distance: "40 km",
      icon: <Building className="h-8 w-8" />,
      description: "Quick drive to urban amenities and facilities"
    },
    {
      name: "Srikakulam City",
      distance: "25 km",
      icon: <Building className="h-8 w-8" />,
      description: "Access to city conveniences and healthcare"
    },
    {
      name: "Visakhapatnam",
      distance: "70 km",
      icon: <Building className="h-8 w-8" />,
      description: "Major port city with international connections"
    },
    {
      name: "Bay of Bengal",
      distance: "Direct Access",
      icon: <Navigation className="h-8 w-8" />,
      description: "Beachfront property with unobstructed sea views"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Effortless Access to Serenity</h1>
          <p className="text-xl max-w-3xl">
            Strategically located at Koshta Junction, Srikakulam, SVN Bay Parck offers the perfect balance of connectivity and tranquility.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Location Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/a2eb2644-2fd9-407c-bc89-5ef37c027696.png" 
                  alt="SVN Bay Parck Location Map" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-bay-blue mb-6">Strategic Location</h3>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck is situated in a prime location that offers the best of both worlds - 
                the serenity of beachfront living and convenient access to major transportation hubs 
                and urban centers.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                The property is located at Koshta Junction in Srikakulam district, Andhra Pradesh, 
                with direct access to the pristine shores of the Bay of Bengal. Its strategic position 
                ensures excellent appreciation potential due to nearby infrastructure developments.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-bay-teal mb-6">
                <h4 className="font-bold text-bay-blue mb-2">Investment Potential</h4>
                <p className="text-gray-700">
                  The upcoming Bhogapuram International Airport (35 km away) and ongoing infrastructure 
                  developments in the region are set to significantly enhance property values in the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks and Distances */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Nearby Landmarks</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            SVN Bay Parck enjoys excellent connectivity to major landmarks and transportation hubs in the region.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-bay-blue rounded-full p-3 text-white mr-4 flex-shrink-0">
                      {landmark.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-bay-blue">{landmark.name}</h3>
                      <p className="text-bay-teal font-medium mb-2">{landmark.distance}</p>
                      <p className="text-gray-600">{landmark.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Surroundings */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Natural Surroundings</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-bay-blue mb-6">Pristine Environment</h3>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck is nestled in a pristine natural environment, surrounded by lush greenery 
                and fronted by the beautiful shores of the Bay of Bengal. The property offers a serene 
                atmosphere with clean air and tranquil surroundings.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-bay-teal rounded-full p-2 text-white mr-3 mt-1">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bay-blue mb-1">Beachfront Paradise</h4>
                    <p className="text-gray-700">
                      Direct access to the pristine shores of the Bay of Bengal with soft sand and clear waters.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bay-teal rounded-full p-2 text-white mr-3 mt-1">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 22V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 22V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 6.89999L10.33 5.18999C11.19 4.04999 12.81 4.04999 13.67 5.18999L15 6.89999C15.35 7.33999 15.13 8.14999 14.59 8.14999H9.42C8.87 8.14999 8.65 7.33999 9 6.89999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-bay-blue mb-1">Lush Greenery</h4>
                    <p className="text-gray-700">
                      Surrounded by verdant landscapes and native vegetation creating a refreshing environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bay-teal rounded-full p-2 text-white mr-3 mt-1">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.49997 22.0001H16.5C19.52 22.0001 22 19.5201 22 16.5001V13.1101C22 10.0901 19.52 7.61011 16.5 7.61011H7.49997C4.47997 7.61011 2 10.0901 2 13.1101V16.5001C2 19.5201 4.47997 22.0001 7.49997 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 7.61V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V7.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 14.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-bay-blue mb-1">Pollution-Free Zone</h4>
                    <p className="text-gray-700">
                      Located away from industrial areas, ensuring clean air and a healthy living environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/ed75d4f1-833c-4e93-91ab-226378d1894a.png" 
                  alt="Bay of Bengal Beach" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Getting Here</h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-bay-blue mb-4">Directions to SVN Bay Parck</h3>
                <p className="text-gray-700 mb-6">
                  SVN Bay Parck is easily accessible via multiple routes. Here are detailed directions from key starting points:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-6 h-6 text-bay-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-bay-blue mb-2">From Visakhapatnam</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Take the NH16 towards Srikakulam</li>
                        <li>After crossing Srikakulam, continue towards Koshta Junction</li>
                        <li>At Koshta Junction, follow the signs to SVN Bay Parck</li>
                        <li>Approximate travel time: 1.5 hours</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-bay-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-bay-blue mb-2">From Bhogapuram Airport</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Head towards NH16</li>
                        <li>Take NH16 towards Srikakulam</li>
                        <li>At Koshta Junction, follow the signs to SVN Bay Parck</li>
                        <li>Approximate travel time: 45 minutes</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-6 h-6 text-bay-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-bay-blue mb-2">From Srikakulam</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Take the road towards Koshta Junction</li>
                        <li>At Koshta Junction, follow the signs to SVN Bay Parck</li>
                        <li>Approximate travel time: 30 minutes</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-bay-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-bay-blue mb-2">From Chennai-Kolkata Highway</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Take the exit towards Koshta Junction</li>
                        <li>Follow the coastal road towards Bay of Bengal</li>
                        <li>Continue on the road until you reach SVN Bay Parck entrance</li>
                        <li>Approximate travel time: 15 minutes from highway exit</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit SVN Bay Parck Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a site visit to experience the perfect location and natural beauty of SVN Bay Parck in person.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-bay-teal hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              Schedule a Visit
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
              WhatsApp for Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
