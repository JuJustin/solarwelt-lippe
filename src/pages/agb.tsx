import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import WhatsAppPopup from '../components/WhatsAppPopup';
import Footer2 from '../components/Footer2';
import Navbar2 from '../components/Navbar2';

const App = () => {
  return (
    <>
    <Navbar2 />
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <WhatsAppPopup />
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto pt-48">
          Drück mich: <a href="./../AGB.pdf">AGB herunterladen.</a>
        </div>
      </div> 
        
      <LazyShow>
        <>
          <Canvas />
          <Footer2 />
        </>
      </LazyShow>
      <Analytics />
    </div>
    </>
  );
};

export default App;
