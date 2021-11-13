import Navbar from './components/Navbar';
import './App.css';
import './components/Footer/Footer.css';
import LandingView from './components/LandingView';
import Services from './components/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingView/>
      <Services/>

      <Footer/>
    </div>
  );
}

export default App;
