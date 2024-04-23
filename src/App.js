import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;