
import {  Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navabar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/Pages/About';
import Program from './Components/Pages/Program';
import Tranning from './Components/Pages/Tranning';
import Pricing from './Components/Pages/Pricing';

function App() {
  return (
    <div >
      <Navbar />
      <HeroSection/> 
       <About/>
      <Program/>
      <Pricing/>
      <Tranning/> 
     
        {/* <Routes>
         <Route path= "/" element={<HeroSection/>} />
          <Route path="/ " element={<About/>} />
          <Route path="/program" element={<Program/>} />
          <Route path="/training" element={<Tranning />} />
          <Route path="/pricing" element={<Pricing />} />

        </Routes> */}
    

   

    </div>
  );
}

export default App;
