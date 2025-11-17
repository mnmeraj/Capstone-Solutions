import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className="container mt-4 fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div style={{ background: "pink", padding: "60px", textAlign: "center" }}>
              <h1>Page not found</h1>
              <p>This page is unavailable</p>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}
