import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Cases from './components/Cases.jsx';
import Strengths from './components/Strengths.jsx';
import Flow from './components/Flow.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        メインコンテンツへスキップ
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Cases />
        <Strengths />
        <Flow />
        <About />
      </main>
      <Footer />
    </div>
  );
}