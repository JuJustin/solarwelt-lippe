import React from 'react';

import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Form2 from '../components/Form2';
import LazyShow from '../components/LazyShow';
import config from '../config/index.json';

const App = () => {
  const { company } = config;
  const { name: companyName, logo, logoTop } = company;

  // Get the button:

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

  return (
    <div
      className={`websiteBackground bg-background grid gap-y-2  overflow-hidden`}
    >
      <Head>
        <title>
          {
            'Solarwelt-Lippe Photovoltaikanlage - Jetzt unverbindliches Angebot einholen!'
          }
        </title>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Jetzt unverbindliches Angebot einholen!"
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
      <div className="flex items-center justify-center">
        <a href="../">
          <span className="sr-only">{companyName}</span>
          <img
            alt="logo"
            className="h-32 scale-150 w-auto sm:h-32"
            src={logo}
          />
        </a>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto">
        <Form2 />
      </div>
      <div>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
      </div>
      <Analytics />
      <button onClick={() => topFunction()} id="myBtn" title="Nach Oben">
        <img width="50" height="50" alt="submit" src={logoTop} />
      </button>
    </div>
  );
};

export default App;
