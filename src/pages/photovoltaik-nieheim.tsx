import React, { useEffect } from 'react';
import Head from 'next/head';
import MainContent2 from '../components/MainContent2';
import NieheimContent from '../components/NieheimContent';

const App = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = document.getElementById('myBtn');
      if (window.scrollY > 20) {
        if (mybutton) mybutton.style.display = 'block';
      } else {
        if (mybutton) mybutton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);

  const pageTitle = 'Photovoltaikanlage Nieheim | Solarwelt Lippe';
  const pageDescription = 'Photovoltaikanlage in Nieheim kaufen – inklusive Beratung, Planung, Installation und Speicher. Jetzt kostenloses Angebot von Solarwelt Lippe sichern.';
  const pageUrl = 'https://www.solarwelt-lippe.de/photovoltaik-nieheim';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/logo.svg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solarwelt Lippe",
    "image": imageUrl,
    "url": pageUrl,
    "telephone": "+49 1765 7796989",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Drosselweg 3",
      "addressLocality": "Schieder-Schwalenberg",
      "postalCode": "32616",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.943402",
      "longitude": "8.864981"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$"
  };

  return (
    <>
      <Head>
        {/* Standard SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Solarwelt Lippe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="https://www.solarwelt-lippe.de/apple-touch-icon.png"/>
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Strukturierte Daten */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <MainContent2 city="Nieheim" leistung="Photovoltaikanlage" content={NieheimContent} />
    </>
  );
};

export default App;
