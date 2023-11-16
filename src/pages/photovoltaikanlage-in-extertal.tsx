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
      <MainContent stadt="Extertal"></MainContent>
    </>
  );
};

export default App;
