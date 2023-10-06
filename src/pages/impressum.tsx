import React from 'react';

import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Head>
        <title>{'Solarwelt-Lippe Photovoltaikanlage - Impressum'}</title>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Impressum"
          key="title"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Impressum"
          key="title"
        />
        <meta name="description" content="Hier finden Sie unser Impressum!" />
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
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header mainPage={false} />
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
          </p>
        </div>
      </div>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
