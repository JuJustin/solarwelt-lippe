import React from 'react';

import Head from 'next/head';
import CookieConsent from 'react-cookie-consent';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import config from '../config/index.json';

const App = () => {
  const { company } = config;
  const { logoTop } = company;

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

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    const mybutton = document.getElementById('myBtn');

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (mybutton !== null) {
      mybutton.style.scrollBehavior = 'smooth';
    }
  }

  // eslint-disable-next-line global-require
  require('dotenv').config();
  return (
    <div className={`bg-background gap-y-16 overflow-hidden`}>
      <Head>
        <title>
          {'Solarwelt-Lippe Photovoltaikanlage - Jetzt Kosten sparen!'}
        </title>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Jetzt Kosten sparen!"
          key="title"
        />
      </Head>
      <Head>
        <link
          rel="icon"
          href="https://www.solarwelt-lippe.de/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Jetzt Kosten sparen!"
          key="title"
        />
        <meta
          name="description"
          content="Sie möchten mit einer eigenen Photovoltaikanlage Strom erzeugen und Ihre Kosten senken? Profitieren Sie Dank Fördermittel des Staates. Jetzt informieren und und unverbindliches Angebot einholen!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': 'https://solarwelt-lippe.de/',
                    name: 'Startseite',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@id': 'https://solarwelt-lippe.de/angebot/',
                    name: 'Angebot',
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="CookieBanner"
        style={{ background: '#FF914D' }}
        buttonStyle={{
          background: '#FFFFFF',
          color: '#4e503b',
          fontSize: '13px',
        }}
        expires={150}
      >
        Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
        verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung
        der Webseite stimmen Sie der Verwendung von Cookies zu.{' '}
        <span style={{ fontSize: '10px' }}>
          Weitere Informationen zu Cookies erhalten Sie in unserer
          Datenschutzerklärung.
        </span>
      </CookieConsent>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header mainPage={true} />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <Features />
      </LazyShow>
      <LazyShow>
        <Product />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
      <button onClick={() => topFunction()} id="myBtn" title="Nach Oben">
        <img width="50" height="50" alt="submit" src={logoTop} />
      </button>
    </div>
  );
};

export default App;
