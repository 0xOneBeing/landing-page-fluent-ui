import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SponsoredBy from "./components/SponsoredBy/SponsoredBy";
import OurFeatures from "./components/OurFeatures/OurFeature";
import BenefitsOfAI from "./components/BenefitsOfAI/BenefitsOfAI";
import Testimonial from "./components/Testimonial/Testimonial";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <>
      <section className="App inter px-4 lg:px-10 bg-[rgba(249,251,250,1)]">
        <header className="header">
          <Header />
        </header>

        <main className="main">
          <Hero />

          <SponsoredBy />

          <OurFeatures />

          <BenefitsOfAI />

          <Testimonial />

          <Pricing />
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </section>

      <div className="w-full bg-[var(--primary-color)] p-3"></div>
    </>
  );
}

export default App;
