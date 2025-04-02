
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Users, 
  ParkingCircle,
  Coffee,
  Wifi,
  Shield,
  CheckCircle
} from 'lucide-react';

const Resort: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience Unparalleled Luxury</h1>
          <p className="text-xl max-w-3xl">
            SVN Bay Parck Resort - 15 acres of premium amenities and luxury cottages on the shores of the Bay of Bengal.
          </p>
        </div>
      </section>

      {/* Resort Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-blue mb-6">Resort Overview</h2>
              <p className="text-lg text-gray-700 mb-6">
                Set within the 40-acre SVN Bay Parck development, our 15-acre luxury resort offers 
                a perfect blend of natural beauty and world-class amenities. With premium cottages, 
                recreational facilities, and direct beach access, it's the ultimate destination for 
                relaxation and rejuvenation.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-bay-teal mb-8">
                <h4 className="font-bold text-bay-blue mb-2">Plot Owner Benefits</h4>
                <p className="text-gray-700">
                  All SVN Bay Parck plot owners receive complimentary resort membership, giving them 
                  full access to all resort amenities and preferential rates for cottage stays.
                </p>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Book Your Stay
              </Link>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/public/lovable-uploads/b97e9c43-90ba-4fa5-bf40-2f854c865e4e.png" 
                alt="SVN Bay Parck Resort" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resort Amenities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">World-Class Amenities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-bay-blue text-white rounded-full flex items-center justify-center mb-4">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Swimming Pool</h3>
              <p className="text-gray-600">
                Enjoy our spacious swimming pool with dedicated children's area and poolside lounging.
              </p>
            </div>
            
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-bay-teal text-white rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Restaurant</h3>
              <p className="text-gray-600">
                Savor delicious local and international cuisine at our beachfront restaurant.
              </p>
            </div>
            
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-resort-green text-white rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Fitness Center</h3>
              <p className="text-gray-600">
                Stay fit with our state-of-the-art gym equipment and open-air workout area.
              </p>
            </div>
            
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-bay-blue text-white rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Banquet Hall</h3>
              <p className="text-gray-600">
                Host events and celebrations in our spacious banquet hall with modern facilities.
              </p>
            </div>
            
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-bay-teal text-white rounded-full flex items-center justify-center mb-4">
                <ParkingCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Party Lawns</h3>
              <p className="text-gray-600">
                Celebrate special occasions in our beautifully landscaped outdoor party area.
              </p>
            </div>
            
            <div className="amenity-card hover-scale">
              <div className="w-16 h-16 bg-resort-orange text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V9.5C4 8.04131 4.58797 6.64236 5.63388 5.59647C6.6798 4.55059 8.07869 3.9626 9.5376 3.9626C10.9965 3.9626 12.3954 4.55059 13.4413 5.59647C14.4872 6.64236 15.0752 8.04131 15.0752 9.5V19.5C15.0752 20.163 14.8118 20.7989 14.343 21.2678C13.8741 21.7366 13.2382 22 12.5752 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 10.5H19C19.5304 10.5 20.0391 10.7107 20.4142 11.0858C20.7893 11.4609 21 11.9696 21 12.5V14.5C21 15.0304 20.7893 15.5391 20.4142 15.9142C20.0391 16.2893 19.5304 16.5 19 16.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2H10ZM8 7V11H10V7H8ZM8 2V7H10V2H8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-bay-blue">Games Room</h3>
              <p className="text-gray-600">
                Enjoy indoor games and recreational activities in our well-equipped games room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Cottages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Luxury Cottages</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Our premium cottages offer the perfect blend of comfort, luxury, and panoramic views of the Bay of Bengal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/9c60e1af-5055-4141-b90a-5dfe811971e3.png" 
                  alt="Deluxe Cottage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-bay-blue">Deluxe Cottage</h3>
                <p className="text-gray-700 mb-4">
                  Spacious accommodations with modern amenities and private balcony offering stunning sea views.
                </p>
                <ul className="space-y-2">
                  {[
                    "King-size bed", 
                    "En-suite bathroom", 
                    "Air conditioning", 
                    "Minibar"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-bay-teal mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/df99652f-94f4-4df2-95a4-999107674b7c.png" 
                  alt="Premium Cottage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-bay-blue">Premium Cottage</h3>
                <p className="text-gray-700 mb-4">
                  Luxurious accommodations with separate living area and premium furnishings for ultimate comfort.
                </p>
                <ul className="space-y-2">
                  {[
                    "King-size bed", 
                    "Living room", 
                    "Premium amenities", 
                    "Private veranda"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-bay-teal mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/b66fc727-b05e-4dc2-bade-dc62169a3ba9.png" 
                  alt="Luxury Suite" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-bay-blue">Luxury Suite</h3>
                <p className="text-gray-700 mb-4">
                  Our most spacious and elegant accommodations with premium services and panoramic views.
                </p>
                <ul className="space-y-2">
                  {[
                    "Master bedroom", 
                    "Separate living area", 
                    "Dining space", 
                    "Premium amenities"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-bay-teal mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Additional Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Coffee className="w-10 h-10 text-bay-blue mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Room Service</h3>
              <p className="text-gray-600">24/7 in-room dining and services</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Wifi className="w-10 h-10 text-bay-teal mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Free Wi-Fi</h3>
              <p className="text-gray-600">High-speed internet throughout</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <svg className="w-10 h-10 text-resort-green mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 13.7501C9.5 14.7201 10.25 15.5001 11.17 15.5001H13.05C13.85 15.5001 14.5 14.8201 14.5 13.9701C14.5 13.0601 14.1 12.7301 13.51 12.5201L10.5 11.4701C9.91 11.2601 9.51001 10.9401 9.51001 10.0201C9.51001 9.18009 10.16 8.49009 10.96 8.49009H12.84C13.76 8.49009 14.51 9.27009 14.51 10.2401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 3V7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="font-bold text-lg mb-2">Tour Packages</h3>
              <p className="text-gray-600">Guided tours to nearby attractions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-10 h-10 text-resort-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">24/7 Security</h3>
              <p className="text-gray-600">Round-the-clock security services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxury by the Bay</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at SVN Bay Parck Resort or enquire about our exclusive plot owner membership benefits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-bay-teal hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              Book Your Stay
            </Link>
            <Link to="/plots-and-villas" className="bg-bay-blue hover:bg-bay-blue-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-block">
              View Plots & Villas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resort;
