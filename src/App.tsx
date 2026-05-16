import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
