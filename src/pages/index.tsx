// pages/index.tsx
import Head from 'next/head';
import MainContent2 from '../components/MainContent2';
import OWLContent from '../components/OWLContent';

export default function Home({ city, leistung }: { city: string; leistung: string }) {
  const pageTitle = `${leistung} ${city} | Solarwelt Lippe`;
  const pageDescription = `${leistung} in ${city} kaufen – inklusive Beratung, Planung, Installation und Speicher. Jetzt kostenloses Angebot sichern.`;
  const pageUrl = 'https://www.solarwelt-lippe.de';
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Solarwelt Lippe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <MainContent2 city={city} leistung={leistung} content={OWLContent} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      city: 'Ostwestfalen-Lippe',
      leistung: 'Photovoltaik',
    },
  };
}
