import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import  { LandingPage } from "./pages/LandingPage";
import  { Performances } from "./pages/Performances";
import { Team } from "./pages/Team";
import { Auditions } from "./pages/Auditions";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Router>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/Performances" element = {< Performances/>}/>
      <Route path = "/Team" element = {<Team/>}/>
      <Route path = "/Auditions" element = {<Auditions/>}/>
    </Routes>
    </Router>
    <Footer />
    </div>
    
    
   // <BrowserRouter>
   //   <Routes>
   //     <Route path='/syn-site' element={<LandingPage/>}/>
   //     <Route path='/performances' element={<Performances/>}/>
   //     <Route path='/team' element={<Team/>}/>
   //     <Route path='/auditions' element={<Auditions/>}/>
   //   </Routes>
   // </BrowserRouter>
  );
}

export default App;
