import React, { useEffect } from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2 from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';
import Image from 'next/image';

const FoerderungPhotovoltaikDetmold = () => {
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

  const pageTitle = 'Photovoltaik Förderung Detmold 2025 ▷ KfW-Kredit 270 & Einspeisevergütung | Solarwelt Lippe';
  const pageDescription = 'Photovoltaik Förderung Detmold 2025: KfW-Kredit 270 ab 3,76% Zinsen & EEG-Einspeisevergütung bis 12,60 ct/kWh. Kostenlose Beratung für Ihre Solaranlage in Detmold.';
  const pageUrl = 'https://www.solarwelt-lippe.de/foerderung-photovoltaik-detmold';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/photovoltaik-foerderung-detmold-2025.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solarwelt Lippe - Photovoltaik Förderung Detmold",
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
      "Photovoltaik Förderberatung",
      "KfW-Kredit 270 Beratung",
      "Solaranlage Installation"
    ],
    "description": "Professionelle Photovoltaik Förderberatung in Detmold. KfW-Kredit 270 und EEG-Einspeisevergütung optimal nutzen für Ihre Solaranlage.",
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
      "reviewCount": "147",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Photovoltaik Förderungen gibt es 2025 in Detmold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Detmold gibt es 2025 den KfW-Kredit 270 für Photovoltaikanlagen mit vergünstigten Zinsen ab 3,76% sowie die EEG-Einspeisevergütung von bis zu 12,60 ct/kWh für eingespeisten Solarstrom. Zusätzlich können kommunale Förderprogramme genutzt werden."
        }
      },
      {
        "@type": "Question", 
        "name": "Wie funktioniert der KfW-Kredit 270 für Photovoltaik in Detmold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der KfW-Kredit 270 finanziert Photovoltaikanlagen bis 150 Millionen Euro pro Vorhaben mit vergünstigten Zinsen ab 3,76%. Der Antrag erfolgt über die Hausbank vor Projektbeginn. Gefördert werden auch Batteriespeicher, Planung und Installation."
        }
      },
      {
        "@type": "Question",
        "name": "Wie hoch ist die Einspeisevergütung für Photovoltaik in Detmold 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die EEG-Einspeisevergütung in Detmold beträgt 2025 für Anlagen bis 10 kWp: 7,94 ct/kWh bei Teileinspeisung und 12,60 ct/kWh bei Volleinspeisung. Die Vergütung ist 20 Jahre garantiert ab Inbetriebnahme."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich KfW-Kredit und Einspeisevergütung kombinieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, der KfW-Kredit 270 und die EEG-Einspeisevergütung sind kombinierbar. Zusätzlich können kommunale Förderprogramme in Detmold genutzt werden. Die Kombination verschiedener Förderungen ist ausdrücklich erlaubt."
        }
      },
      {
        "@type": "Question",
        "name": "Wer kann Photovoltaik Förderung in Detmold beantragen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Den KfW-Kredit 270 können Privatpersonen, Unternehmen und öffentliche Einrichtungen beantragen. Voraussetzung ist, dass mindestens ein Teil des erzeugten Stroms eingespeist wird. Ein Einspeisevertrag ist nicht erforderlich."
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
        "name": "Photovoltaik Förderung",
        "item": "https://www.solarwelt-lippe.de/photovoltaik-foerderung"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Photovoltaik Förderung Detmold",
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="photovoltaik förderung detmold, kfw kredit 270 detmold, einspeisevergütung photovoltaik detmold, solaranlage förderung detmold, photovoltaikanlage detmold förderung, kfw förderung photovoltaik detmold, eeg förderung detmold, solarförderung detmold" />
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
        <link rel="dns-prefetch" href="//www.kfw.de" />
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
            <li><a href="/photovoltaik-foerderung" className="text-blue-600 hover:text-blue-800">Photovoltaik Förderung</a></li>
            <li><span className="text-gray-500">/</span></li>
            <li><span className="text-gray-800 font-medium">Detmold</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-orange-400/10 to-yellow-400/10 blur-2xl"></div>
        </div>

        {/* Solar Panel Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({length: 120}).map((_, i) => (
              <div key={i} className="bg-white/20 rounded-sm"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[85vh]">
            
            {/* Content Section */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/40 shadow-lg">
                <span className="text-yellow-300 font-bold text-sm flex items-center gap-2">
                  <span className="animate-bounce">⚡</span>
                  Photovoltaik Förderung 2025 in Detmold verfügbar
                </span>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Photovoltaik
                  </span>
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Förderung
                    </span>
                    <span className="absolute bottom-2 left-0 w-full h-6 bg-gradient-to-r from-orange-500 to-yellow-500 -z-10 transform -skew-y-1 rounded"></span>
                  </span>
                  <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Detmold
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  2025
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                <span className="font-semibold text-yellow-300">KfW-Kredit 270</span> ab 3,76% Zinsen & 
                <span className="font-semibold text-green-300"> EEG-Einspeisevergütung</span> bis 12,60 ct/kWh
                <br/>
                <span className="text-orange-300 font-bold">Jetzt optimale Förderung sichern!</span>
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-3xl font-black text-yellow-300 group-hover:scale-110 transition-transform">3,76%</div>
                  <div className="text-sm text-blue-200 font-medium">KfW-Kredit Zinsen ab</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-3xl font-black text-green-300 group-hover:scale-110 transition-transform">12,60ct</div>
                  <div className="text-sm text-blue-200 font-medium">Einspeisevergütung/kWh</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-3xl font-black text-orange-300 group-hover:scale-110 transition-transform">20 Jahre</div>
                  <div className="text-sm text-blue-200 font-medium">Vergütungsgarantie</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2">
                  <span>🎯</span>
                  KfW-Förderung Detmold beantragen
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold py-5 px-6 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  <span>📊</span>
                  Einspeisevergütung berechnen
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/5star.svg"
                    alt="5-Sterne-Bewertung Photovoltaik Förderung Detmold"
                    width={100}
                    height={20}
                    style={{ height: '20px' }}
                    loading="lazy"
                    className="filter brightness-0 invert"
                  />
                  <span className="text-blue-200 font-medium">5.0 von 5 Sternen</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-200">•</span>
                  <span className="text-blue-200 font-medium">147+ zufriedene Kunden</span>
                  <Image
                    src="/googleFullLogo.svg"
                    alt="Google Bewertungen"
                    width={80}
                    height={30}
                    style={{ height: '30px' }}
                    loading="lazy"
                    className="filter brightness-0 invert opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="flex-1 relative max-w-lg lg:max-w-none">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Förder-Rechner Detmold</h3>
                    <p className="text-gray-600">Berechnen Sie Ihre Ersparnis</p>
                  </div>
                  
                  {/* Calculator Display */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">10 kWp Anlage:</span>
                        <span className="text-2xl font-bold text-gray-800">20.000€</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700 font-medium">KfW-Kredit (3,76%):</span>
                        <span className="text-2xl font-bold text-green-600">-750€/Jahr</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-700 font-medium">Jährliche Ersparnis:</span>
                        <span className="text-2xl font-bold text-orange-600">+2.800€</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-700 font-bold">Netto-Vorteil/Jahr:</span>
                        <span className="text-3xl font-black text-purple-600">+2.050€</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Elements */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">☀️</div>
                      <div className="text-sm font-medium text-gray-700">Solarenergie</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">💰</div>
                      <div className="text-sm font-medium text-gray-700">KfW-Förderung</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  🎯 Förderung verfügbar!
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{animationDelay: '0.5s'}}>
                  ⚡ Bis 20 Jahre garantiert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelle Förderungen 2025 - Nur KfW und EEG */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Photovoltaik Förderung Detmold 2025: KfW & EEG
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nutzen Sie die staatlichen Förderprogramme: KfW-Kredit 270 für vergünstigte Finanzierung 
            und EEG-Einspeisevergütung für garantierte Erlöse über 20 Jahre.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* KfW-Kredit 270 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">KfW-Kredit 270</h3>
                <p className="text-gray-600">Erneuerbare Energien – Standard</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Ab 3,76% eff. Jahreszins</strong> (Stand 2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Bis 150 Mio. €</strong> pro Vorhaben</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Mindestlaufzeit 2 Jahre</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Batteriespeicher</strong> förderfähig</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Antrag über <strong>Hausbank</strong></span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Wichtig:</strong> Antrag vor Vorhabenbeginn stellen. Planung, Projektierung und Installation sind förderfähig.
                </p>
              </div>
            </div>

            {/* EEG-Einspeisevergütung */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">EEG-Einspeisevergütung</h3>
                <p className="text-gray-600">Garantierte Vergütung für Solarstrom</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>12,60 ct/kWh</strong> Volleinspeisung (bis 10 kWp)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>7,94 ct/kWh</strong> Teileinspeisung (bis 10 kWp)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>20 Jahre</strong> garantierte Vergütung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Kombinierbar</strong> mit KfW-Kredit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automatische <strong>Netzbetreiber-Abnahme</strong></span>
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Hinweis:</strong> Fördersätze sinken alle 6 Monate um 1%. Nach Inbetriebnahme bleiben sie 20 Jahre konstant.
                </p>
              </div>
            </div>
          </div>

          {/* Förder-Kombination Beispiel */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Förder-Kombination für Detmold: KfW-Kredit + Einspeisevergütung
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-4">Beispiel: 10 kWp Photovoltaikanlage</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Anschaffungskosten:</span>
                    <span className="font-bold">20.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <span>KfW-Kredit 270 (3,76% Zins):</span>
                    <span className="font-bold text-blue-600">20.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <span>Jährliche Einspeisevergütung:</span>
                    <span className="font-bold text-green-600">~400€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <span>Jährliche Stromersparnis:</span>
                    <span className="font-bold text-yellow-600">~2.400€</span>
                  </div>
                  <hr className="border-gray-300 my-4" />
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded border-l-4 border-orange-500">
                    <span className="font-bold text-lg">Jährlicher Gesamtvorteil:</span>
                    <span className="font-bold text-2xl text-orange-600">~2.800€</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                <h5 className="font-bold text-lg mb-4 text-gray-800">Ihre Vorteile in Detmold:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📍</span>
                    <span>Lokaler KfW-Experte vor Ort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">⚡</span>
                    <span>20 Jahre garantierte Einspeisevergütung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">💰</span>
                    <span>Günstige KfW-Finanzierung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">🏆</span>
                    <span>Kostenlose Förderberatung</span>
                  </li>
                </ul>
                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Förderberatung Detmold anfragen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Photovoltaik Förderung in Detmold */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Warum sich Photovoltaik Förderung in Detmold 2025 lohnt
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Detmold bietet optimale Bedingungen für Photovoltaikanlagen: 
              Hohe Sonneneinstrahlung, günstige KfW-Finanzierung und garantierte EEG-Einspeisevergütung.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Detmold: Ideale Bedingungen für geförderte Solaranlagen
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Optimale Sonneneinstrahlung</h4>
                      <p className="text-gray-600">
                        Detmold erreicht ca. 1.200 kWh/m² jährliche Globalstrahlung. 
                        Mit KfW-Kredit 270 ab 3,76% Zinsen ist die Finanzierung besonders attraktiv.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🏘️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Geeignete Dachflächen</h4>
                      <p className="text-gray-600">
                        Viele Einfamilienhäuser in Detmold bieten ideale Dachflächen für Photovoltaikanlagen. 
                        Die EEG-Einspeisevergütung bis 12,60 ct/kWh macht jede kWh wertvoll.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Hohe Strompreise - Maximale Ersparnis</h4>
                      <p className="text-gray-600">
                        Bei Stromkosten von über 35 Cent/kWh in Detmold sparen Sie mit 
                        Eigenverbrauch erheblich. Überschüssiger Strom wird vergütet eingespeist.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Kombination von Förderungen möglich</h4>
                      <p className="text-gray-600">
                        KfW-Kredit 270 und EEG-Einspeisevergütung sind kombinierbar. 
                        Zusätzlich können kommunale Förderprogramme in Detmold genutzt werden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6 text-center text-gray-800">
                  Wirtschaftlichkeit in Detmold (10 kWp Beispiel)
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Investition:</span>
                      <span className="font-bold text-lg">20.000€</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Finanziert über KfW-Kredit 270
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded">
                      <span>Einspeisevergütung/Jahr:</span>
                      <span className="font-bold text-green-700">~400€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
                      <span>Stromkostenersparnis/Jahr:</span>
                      <span className="font-bold text-blue-700">~2.400€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-100 rounded">
                      <span>KfW-Kreditzinsen/Jahr:</span>
                      <span className="font-bold text-red-700">~750€</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Netto-Vorteil/Jahr:</span>
                      <span className="font-bold text-2xl text-orange-700">~2.050€</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                        Amortisation in ca. 10 Jahren
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-bold text-gray-800 mb-2">20-Jahre-Bilanz:</h5>
                    <div className="flex justify-between">
                      <span>Gesamterlöse:</span>
                      <span className="font-bold text-green-600">~56.000€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investition + Zinsen:</span>
                      <span className="font-bold text-red-600">~35.000€</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-bold text-lg border-t pt-2">
                      <span>Gewinn nach 20 Jahren:</span>
                      <span>~21.000€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KfW-Antragsprozess */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            KfW-Kredit 270 beantragen in Detmold: So geht's
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Schritt-für-Schritt Anleitung zum KfW-Kredit 270 für Ihre Photovoltaikanlage in Detmold
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Planung und Kostenvoranschlag",
                  description: "Lassen Sie sich von einem Fachbetrieb beraten und erstellen Sie einen detaillierten Kostenvoranschlag für Ihre Photovoltaikanlage in Detmold. Wichtig: Noch keine verbindlichen Verträge abschließen!",
                  icon: "📋",
                  color: "blue"
                },
                {
                  step: "2", 
                  title: "Hausbank kontaktieren",
                  description: "Kontaktieren Sie Ihre Hausbank und informieren Sie sich über den KfW-Kredit 270. Nicht alle Banken bieten KfW-Kredite an - vergleichen Sie daher verschiedene Finanzierungspartner in Detmold.",
                  icon: "🏦",
                  color: "green"
                },
                {
                  step: "3",
                  title: "KfW-Antrag stellen",
                  description: "Stellen Sie den Antrag für den KfW-Kredit 270 über Ihre Bank VOR Vorhabenbeginn. Die Bank prüft Ihre Bonität und leitet den Antrag an die KfW weiter.",
                  icon: "📝",
                  color: "yellow"
                },
                {
                  step: "4",
                  title: "Zusage abwarten",
                  description: "Nach positiver Prüfung erhalten Sie die KfW-Zusage. Erst jetzt können Sie verbindliche Verträge für Ihre Photovoltaikanlage in Detmold abschließen.",
                  icon: "✅",
                  color: "purple"
                },
                {
                  step: "5",
                  title: "Installation durchführen",
                  description: "Beauftragen Sie die Installation Ihrer Photovoltaikanlage. Achten Sie darauf, dass alle Unterlagen für die spätere Einspeisevergütung vollständig sind.",
                  icon: "🔧",
                  color: "orange"
                },
                {
                  step: "6",
                  title: "Inbetriebnahme und EEG-Anmeldung",
                  description: "Nach Inbetriebnahme melden Sie Ihre Anlage beim Netzbetreiber an und erhalten die garantierte EEG-Einspeisevergütung für 20 Jahre.",
                  icon: "⚡",
                  color: "red"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`bg-${item.color}-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm`}>
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Nur zu KfW und EEG */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Häufige Fragen: Photovoltaik Förderung Detmold 2025
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alle wichtigen Antworten zu KfW-Kredit 270 und EEG-Einspeisevergütung für Ihre Photovoltaikanlage in Detmold
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Welche Photovoltaik Förderungen gibt es 2025 in Detmold?",
                answer: "In Detmold gibt es 2025 den KfW-Kredit 270 für Photovoltaikanlagen mit vergünstigten Zinsen ab 3,76% sowie die EEG-Einspeisevergütung von bis zu 12,60 ct/kWh für eingespeisten Solarstrom. Zusätzlich können kommunale Förderprogramme genutzt werden."
              },
              {
                question: "Wie funktioniert der KfW-Kredit 270 für Photovoltaik in Detmold?",
                answer: "Der KfW-Kredit 270 finanziert Photovoltaikanlagen bis 150 Millionen Euro pro Vorhaben mit vergünstigten Zinsen ab 3,76%. Der Antrag erfolgt über die Hausbank vor Projektbeginn. Gefördert werden auch Batteriespeicher, Planung und Installation."
              },
              {
                question: "Wie hoch ist die Einspeisevergütung für Photovoltaik in Detmold 2025?",
                answer: "Die EEG-Einspeisevergütung in Detmold beträgt 2025 für Anlagen bis 10 kWp: 7,94 ct/kWh bei Teileinspeisung und 12,60 ct/kWh bei Volleinspeisung. Die Vergütung ist 20 Jahre garantiert ab Inbetriebnahme."
              },
              {
                question: "Kann ich KfW-Kredit und Einspeisevergütung kombinieren?",
                answer: "Ja, der KfW-Kredit 270 und die EEG-Einspeisevergütung sind kombinierbar. Zusätzlich können kommunale Förderprogramme in Detmold genutzt werden. Die Kombination verschiedener Förderungen ist ausdrücklich erlaubt."
              },
              {
                question: "Wer kann Photovoltaik Förderung in Detmold beantragen?",
                answer: "Den KfW-Kredit 270 können Privatpersonen, Unternehmen und öffentliche Einrichtungen beantragen. Voraussetzung ist, dass mindestens ein Teil des erzeugten Stroms eingespeist wird. Ein Einspeisevertrag ist nicht erforderlich."
              },
              {
                question: "Wann muss ich den KfW-Antrag für Photovoltaik in Detmold stellen?",
                answer: "Der KfW-Antrag muss VOR Vorhabenbeginn gestellt werden - also bevor Sie einen rechtlich bindenden Kaufvertrag abschließen. Eine Beantragung nach Projektstart ist nicht möglich. Planungsaufträge können vorab vergeben werden."
              },
              {
                question: "Werden auch Batteriespeicher vom KfW-Kredit 270 gefördert?",
                answer: "Ja, Batteriespeicher sind im KfW-Kredit 270 förderfähig. Neben der Anschaffung werden auch Planung, Projektierung und Installation des Speichers finanziert. Die Zinsen gelten für das gesamte Photovoltaik-System."
              },
              {
                question: "Wie lange ist die EEG-Einspeisevergütung in Detmold garantiert?",
                answer: "Die EEG-Einspeisevergütung ist ab Inbetriebnahme für 20 Jahre garantiert. Die Höhe richtet sich nach dem Inbetriebnahme-Datum und bleibt über die gesamte Laufzeit konstant. Danach können Sie weiterhin einspeisen, erhalten aber nur den Marktpreis."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow group">
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
                Noch Fragen zur Photovoltaik Förderung in Detmold?
              </h3>
              <p className="text-blue-700 mb-6">
                Unsere Experten beraten Sie kostenlos zu KfW-Kredit 270 und EEG-Einspeisevergütung
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Kostenlose Förderberatung anfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Photovoltaik Förderung in Detmold sichern!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nutzen Sie KfW-Kredit 270 ab 3,76% Zinsen und EEG-Einspeisevergütung bis 12,60 ct/kWh. 
            Kostenlose Beratung für Ihre Solaranlage in Detmold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              📞 Sofort-Beratung Detmold
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors">
              📧 Förder-Info anfordern
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">3,76%</div>
              <div className="text-sm opacity-90">KfW-Kredit ab</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12,60 ct</div>
              <div className="text-sm opacity-90">Einspeisevergütung/kWh</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">20 Jahre</div>
              <div className="text-sm opacity-90">Vergütungsgarantie</div>
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

export default FoerderungPhotovoltaikDetmold;