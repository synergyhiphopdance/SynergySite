import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import { Performances } from "./pages/Performances";
import { Team } from "./pages/Team";
import { Auditions } from "./pages/Auditions";
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path = "/" exact component = {LandingPage}/>
    </Routes>
    </Router>
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
