
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PlotsAndVillas from "./pages/PlotsAndVillas";
import Resort from "./pages/Resort";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plots-and-villas" element={<PlotsAndVillas />} />
            <Route path="/resort" element={<Resort />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/918599924242" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
