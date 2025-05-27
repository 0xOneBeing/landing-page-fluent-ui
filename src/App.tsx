import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SponsoredBy from "./components/SponsoredBy/SponsoredBy";
import OurFeatures from "./components/OurFeatures/OurFeature";
import BenefitsOfAI from "./components/BenefitsOfAI/BenefitsOfAI";
import Testimonial from "./components/Testimonial/Testimonial";
import Pricing from "./components/Pricing/Pricing";
import WaitList from "./components/WaitList/WaitList";

function App() {
  return (
    <>
      <section className="App inter bg-[rgba(249,251,250,1)]">
        <header className="header">
          <Header />
        </header>

        <Hero />

        <main className="main px-4 lg:px-10">
          <SponsoredBy />

          <OurFeatures />

          <BenefitsOfAI />

          <Testimonial />

          <Pricing />

          <WaitList />
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </section>

    </>
  );
}

export default App;
