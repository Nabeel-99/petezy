import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col h-full  relative w-screen ">
        <Background />
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
