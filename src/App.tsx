import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import Team from "@/pages/Team";
import Press from "@/pages/Press";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <CustomCursor />
        <AnimatedRoutes />
      </LenisProvider>
    </BrowserRouter>
  );
}
