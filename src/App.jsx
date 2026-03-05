import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Intro from './sections/Intro';
import Expertise from './sections/Expertise';
import VisionForNova from './sections/VisionForNova';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      <Header />

      <main>
        <Intro />
        <Expertise />
        <VisionForNova />
        <Contact />
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;