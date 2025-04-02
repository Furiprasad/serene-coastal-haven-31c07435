
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bay-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/public/lovable-uploads/1a767dab-71e3-404f-9e69-cd0274bc49ce.png" 
                alt="SVN Bay Parck Logo" 
                className="h-16 invert"
              />
            </Link>
            <p className="mb-4">
              A world away on the shores of the Bay of Bengal. Premium beachfront plots and luxury resort living.
            </p>
            <p className="text-sm opacity-80">RERA & SUDA approved (AP RERA NO: P01070381701)</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-bay-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-bay-teal transition-colors">About Us</Link></li>
              <li><Link to="/plots-and-villas" className="hover:text-bay-teal transition-colors">Plots & Villas</Link></li>
              <li><Link to="/resort" className="hover:text-bay-teal transition-colors">Resort</Link></li>
              <li><Link to="/amenities" className="hover:text-bay-teal transition-colors">Amenities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>+91 85999 24242<br />+91 85999 36363</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>info@svnsjd.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Koshta Junction, Srikakulam, Andhra Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-bay-blue p-2 rounded-full hover:bg-bay-teal hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-bay-blue p-2 rounded-full hover:bg-bay-teal hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-bay-blue p-2 rounded-full hover:bg-bay-teal hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-bay-blue p-2 rounded-full hover:bg-bay-teal hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                />
                <button className="bg-bay-teal px-4 py-2 rounded-r-md hover:bg-bay-teal-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-bay-blue-dark py-4">
        <div className="container-custom text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SVN Bay Parck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
