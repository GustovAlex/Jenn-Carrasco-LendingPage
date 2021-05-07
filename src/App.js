import './indexStyles.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Programs from './components/programs/Programs'
import WhyMe from './components/whyMe/WhyMe'
import Contacts from './components/contacts/Contacts'
import ButtonUpToTop from './components/buttonUpToTop/ButtonUpToTop'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Programs />
      <WhyMe />
      <Contacts />
      <Footer />
      <ButtonUpToTop />

    </div>
  );
}

export default App;
