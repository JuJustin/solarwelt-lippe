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
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
          </div>
          <p>
            <b>Impressum</b>
          </p>
          <p>
            <br />
            <b>Impressum Angaben gemäß § 5 TMG</b>
            <br />
            B & B Solarwelt-Lippe UG (haftungsbeschränkt) <br />
            Drosselweg 3 <br />
            32816 Schieder-Schwalenberg <br />
            <br />
            <b>Vertreten durch:</b> <br />
            Ralph Bich <br />
            Justin Bich <br /> <br />
            <b>Kontakt:</b> <br />
            E-Mail: info@solarwelt-lippe.de <br />
            <br />
            <b>Eintragung im Handelsregister</b> <br />
            Registergericht: Lemgo <br />
            Registernummer: HRB 11073
            <br />
            <br />
            USt-ID.: DE363630968
          </p>
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
