import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <section className="App m-3">
      <header>
        <Header />
      </header>

      <main className="mt-20">
        <Hero />
      </main>

      <footer></footer>
    </section>
  );
}

export default App;
