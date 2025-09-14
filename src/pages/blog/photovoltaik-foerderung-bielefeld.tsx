import React, { useEffect } from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2 from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';

const PhotovoltaikFoerderungBielefeld = () => {
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

  const pageTitle = 'Photovoltaik Förderung Bielefeld 2025 ▷ Alle Zuschüsse im Überblick | Solarwelt Lippe';
  const pageDescription = 'Photovoltaik Förderung Bielefeld 2025: KfW-Kredit 270, Stadtwerke Bielefeld Zuschüsse & NRW-Programme. ✓ Bis zu 15.000€ Förderung möglich ✓ Kostenlose Beratung';
  const pageUrl = 'https://www.solarwelt-lippe.de/blog/photovoltaik-foerderung-bielefeld';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/photovoltaik-foerderung-bielefeld-2025.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Photovoltaik Förderung Bielefeld 2025 – Alle Zuschüsse im Überblick",
    "description": pageDescription,
    "image": [imageUrl],
    "datePublished": "2025-09-14",
    "dateModified": "2025-09-14",
    "author": {
      "@type": "Organization",
      "name": "Solarwelt Lippe"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solarwelt Lippe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.solarwelt-lippe.de/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Photovoltaik Förderungen gibt es 2025 in Bielefeld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Bielefeld gibt es 2025 mehrere Förderungen: KfW-Kredit 270 ab 3,25% Zinsen, Stadtwerke Bielefeld Zuschüsse bis 1.500€, NRW progres.nrw-Programm und die EEG-Einspeisevergütung bis 12,47 ct/kWh. Insgesamt sind bis zu 15.000€ Förderung möglich."
        }
      },
      {
        "@type": "Question",
        "name": "Wie viel Förderung bekomme ich für eine 10 kWp Photovoltaikanlage in Bielefeld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für eine 10 kWp Photovoltaikanlage in Bielefeld können Sie bis zu 15.000€ Förderung erhalten: KfW-Kredit 270 (günstiger Zinssatz), Stadtwerke Bielefeld bis 1.500€, progres.nrw bis 3.000€ und jährlich ca. 400€ EEG-Einspeisevergütung über 20 Jahre."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="photovoltaik förderung bielefeld, stadtwerke bielefeld zuschuss, kfw kredit 270 bielefeld, progres nrw photovoltaik, solarförderung bielefeld 2025" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <Navbar2 />
      <WhatsAppPopup />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:text-blue-800">Startseite</a></li>
            <li><span className="text-gray-500">/</span></li>
            <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li>
            <li><span className="text-gray-500">/</span></li>
            <li><span className="text-gray-800">Photovoltaik Förderung Bielefeld</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200/30 to-yellow-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-green-200/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Aktuelle Photovoltaik Förderungen 2025 in Bielefeld
                </span>
              </div>
            </div>
            
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  <span className="block">Photovoltaik Förderung</span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#FE8800]">Bielefeld 2025</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FE8800]/20 -z-10 rounded"></span>
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-700">
                    Alle Zuschüsse im Überblick
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Nutzen Sie alle verfügbaren Förderungen in Bielefeld: KfW-Kredit, Stadtwerke-Zuschuss, 
                  NRW-Programme und EEG-Einspeisevergütung für maximale Ersparnis
                </p>
              </div>

              {/* Förder-Übersicht */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#FE8800] mb-2">Bis 15.000€</div>
                  <div className="text-sm text-gray-600 font-medium">Gesamt-Förderung</div>
                  <div className="text-xs text-gray-500 mt-1">alle Programme kombiniert</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">3,25%</div>
                  <div className="text-sm text-gray-600 font-medium">KfW-Kredit 270</div>
                  <div className="text-xs text-gray-500 mt-1">günstiger Zinssatz</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">1.500€</div>
                  <div className="text-sm text-gray-600 font-medium">Stadtwerke Bielefeld</div>
                  <div className="text-xs text-gray-500 mt-1">direkter Zuschuss</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">12,47ct</div>
                  <div className="text-sm text-gray-600 font-medium">EEG-Vergütung</div>
                  <div className="text-xs text-gray-500 mt-1">pro kWh, 20 Jahre</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/kontakt" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <span>💰</span>
                    Förder-Check für Bielefeld
                  </a>
                  <a href="tel:+4917657796989" className="border-2 border-gray-300 text-gray-700 hover:border-[#FE8800] hover:text-[#FE8800] font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <span>📞</span>
                    +49 1765 7796989
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alle Förderungen im Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Alle Photovoltaik Förderungen in Bielefeld 2025
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Kombinieren Sie geschickt alle verfügbaren Förderprogramme und maximieren Sie Ihre Ersparnis
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* KfW-Kredit 270 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">KfW-Kredit 270</h3>
                <p className="text-gray-600 text-sm">Bundesweite Förderung</p>
              </div>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Ab 3,25% Zinssatz</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Bis 150 Mio. €</strong> Kreditsumme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Speicher inklusive</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Antrag über <strong>Hausbank</strong></span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">Ersparnis</div>
                <div className="text-sm text-blue-800">vs. normaler Kredit</div>
                <div className="text-lg font-bold text-blue-600">~3.000€</div>
              </div>
            </div>

            {/* Stadtwerke Bielefeld */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Stadtwerke Bielefeld</h3>
                <p className="text-gray-600 text-sm">Lokaler Zuschuss</p>
              </div>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Bis 1.500€</strong> Zuschuss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>150€ pro kWp</strong> installiert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Speicher extra</strong> gefördert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Für <strong>Stromkunden</strong></span>
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">1.500€</div>
                <div className="text-sm text-green-800">direkter Zuschuss</div>
                <div className="text-lg font-bold text-green-600">10 kWp Anlage</div>
              </div>
            </div>

            {/* progres.nrw */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="text-center mb-6">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">progres.nrw</h3>
                <p className="text-gray-600 text-sm">NRW Landesprogramm</p>
              </div>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Bis 3.000€</strong> für Speicher</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>300€ pro kWh</strong> Speicher</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Begrenzte Mittel</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">!</span>
                  <span>Je nach <strong>Verfügbarkeit</strong></span>
                </li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">3.000€</div>
                <div className="text-sm text-purple-800">max. Speicher-Zuschuss</div>
                <div className="text-lg font-bold text-purple-600">10 kWh Speicher</div>
              </div>
            </div>

            {/* EEG-Einspeisevergütung */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2">EEG-Vergütung</h3>
                <p className="text-gray-600 text-sm">20 Jahre garantiert</p>
              </div>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>12,47 ct/kWh</strong> Volleinspeisung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>7,86 ct/kWh</strong> Teileinspeisung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>20 Jahre</strong> garantiert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Automatische</strong> Abnahme</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">~400€</div>
                <div className="text-sm text-orange-800">jährlich</div>
                <div className="text-lg font-bold text-orange-600">10 kWp Anlage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praxisbeispiel 10 kWp */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Praxisbeispiel: 10 kWp Photovoltaikanlage in Bielefeld
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            So viel Förderung ist bei einer typischen Photovoltaikanlage in Bielefeld möglich
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Linke Seite: Kosten */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Investitionskosten
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                    <span className="font-medium">10 kWp Photovoltaikanlage:</span>
                    <span className="font-bold text-lg">18.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                    <span className="font-medium">10 kWh Batteriespeicher:</span>
                    <span className="font-bold text-lg">8.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-100 rounded border-l-4 border-red-500">
                    <span className="font-bold text-lg">Gesamtkosten:</span>
                    <span className="font-bold text-2xl text-red-600">26.000€</span>
                  </div>
                </div>
              </div>

              {/* Rechte Seite: Förderungen */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Verfügbare Förderungen
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded border-l-4 border-blue-500">
                    <span>KfW-Kredit Zinsvorteil:</span>
                    <span className="font-bold text-blue-600">~3.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded border-l-4 border-green-500">
                    <span>Stadtwerke Bielefeld:</span>
                    <span className="font-bold text-green-600">1.500€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded border-l-4 border-purple-500">
                    <span>progres.nrw (Speicher):</span>
                    <span className="font-bold text-purple-600">3.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded border-l-4 border-orange-500">
                    <span>EEG-Vergütung (20 Jahre):</span>
                    <span className="font-bold text-orange-600">8.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-100 rounded border-l-4 border-green-600">
                    <span className="font-bold text-lg">Gesamt-Förderung:</span>
                    <span className="font-bold text-2xl text-green-600">15.500€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnis */}
            <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Ihr Vorteil in Bielefeld
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">26.000€</div>
                  <div className="text-gray-600">Investitionskosten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">-15.500€</div>
                  <div className="text-gray-600">Förderungen</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10.500€</div>
                  <div className="text-gray-600">Effektive Kosten</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-bold">
                  60% Förderanteil erreicht!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antragsverfahren */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            So beantragen Sie alle Förderungen in Bielefeld
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wichtige Fristen und Schritte für maximale Förderung
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Beratung und Angebot einholen",
                  description: "Lassen Sie sich kostenlos von Solarwelt-Lippe beraten. Wir prüfen alle verfügbaren Förderungen für Ihren Standort in Bielefeld und erstellen ein detailliertes Angebot.",
                  icon: "💡",
                  wichtig: "Noch keine Verträge abschließen!"
                },
                {
                  step: "2", 
                  title: "KfW-Antrag über Hausbank stellen",
                  description: "Beantragen Sie den KfW-Kredit 270 über Ihre Hausbank VOR Auftragsvergabe. Wir unterstützen Sie mit allen nötigen Unterlagen für den Antrag.",
                  icon: "🏦",
                  wichtig: "Antrag vor Vertragsabschluss!"
                },
                {
                  step: "3",
                  title: "Stadtwerke Bielefeld Antrag",
                  description: "Beantragen Sie parallel den Zuschuss der Stadtwerke Bielefeld. Als Stromkunde erhalten Sie bis zu 1.500€ direkten Zuschuss für Ihre Photovoltaikanlage.",
                  icon: "🏢",
                  wichtig: "Nur für Stromkunden möglich"
                },
                {
                  step: "4",
                  title: "progres.nrw prüfen",
                  description: "Prüfen Sie die Verfügbarkeit der NRW-Speicherförderung. Das Programm hat begrenzte Mittel und ist oft schnell ausgeschöpft.",
                  icon: "⚡",
                  wichtig: "Begrenzte Mittel - schnell sein!"
                },
                {
                  step: "5",
                  title: "Installation nach Zusagen",
                  description: "Nach allen Förderzusagen beauftragen Sie Solarwelt-Lippe mit der Installation. Wir kümmern uns um alle technischen Details und Anmeldungen bei Netzbetreiber und Bundesnetzagentur.",
                  icon: "🔧",
                  wichtig: "Professionelle Installation wichtig"
                },
                {
                  step: "6",
                  title: "Inbetriebnahme und Förderauszahlung",
                  description: "Nach Inbetriebnahme erhalten Sie automatisch die EEG-Einspeisevergütung. Die anderen Zuschüsse werden nach Vorlage der Rechnungen ausgezahlt.",
                  icon: "✅",
                  wichtig: "Alle Belege aufbewahren!"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-2">{item.description}</p>
                    <div className="bg-yellow-100 p-3 rounded border-l-4 border-yellow-500">
                      <span className="text-sm font-bold text-yellow-800">Wichtig: {item.wichtig}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Häufige Fragen: Photovoltaik Förderung Bielefeld 2025
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Welche Photovoltaik Förderungen gibt es 2025 in Bielefeld?",
                answer: "In Bielefeld gibt es 2025 mehrere Förderungen: KfW-Kredit 270 ab 3,25% Zinsen, Stadtwerke Bielefeld Zuschüsse bis 1.500€, NRW progres.nrw-Programm und die EEG-Einspeisevergütung bis 12,47 ct/kWh. Insgesamt sind bis zu 15.000€ Förderung möglich."
              },
              {
                question: "Wie viel Förderung bekomme ich für eine 10 kWp Photovoltaikanlage in Bielefeld?",
                answer: "Für eine 10 kWp Photovoltaikanlage in Bielefeld können Sie bis zu 15.000€ Förderung erhalten: KfW-Kredit 270 (günstiger Zinssatz), Stadtwerke Bielefeld bis 1.500€, progres.nrw bis 3.000€ und jährlich ca. 400€ EEG-Einspeisevergütung über 20 Jahre."
              },
              {
                question: "Kann ich alle Förderungen in Bielefeld kombinieren?",
                answer: "Ja, die meisten Förderungen sind kombinierbar: KfW-Kredit + Stadtwerke Bielefeld + progres.nrw + EEG-Einspeisevergütung. Nur bei wenigen Programmen gibt es Ausschlussklauseln. Wir prüfen für Sie die optimale Kombination."
              },
              {
                question: "Wann muss ich die Förderanträge in Bielefeld stellen?",
                answer: "KfW-Antrag: VOR Auftragsvergabe über Hausbank. Stadtwerke Bielefeld: vor oder nach Installation möglich. progres.nrw: vor Kauf, Mittel oft schnell erschöpft. EEG-Einspeisevergütung: automatisch nach Inbetriebnahme."
              },
              {
                question: "Gibt es eine Obergrenze für die Gesamtförderung in Bielefeld?",
                answer: "Nein, es gibt keine einheitliche Obergrenze. Jedes Programm hat eigene Limits: KfW bis 150 Mio.€, Stadtwerke bis 1.500€, progres.nrw bis 3.000€ für Speicher. Die EEG-Vergütung läuft 20 Jahre."
              },
              {
                question: "Was passiert, wenn progres.nrw ausgeschöpft ist?",
                answer: "Das progres.nrw-Programm hat begrenzte Mittel und ist oft schnell ausgeschöpft. Dann entfällt diese Förderung, aber KfW-Kredit, Stadtwerke-Zuschuss und EEG-Vergütung bleiben verfügbar. Trotzdem lohnt sich die Photovoltaikanlage."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-orange-500 transform transition-transform group-open:rotate-180">▼</span>
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
                Noch Fragen zu Förderungen in Bielefeld?
              </h3>
              <p className="text-blue-700 mb-6">
                Solarwelt-Lippe berät Sie kostenlos zu allen verfügbaren Förderprogrammen in Bielefeld
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                <a href="/kontakt" className="block">Kostenlose Förder-Beratung</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt alle Förderungen in Bielefeld sichern!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Maximieren Sie Ihre Photovoltaik-Förderung in Bielefeld: KfW-Kredit, Stadtwerke-Zuschuss, 
            progres.nrw und EEG-Vergütung optimal kombinieren. Bis zu 15.000€ Förderung möglich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+4917657796989" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📞 +49 1765 7796989
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              💰 Unverbindliches Angebot anfordern
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">15.000€</div>
              <div className="text-sm opacity-90">Gesamt-Förderung möglich</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3,25%</div>
              <div className="text-sm opacity-90">KfW-Kredit ab</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1.500€</div>
              <div className="text-sm opacity-90">Stadtwerke Zuschuss</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm opacity-90">Jahre EEG-Vergütung</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              <strong>Fazit:</strong> Verpassen Sie keine Förderung - jetzt unverbindlich Angebot bei Solarwelt-Lippe anfragen!
            </p>
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

export default PhotovoltaikFoerderungBielefeld;