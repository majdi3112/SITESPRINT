import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhySiteSprint from "../components/WhySiteSprint";
import Services from "../components/Services";
import DemosSection from "../components/DemosSection";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      navigate("/", { replace: true, state: {} });
    }, 50);
    return () => window.clearTimeout(t);
  }, [location.state, navigate]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-visible");
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <WhySiteSprint />
      <Services />
      <DemosSection />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
