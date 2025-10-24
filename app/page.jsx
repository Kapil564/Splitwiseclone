import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import AboutUs from "./AboutUs/page";
import Features from "./Features/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
      </main>
      <Footer />
    </div>
  );
}