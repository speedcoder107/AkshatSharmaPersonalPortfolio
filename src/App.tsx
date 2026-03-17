import { ScrollNav } from './components/ScrollNav';
import { QuantumBackground } from './components/QuantumBackground';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="app">
      <QuantumBackground />
      <ScrollNav />
      
      <section id="home" className="page-section"><Home /></section>
      <section id="about" className="page-section"><About /></section>
      <section id="education" className="page-section"><Education /></section>
      <section id="research" className="page-section"><Research /></section>
      <section id="projects" className="page-section"><Projects /></section>
      <section id="contact" className="page-section"><Contact /></section>

      <style>{`
        .app {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        section, .page-section {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }
        @media (max-width: 768px) {
           #home { height: 100vh; }
        }
      `}</style>
    </div>
  );
}

export default App;
