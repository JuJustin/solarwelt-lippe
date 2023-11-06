import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import Features from '../components/Lösungen';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Vorteile';
import WhatsAppPopup from '../components/WhatsAppPopup';
import Product from '../components/Überuns';

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
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="22485892-af19-4178-b416-a380fa7b170e"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
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
        <WhatsAppPopup />
        <div className={`relative bg-background z-0`}>
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
            <a className="w-50 h-50" href="../photovoltaikanlage-in-augustdorf">
              <p className="sr-only">Photovoltaikanlage in Augustdorf</p>
            </a>
            <a
              className="w-50 h-50"
              href="../photovoltaikanlage-in-bad-pyrmont"
            >
              <p className="sr-only">Photovoltaikanlage in Bad Pyrmont</p>
            </a>
            <a
              className="w-50 h-50"
              href="../photovoltaikanlage-in-bad-salzuflen"
            >
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
              <p className="sr-only">
                Photovoltaikanlage in Schieder-Schwalenberg
              </p>
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
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </>
  );
};

export default App;
