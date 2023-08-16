import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import {LandingPage} from "./pages/LandingPage"

function App() {
  return (
    <BrowserRouter basename='/syn-site/'>
      <Routes>
        <Route path='' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
