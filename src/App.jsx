
// en App organizamos las rutas de la app
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./componentes/navbar";
import Contacto from "./componentes/contacto";
import Upload from "./componentes/upload";
import Servicios from "./componentes/servicios";
import Weather from "./componentes/Weather";


function App() {
  return (

    <Router basename="/TP2Y3JURI/">
      <Navbar />

      <Routes>

        <Route path="/" element={<div></div>} />
        <Route path="/upload" element={<Upload />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Weather" element={<Weather />} />


      </Routes>
    </Router>
  );
}

export default App;
