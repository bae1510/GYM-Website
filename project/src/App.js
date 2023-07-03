
import Navbar from './Components/Navabar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/Pages/About';
import Program from './Components/Pages/Program';
import Tranning from './Components/Pages/Tranning';
import Pricing from './Components/Pages/Pricing';
import Footer from './Components/Pages/Footer';


function App() {
  return (
    <div >
      <Navbar />
      <HeroSection/> 
       <About/>
      <Program/>
      <Pricing/>
      <Tranning/> 
      <Footer/>
     
    </div>
  );
}

export default App;
