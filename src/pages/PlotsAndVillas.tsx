
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Home as HomeIcon, 
  Maximize2, 
  ArrowRight, 
  Layers
} from 'lucide-react';

const PlotsAndVillas: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bay-blue text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Plots & Luxury Villas</h1>
          <p className="text-xl max-w-3xl">
            Own a slice of paradise with our beachfront plots or build your dream villa with breathtaking views of the Bay of Bengal.
          </p>
        </div>
      </section>

      {/* Beachfront Plots Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-blue mb-6">Own a Slice of Paradise</h2>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck offers 206 premium pre-demarcated plots ranging from 200 to 267 sq yds, each providing 
                stunning views and easy access to the Bay of Bengal shoreline.
              </p>
              
              <h3 className="text-xl font-semibold text-bay-blue mb-4">Plot Features:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Premium beachfront and near-beach locations",
                  "RERA & SUDA approved plots with clear titles",
                  "Gated community with 24/7 security",
                  "Access to all resort amenities",
                  "60 & 40 ft BT internal roads",
                  "Avenue plantation and landscaped surroundings",
                  "High ROI potential with strategic location"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-bay-teal mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-bay-teal mb-8">
                <h4 className="font-bold text-bay-blue mb-2">Free Resort Membership</h4>
                <p className="text-gray-700">
                  Every plot owner receives complimentary resort membership, providing access to all premium amenities.
                </p>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Enquire About Plots
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/lovable-uploads/a2eb2644-2fd9-407c-bc89-5ef37c027696.png" 
                  alt="SVN Bay Parck Property Layout" 
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-bay-blue">Property Layout</h4>
                  <p className="text-sm text-gray-600">Master plan with plot demarcation</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/lovable-uploads/ed75d4f1-833c-4e93-91ab-226378d1894a.png" 
                  alt="Beach View from Plots" 
                  className="w-full h-auto object-cover"
                  style={{ height: "200px" }}
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-bay-blue">Beach View</h4>
                  <p className="text-sm text-gray-600">Actual view from the property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Pricing Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Plot Specifications</h2>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-bay-blue text-white">
                  <th className="py-4 px-6 text-left">Plot Type</th>
                  <th className="py-4 px-6 text-left">Size Range</th>
                  <th className="py-4 px-6 text-left">Location</th>
                  <th className="py-4 px-6 text-left">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Premium Beachfront</td>
                  <td className="py-4 px-6">240-267 sq yds</td>
                  <td className="py-4 px-6">Direct beach view</td>
                  <td className="py-4 px-6">Prime location, unobstructed views</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-medium">Standard Plots</td>
                  <td className="py-4 px-6">200-240 sq yds</td>
                  <td className="py-4 px-6">Near beach area</td>
                  <td className="py-4 px-6">Easy beach access, resort proximity</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Corner Plots</td>
                  <td className="py-4 px-6">220-267 sq yds</td>
                  <td className="py-4 px-6">Various locations</td>
                  <td className="py-4 px-6">Two-side open, premium positioning</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-700">
              Contact our sales team for detailed pricing information and current availability.
            </p>
            <div className="flex justify-center mt-4">
              <a 
                href="tel:+918599924242" 
                className="inline-flex items-center text-bay-blue font-medium hover:text-bay-teal transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
                +91 85999 24242
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Villas Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Luxury Villas</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-bay-blue text-white py-3 px-4 text-center">
                    <h3 className="text-xl font-bold">2 BHK Villa</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Maximize2 className="w-5 h-5 text-bay-teal mr-3" />
                      <div>
                        <p className="font-medium">Slab Area</p>
                        <p className="text-gray-700">1600 sq. ft.</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <HomeIcon className="w-5 h-5 text-bay-teal mr-3" />
                      <div>
                        <p className="font-medium">Built-Up Area</p>
                        <p className="text-gray-700">1000 sq. ft.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Layers className="w-5 h-5 text-bay-teal mr-3" />
                      <div>
                        <p className="font-medium">Configuration</p>
                        <p className="text-gray-700">2 Bedrooms, Hall, Kitchen</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-bay-teal text-white py-3 px-4 text-center">
                    <h3 className="text-xl font-bold">4 BHK Villa</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Maximize2 className="w-5 h-5 text-bay-blue mr-3" />
                      <div>
                        <p className="font-medium">Slab Area</p>
                        <p className="text-gray-700">2600 sq. ft.</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <HomeIcon className="w-5 h-5 text-bay-blue mr-3" />
                      <div>
                        <p className="font-medium">Built-Up Area</p>
                        <p className="text-gray-700">2000 sq. ft.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Layers className="w-5 h-5 text-bay-blue mr-3" />
                      <div>
                        <p className="font-medium">Configuration</p>
                        <p className="text-gray-700">4 Bedrooms, Hall, Kitchen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-bay-blue mb-6">Custom Villas on Your Plot</h3>
              <p className="text-lg text-gray-700 mb-6">
                SVN Bay Parck offers the option to build custom designed villas on your plot. Choose from our 
                2 BHK or 4 BHK options, or work with our architects to create a fully customized design.
              </p>
              
              <h4 className="text-xl font-semibold text-bay-blue mb-4">Villa Features:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Modern architectural designs with coastal aesthetics",
                  "High-quality construction materials",
                  "Fully customizable interiors",
                  "Energy efficient systems",
                  "Landscaped gardens",
                  "Parking spaces",
                  "Option for private plunge pools"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-bay-teal mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="btn-primary">
                Enquire About Villas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bay-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Beachfront Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a site visit or to learn more about our premium plots and luxury villas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Our Sales Team
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
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlotsAndVillas;
