
import {  Routes, Route ,Switch } from 'react-router-dom';
import Navbar from './Components/Navabar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/Pages/About';
import Program from './Components/Pages/Program';
import Tranning from './Components/Pages/Tranning';
import Pricing from './Components/Pages/Pricing';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration';

function App() {
  return (
    <div >
      <Navbar />
      <HeroSection/> 
       <About/>
      <Program/>
      <Pricing/>
      <Tranning/> 
      {/* <Login/> */}
      <Registration/>
     
        <Routes>
         {/* <Route path= "/login" element={<Login/>} />
         <Route path= "/registration" element={<Registration/>} /> */}
          {/* <Route path="/ " element={<About/>} />
          <Route path="/program" element={<Program/>} />
          <Route path="/training" element={<Tranning />} />
          <Route path="/pricing" element={<Pricing />} /> */}

        </Routes>
    

   

    </div>
  );
}

export default App;
