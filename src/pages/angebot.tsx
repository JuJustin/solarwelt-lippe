import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Form2 from '../components/Form2';
import LazyShow from '../components/LazyShow';
import config from '../config/index.json';

const App = () => {
  const { company } = config;
  const { name: companyName, logo } = company;

  return (
    <div
      className={`websiteBackground bg-background grid gap-y-2  overflow-hidden`}
    >
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="22485892-af19-4178-b416-a380fa7b170e"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/143329251.js"
      ></Script>
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
    </div>
  );
};

export default App;
