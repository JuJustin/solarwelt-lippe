import React from 'react';

import MainContent from '../components/MainContent';

const App = () => {
  function scrollFunction() {
    const mybutton = document.getElementById('myBtn');

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton !== null) {
        mybutton.style.display = 'block';
      }
    } else if (mybutton !== null) {
      mybutton.style.display = 'none';
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  if (typeof window !== 'undefined') {
    window.onscroll = function scroller() {
      scrollFunction();
    };
  }

  // eslint-disable-next-line global-require
  require('dotenv').config();
  return (
    <>
      <MainContent stadt="Ostwestfalen-Lippe"></MainContent>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-augustdorf">
        <p className="sr-only">Photovoltaikanlage in Augustdorf</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-bad-pyrmont">
        <p className="sr-only">Photovoltaikanlage in Bad Pyrmont</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-bad-salzuflen">
        <p className="sr-only">Photovoltaikanlage in Bad Salzuflen</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-barntrup">
        <p className="sr-only">Photovoltaikanlage in Barntrup</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-blomberg">
        <p className="sr-only">Photovoltaikanlage in Blomberg</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-detmold">
        <p className="sr-only">Photovoltaikanlage in Detmold</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-dörentrup">
        <p className="sr-only">Photovoltaikanlage in Dörentrup</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-extertal">
        <p className="sr-only">Photovoltaikanlage in Extertal</p>
      </a>
      <a
        className="w-50 h-50"
        href="../photovoltaikanlage-in-horn-bad-meinberg"
      >
        <p className="sr-only">Photovoltaikanlage in Horn-Bad Meinberg</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-Kalletal">
        <p className="sr-only">Photovoltaikanlage in Kalletal</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-lage">
        <p className="sr-only">Photovoltaikanlage in Lage</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-lemgo">
        <p className="sr-only">Photovoltaikanlage in Lemgo</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-lügde">
        <p className="sr-only">Photovoltaikanlage in Lügde</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-nieheim">
        <p className="sr-only">Photovoltaikanlage in Nieheim</p>
      </a>
      <a
        className="w-50 h-50"
        href="../photovoltaikanlage-in-schieder-schwalenberg"
      >
        <p className="sr-only">Photovoltaikanlage in Schieder-Schwalenberg</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-schlangen">
        <p className="sr-only">Photovoltaikanlage in Schlangen</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-steinheim">
        <p className="sr-only">Photovoltaikanlage in Steinheim</p>
      </a>
      <a className="w-50 h-50" href="../photovoltaikanlage-in-hameln">
        <p className="sr-only">Photovoltaikanlage in Hameln</p>
      </a>
    </>
  );
};

export default App;
