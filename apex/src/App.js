import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Appointment from './component/Appointment';
import Contact from './component/Contact';
import Features from './component/Features';
import Services from './component/Services';
import Team from './component/Team';
import Testimonial from './component/Testimonial';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/Team' element={<Team/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
    <Route path='/header' element={<Header/>}/>
    <Route path='/Footer' element={<Footer/>}/>
  </Routes>

    </>
  );
}

export default App;
