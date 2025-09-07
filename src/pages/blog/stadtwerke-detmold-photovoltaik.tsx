import React, { useEffect } from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2  from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';
import Image from 'next/image';
import Link from 'next/link';

const StadtwerkeDetmoldPhotovoltaik = () => {
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

  const pageTitle = 'Stadtwerke Detmold Photovoltaik 2025 ▷ Einspeisung & Netzanschluss | Solarwelt Lippe';
  const pageDescription = 'Stadtwerke Detmold Photovoltaik: Alles zu Einspeisung, Netzanschluss und Stromtarifen. Vergleich Stadtwerke vs. eigene Solaranlage. Beratung von Solarwelt Lippe.';
  const pageUrl = 'https://www.solarwelt-lippe.de/stadtwerke-detmold-photovoltaik';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/stadtwerke-detmold-photovoltaik.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solarwelt Lippe - Stadtwerke Detmold Photovoltaik Beratung",
    "image": [imageUrl],
    "url": pageUrl,
    "telephone": "+49 1765 7796989",
    "email": "info@solarwelt-lippe.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Drosselweg 3",
      "addressLocality": "Schieder-Schwalenberg",
      "addressRegion": "Nordrhein-Westfalen",
      "postalCode": "32816",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.943402",
      "longitude": "8.864981"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Detmold"
      },
      {
        "@type": "Place", 
        "name": "Kreis Lippe"
      }
    ],
    "serviceType": [
      "Photovoltaik Beratung",
      "Stadtwerke Netzanschluss",
      "Einspeisung Beratung"
    ],
    "description": "Beratung zu Stadtwerke Detmold Photovoltaik: Einspeisung, Netzanschluss und Vergleich mit eigener Solaranlage.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "viele",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie funktioniert die Einspeisung bei Stadtwerke Detmold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei Stadtwerke Detmold erfolgt die Einspeisung von Photovoltaik-Strom über einen bidirektionalen Zähler. Sie erhalten die gesetzliche EEG-Einspeisevergütung von 12,47 ct/kWh (Volleinspeisung) oder 7,86 ct/kWh (Teileinspeisung) für Anlagen bis 10 kWp."
        }
      },
      {
        "@type": "Question", 
        "name": "Was kostet der Netzanschluss bei Stadtwerke Detmold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Netzanschluss für Photovoltaikanlagen bei Stadtwerke Detmold erfolgt nach den gesetzlichen Vorgaben. Die Kosten variieren je nach Anlagengröße und örtlichen Gegebenheiten. Kleinere Anlagen bis 10 kWp haben meist geringere Anschlusskosten."
        }
      },
      {
        "@type": "Question",
        "name": "Lohnt sich eine eigene Photovoltaikanlage vs. Stadtwerke Detmold Tarife?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine eigene Photovoltaikanlage ist meist wirtschaftlicher als Stadtwerke Detmold Stromtarife. Bei Stromkosten von über 35 ct/kWh und eigenen Erzeugungskosten von 8-12 ct/kWh sparen Sie erheblich durch Eigenverbrauch."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Unterlagen brauche ich für die Anmeldung bei Stadtwerke Detmold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für die Anmeldung Ihrer Photovoltaikanlage bei Stadtwerke Detmold benötigen Sie: Anmeldung zur Netzeinspeisung, technische Daten der Anlage, Installationsnachweis und Konformitätserklärung des Installateurs."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://www.solarwelt-lippe.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.solarwelt-lippe.de/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Stadtwerke Detmold Photovoltaik",
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="stadtwerke detmold photovoltaik, stadtwerke detmold einspeisung, stadtwerke detmold netzanschluss, stadtwerke detmold solaranlage, photovoltaik detmold stadtwerke, einspeisung detmold, netzanschluss photovoltaik detmold, stadtwerke detmold strom, solaranlage stadtwerke detmold" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Solarwelt Lippe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="https://www.solarwelt-lippe.de/apple-touch-icon.png"/>
        <link rel="canonical" href={pageUrl} />
        
        <link rel="alternate" hrefLang="de-DE" href={pageUrl} />
        <link rel="alternate" hrefLang="de" href={pageUrl} />
        
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Detmold, Kreis Lippe" />
        <meta name="geo.position" content="51.9356;8.8783" />
        <meta name="ICBM" content="51.9356, 8.8783" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Solarwelt Lippe" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <link rel="preload" href="/fonts/primary-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.stadtwerke-detmold.de" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        <meta name="theme-color" content="#FE8800" />
      </Head>

      <Navbar2 />
      <WhatsAppPopup />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:text-blue-800">Startseite</a></li>
            <li><span className="text-gray-500">/</span></li>
            <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li>
            <li><span className="text-gray-500">/</span></li>
            <li><span className="text-gray-800 font-medium">Stadtwerke <Link href="/photovoltaik-detmold">Detmold Photovoltaik</Link></span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 md:py-24 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200/30 to-yellow-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-green-200/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Stadtwerke Detmold & Photovoltaik 2025
                </span>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="text-center space-y-8">
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  <span className="block">Stadtwerke Detmold</span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#FE8800]">Photovoltaik</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FE8800]/20 -z-10 rounded"></span>
                  </span>
                  <span className="block text-gray-700">Ratgeber 2025</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Alles zu Einspeisung, Netzanschluss und Vergleich: 
                  Stadtwerke Detmold vs. eigene Photovoltaikanlage
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">12,47ct</div>
                  <div className="text-sm text-gray-600 font-medium">Einspeisevergütung</div>
                  <div className="text-xs text-gray-500 mt-1">Volleinspeisung bis 10 kWp</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-2">35ct+</div>
                  <div className="text-sm text-gray-600 font-medium">Stadtwerke Tarif</div>
                  <div className="text-xs text-gray-500 mt-1">Aktueller Strompreis</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-[#FE8800] mb-2">8-12ct</div>
                  <div className="text-sm text-gray-600 font-medium">Eigenproduktion</div>
                  <div className="text-xs text-gray-500 mt-1">Kosten pro kWh Solar</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-2">~75%</div>
                  <div className="text-sm text-gray-600 font-medium">Ersparnis möglich</div>
                  <div className="text-xs text-gray-500 mt-1">Durch Eigenverbrauch</div>
                </div>
              </div>

              {/* Soft CTA */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/kontakt" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <span>📧</span>
                    Kontakt zu Solarwelt-Lippe
                  </a>
                  <a href="tel:+4917657796989" className="border-2 border-gray-300 text-gray-700 hover:border-[#FE8800] hover:text-[#FE8800] font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <span>📞</span>
                    +49 1765 7796989
                  </a>
                </div>
                
                <div className="text-center">
                  <a href="/angebot" className="inline-flex items-center text-[#FE8800] hover:text-[#FE8800]/80 font-medium underline transition-colors">
                    Unverbindliches Angebot anfordern →
                  </a>
                </div>
                
                <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                  Kostenlose Beratung zu Photovoltaik und Stadtwerke Detmold. 
                  Solarwelt-Lippe berät Sie gerne zu Einspeisung und Netzanschluss.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Image
                    src="/5star.svg"
                    alt="5-Sterne-Bewertung Stadtwerke Detmold Photovoltaik"
                    width={80}
                    height={16}
                    style={{ height: '16px' }}
                    loading="lazy"
                  />
                  <span className="text-gray-600 font-medium">5.0 von 5 Sternen</span>
                </div>
                <div className="text-gray-400">•</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-medium">Viele Projekte in Detmold</span>
                  <Image
                    src="/googleFullLogo.svg"
                    alt="Google Bewertungen Solarwelt Lippe"
                    width={70}
                    height={34}
                    style={{ height: '34px' }}
                    loading="lazy"
                    className="opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich: Stadtwerke vs. Eigene Anlage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Stadtwerke Detmold vs. Eigene Photovoltaikanlage
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Vergleichen Sie die Kosten: Strom von Stadtwerke Detmold vs. eigene Solaranlage
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Stadtwerke Detmold */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Stadtwerke Detmold</h3>
                <p className="text-gray-600">Traditioneller Strombezug</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span>Strompreis:</span>
                  <span className="font-bold text-blue-700">~35-40 ct/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span>Jährliche Kosten (4.000 kWh):</span>
                  <span className="font-bold text-red-700">~1.500€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Preisentwicklung:</span>
                  <span className="font-bold text-gray-700">↗ Steigend</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span>Abhängigkeit:</span>
                  <span className="font-bold text-yellow-700">100% extern</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Vorteile:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Keine Investition nötig</li>
                  <li>• Wartungsfreier Strombezug</li>
                  <li>• Lokaler Ansprechpartner</li>
                </ul>
              </div>
            </div>

            {/* Eigene Photovoltaikanlage */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">☀️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Eigene Photovoltaikanlage</h3>
                <p className="text-gray-600">Unabhängige Stromerzeugung</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>Stromproduktion:</span>
                  <span className="font-bold text-green-700">~8-12 ct/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>Jährliche Ersparnis:</span>
                  <span className="font-bold text-green-700">~1.100€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span>Einspeisevergütung:</span>
                  <span className="font-bold text-blue-700">12,47 ct/kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span>Unabhängigkeit:</span>
                  <span className="font-bold text-purple-700">Bis 80%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Vorteile:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Langfristige Kostenersparnis</li>
                  <li>• Unabhängigkeit von Strompreisen</li>
                  <li>• Umweltfreundlich & nachhaltig</li>
                  <li>• Wertsteigerung der Immobilie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wirtschaftlichkeitsvergleich */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              20-Jahre Wirtschaftlichkeitsvergleich
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-600">Stadtwerke Detmold (20 Jahre)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Stromkosten (steigend):</span>
                    <span className="font-bold text-red-600">~35.000€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investition:</span>
                    <span className="font-bold">0€</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-red-600 font-bold text-lg">
                    <span>Gesamtkosten:</span>
                    <span>35.000€</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-green-600">Eigene Photovoltaikanlage</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Anschaffung + Installation:</span>
                    <span className="font-bold">20.000€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eingesparte Stromkosten:</span>
                    <span className="font-bold text-green-600">-22.000€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Einspeisevergütung (20J):</span>
                    <span className="font-bold text-green-600">-7.200€</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-green-600 font-bold text-lg">
                    <span>Gewinn nach 20 Jahren:</span>
                    <span>+9.200€</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#FE8800]/10 rounded-lg border-l-4 border-[#FE8800]">
              <h5 className="font-bold text-[#FE8800] text-lg mb-2">
                💡 Fazit: Photovoltaik vs. Stadtwerke Detmold
              </h5>
              <p className="text-gray-700">
                Eine eigene Photovoltaikanlage spart gegenüber dem Stadtwerke Detmold Tarif 
                <strong> über 44.000€ in 20 Jahren</strong> und macht Sie unabhängiger von steigenden Strompreisen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einspeisung bei Stadtwerke Detmold */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Einspeisung bei Stadtwerke Detmold: So funktioniert's
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alles Wichtige zu Netzanschluss, Anmeldung und Einspeisevergütung
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">1. Anmeldung</h3>
                <p className="text-gray-600">
                  Melden Sie Ihre Photovoltaikanlage vor Inbetriebnahme bei Stadtwerke Detmold an. 
                  Benötigte Unterlagen: Anmeldung zur Netzeinspeisung und technische Daten.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔌</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">2. Netzanschluss</h3>
                <p className="text-gray-600">
                  Stadtwerke Detmold installiert einen bidirektionalen Zähler für Ein- und Ausspeisung. 
                  Die Kosten variieren je nach Anlagengröße.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">3. Vergütung</h3>
                <p className="text-gray-600">
                  Erhalten Sie die gesetzliche EEG-Einspeisevergütung: 12,47 ct/kWh (Volleinspeisung) 
                  oder 7,86 ct/kWh (Teileinspeisung) für 20 Jahre.
                </p>
              </div>
            </div>

            {/* Detaillierte Informationen */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Benötigte Unterlagen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Anmeldung zur Netzeinspeisung</strong> (bei Stadtwerke Detmold)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Technische Daten</strong> der Photovoltaikanlage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Installationsnachweis</strong> vom Elektriker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Konformitätserklärung</strong> der Komponenten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Lageplan</strong> und Einliniendiagramm</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Einspeisevergütung 2025</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">Volleinspeisung</h4>
                    <div className="text-2xl font-bold text-green-600">12,47 ct/kWh</div>
                    <p className="text-sm text-gray-600">Gesamter Strom wird eingespeist</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">Teileinspeisung</h4>
                    <div className="text-2xl font-bold text-blue-600">7,86 ct/kWh</div>
                    <p className="text-sm text-gray-600">Nur Überschuss wird eingespeist</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>Hinweis:</strong> Vergütungssätze gelten für Inbetriebnahmen 
                      vom 1. August 2025 bis 31. Januar 2026.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Stadtwerke Detmold */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Häufige Fragen: Stadtwerke Detmold & Photovoltaik
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alle wichtigen Antworten zu Einspeisung, Netzanschluss und Vergütung
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Wie funktioniert die Einspeisung bei Stadtwerke Detmold?",
                answer: "Bei Stadtwerke Detmold erfolgt die Einspeisung von Photovoltaik-Strom über einen bidirektionalen Zähler. Sie erhalten die gesetzliche EEG-Einspeisevergütung von 12,47 ct/kWh (Volleinspeisung) oder 7,86 ct/kWh (Teileinspeisung) für Anlagen bis 10 kWp."
              },
              {
                question: "Was kostet der Netzanschluss bei Stadtwerke Detmold?",
                answer: "Der Netzanschluss für Photovoltaikanlagen bei Stadtwerke Detmold erfolgt nach den gesetzlichen Vorgaben. Die Kosten variieren je nach Anlagengröße und örtlichen Gegebenheiten. Kleinere Anlagen bis 10 kWp haben meist geringere Anschlusskosten."
              },
              {
                question: "Lohnt sich eine eigene Photovoltaikanlage vs. Stadtwerke Detmold Tarife?",
                answer: "Eine eigene Photovoltaikanlage ist meist wirtschaftlicher als Stadtwerke Detmold Stromtarife. Bei Stromkosten von über 35 ct/kWh und eigenen Erzeugungskosten von 8-12 ct/kWh sparen Sie erheblich durch Eigenverbrauch."
              },
              {
                question: "Welche Unterlagen brauche ich für die Anmeldung bei Stadtwerke Detmold?",
                answer: "Für die Anmeldung Ihrer Photovoltaikanlage bei Stadtwerke Detmold benötigen Sie: Anmeldung zur Netzeinspeisung, technische Daten der Anlage, Installationsnachweis und Konformitätserklärung des Installateurs."
              },
              {
                question: "Wie lange dauert die Anmeldung bei Stadtwerke Detmold?",
                answer: "Die Bearbeitung der Anmeldung bei Stadtwerke Detmold dauert in der Regel 2-4 Wochen. Bei größeren Anlagen über 10 kWp kann die Prüfung länger dauern. Eine frühzeitige Anmeldung wird empfohlen."
              },
              {
                question: "Kann ich meinen Stromtarif bei Stadtwerke Detmold mit Photovoltaik kombinieren?",
                answer: "Ja, Sie können weiterhin Kunde bei Stadtwerke Detmold bleiben und gleichzeitig Ihre Photovoltaikanlage betreiben. Für bezogenen Strom zahlen Sie den Tarif, für eingespeisten Strom erhalten Sie die Einspeisevergütung."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-blue-500 transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                Noch Fragen zu Stadtwerke Detmold & Photovoltaik?
              </h3>
              <p className="text-blue-700 mb-6">
                Solarwelt-Lippe berät Sie gerne zu allen Fragen rund um Photovoltaik und Stadtwerke Detmold
              </p>
              <a href="/kontakt" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                Kostenlose Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Photovoltaik in Detmold: Unabhängig von steigenden Strompreisen
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Während Stadtwerke Detmold Tarife steigen, produzieren Sie Ihren eigenen Strom für 8-12 ct/kWh. 
            Kostenlose Beratung von Solarwelt-Lippe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4917657796989" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📞 +49 1765 7796989
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📧 Kontakt zu Solarwelt-Lippe
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">35ct+</div>
              <div className="text-sm opacity-90">Stadtwerke Tarif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">8-12ct</div>
              <div className="text-sm opacity-90">Eigene Photovoltaik</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">75%</div>
              <div className="text-sm opacity-90">Mögliche Ersparnis</div>
            </div>
          </div>
        </div>
      </section>

      <LazyShow>
        <FooterHero />
      </LazyShow>
      
      <LazyShow>
        <>
          <Canvas />
          <LargeWithLogoCentered />
        </>
      </LazyShow>
    </>
  );
};

export default StadtwerkeDetmoldPhotovoltaik;