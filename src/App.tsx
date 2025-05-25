import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App inter bg-[rgba(249,251,250,1)]">
      <header>
        <Header />
      </header>

      <main className="main">
        <Hero />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
