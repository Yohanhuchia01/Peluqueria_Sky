import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Services from './Services';
// import Gallery from './Gallery';
// import Contact from './Contact';
// import NotFound from './NotFound';
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/pruebas" element={<Contact />} /> */}
        <Route path="pruebas" element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;