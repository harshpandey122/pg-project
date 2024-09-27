import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Homepage from "./components/Homepage.js"
import Services from "./components/Services.js"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
