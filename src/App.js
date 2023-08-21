import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Performances } from "./pages/Performances";
import { Team } from "./pages/Team";
import { Auditions } from "./pages/Auditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/syn-site' element={<LandingPage/>}/>
        <Route path='/performances' element={<Performances/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/auditions' element={<Auditions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
