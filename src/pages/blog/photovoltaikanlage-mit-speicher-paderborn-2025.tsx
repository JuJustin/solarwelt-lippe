import React, { useEffect } from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2 from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';

const PhotovoltaikSpeicherPaderborn = () => {
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

  const pageTitle = 'Photovoltaikanlage mit Speicher Paderborn 2025 ▷ Lohnt sich das? | Solarwelt Lippe';
  const pageDescription = 'Photovoltaikanlage mit Speicher in Paderborn 2025: Kosten, Förderung, Wirtschaftlichkeit & Amortisation. ✓ KfW-Kredit 270 ✓ Unabhängigkeit ✓ Kostenlose Beratung';
  const pageUrl = 'https://www.solarwelt-lippe.de/photovoltaikanlage-speicher-paderborn-2025';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/photovoltaikanlage-speicher-paderborn-2025.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Photovoltaikanlage mit Speicher in Paderborn – Lohnt sich das 2025?",
    "description": pageDescription,
    "image": [imageUrl],
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
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
        "name": "Lohnt sich eine Photovoltaikanlage mit Speicher in Paderborn 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, eine Photovoltaikanlage mit Speicher lohnt sich in Paderborn 2025 definitiv. Bei Stromkosten von über 35 ct/kWh und deutlich gesunkenen Speicherpreisen amortisiert sich die Anlage in 7-10 Jahren. Der Eigenverbrauchsanteil steigt von 30% auf bis zu 70% mit Speicher."
        }
      },
      {
        "@type": "Question", 
        "name": "Was kostet eine Photovoltaikanlage mit Speicher in Paderborn 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine 10 kWp Photovoltaikanlage mit 10 kWh Batteriespeicher kostet in Paderborn etwa 15.000-20.000€. Die Kosten variieren je nach Hersteller, Dachbeschaffenheit und gewähltem Speichersystem. KfW-Kredite ab 3,25% sind verfügbar."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <Navbar2 />
      <WhatsAppPopup />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                <span className="block">Photovoltaikanlage mit</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FE8800]">Speicher Paderborn</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FE8800]/20 -z-10 rounded"></span>
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-700">Lohnt sich das 2025?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Kosten, Förderung, Wirtschaftlichkeit und Amortisation von Photovoltaikanlagen 
                mit Batteriespeicher in Paderborn im Detail erklärt
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">60-80%</div>
                  <div className="text-sm text-gray-600 font-medium">Eigenverbrauch</div>
                  <div className="text-xs text-gray-500 mt-1">mit Batteriespeicher</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">7-10</div>
                  <div className="text-sm text-gray-600 font-medium">Jahre</div>
                  <div className="text-xs text-gray-500 mt-1">Amortisationszeit</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#FE8800] mb-2">3,25%</div>
                  <div className="text-sm text-gray-600 font-medium">KfW-Kredit</div>
                  <div className="text-xs text-gray-500 mt-1">für PV + Speicher</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">20</div>
                  <div className="text-sm text-gray-600 font-medium">Jahre</div>
                  <div className="text-xs text-gray-500 mt-1">Speicher Lebensdauer</div>
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antwort: Ja, es lohnt sich! */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 px-6 py-3 rounded-full border border-green-200 shadow-sm mb-6">
                <span className="text-green-700 font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Die Antwort: JA, es lohnt sich definitiv!
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Warum sich Photovoltaik mit Speicher in Paderborn 2025 lohnt
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Die wichtigsten Argumente für PV + Speicher in Paderborn:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Hohe Strompreise nutzen</h4>
                      <p className="text-gray-600">
                        Bei über 35 ct/kWh in Paderborn sparen Sie mit jeder selbst genutzten kWh bares Geld. 
                        Ein Speicher erhöht Ihren Eigenverbrauch von 30% auf bis zu 70%.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🔋</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Unabhängigkeit vom Stromversorger</h4>
                      <p className="text-gray-600">
                        Mit Photovoltaik und Speicher werden Sie zu 60-80% unabhängig vom Stromnetz. 
                        Stromausfälle und Preiserhöhungen können Ihnen weniger anhaben.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6 text-center text-gray-800">
                  Wirtschaftlichkeit: 10 kWp PV + 10 kWh Speicher in Paderborn
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Gesamtinvestition:</span>
                      <span className="font-bold text-lg">18.000€</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      PV-Anlage 12.000€ + Speicher 6.000€
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded">
                      <span>Stromkostenersparnis/Jahr:</span>
                      <span className="font-bold text-green-700">~2.100€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
                      <span>Einspeisevergütung/Jahr:</span>
                      <span className="font-bold text-blue-700">~300€</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Jährlicher Vorteil:</span>
                      <span className="font-bold text-2xl text-orange-700">~2.400€</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                        Amortisation in ca. 7,5 Jahren
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-bold text-gray-800 mb-2">20-Jahre-Bilanz:</h5>
                    <div className="flex justify-between">
                      <span>Gesamtersparnisse:</span>
                      <span className="font-bold text-green-600">~48.000€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investition:</span>
                      <span className="font-bold text-red-600">~18.000€</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-bold text-lg border-t pt-2">
                      <span>Gewinn nach 20 Jahren:</span>
                      <span>~30.000€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kosten und Preise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Kosten für Photovoltaikanlage mit Speicher in Paderborn 2025
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Aktuelle Preise und Kostenübersicht für verschiedene Anlagengrößen mit Batteriespeicher in Paderborn
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Klein: 6 kWp + 6 kWh */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Kompakt</h3>
                <p className="text-gray-600">Kleine Häuser, 2-3 Personen</p>
                <div className="text-3xl font-bold text-gray-800 mt-4">14.000€</div>
                <div className="text-sm text-gray-500">inkl. Installation & MwSt.</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>PV-Anlage:</span>
                  <span className="font-bold">6 kWp</span>
                </div>
                <div className="flex justify-between">
                  <span>Batteriespeicher:</span>
                  <span className="font-bold">6 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Eigenverbrauch:</span>
                  <span className="font-bold text-green-600">~65%</span>
                </div>
                <div className="flex justify-between">
                  <span>Jährliche Ersparnis:</span>
                  <span className="font-bold text-green-600">~1.800€</span>
                </div>
                <div className="flex justify-between">
                  <span>Amortisation:</span>
                  <span className="font-bold">~8 Jahre</span>
                </div>
              </div>
            </div>

            {/* Mittel: 10 kWp + 10 kWh */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">BELIEBT</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Standard</h3>
                <p className="text-gray-600">Typische Einfamilienhäuser, 3-4 Personen</p>
                <div className="text-3xl font-bold text-gray-800 mt-4">18.000€</div>
                <div className="text-sm text-gray-500">inkl. Installation & MwSt.</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>PV-Anlage:</span>
                  <span className="font-bold">10 kWp</span>
                </div>
                <div className="flex justify-between">
                  <span>Batteriespeicher:</span>
                  <span className="font-bold">10 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Eigenverbrauch:</span>
                  <span className="font-bold text-green-600">~70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Jährliche Ersparnis:</span>
                  <span className="font-bold text-green-600">~2.400€</span>
                </div>
                <div className="flex justify-between">
                  <span>Amortisation:</span>
                  <span className="font-bold">~7,5 Jahre</span>
                </div>
              </div>
            </div>

            {/* Groß: 15 kWp + 15 kWh */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Premium</h3>
                <p className="text-gray-600">Große Häuser, 4+ Personen</p>
                <div className="text-3xl font-bold text-gray-800 mt-4">26.000€</div>
                <div className="text-sm text-gray-500">inkl. Installation & MwSt.</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>PV-Anlage:</span>
                  <span className="font-bold">15 kWp</span>
                </div>
                <div className="flex justify-between">
                  <span>Batteriespeicher:</span>
                  <span className="font-bold">15 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Eigenverbrauch:</span>
                  <span className="font-bold text-green-600">~75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Jährliche Ersparnis:</span>
                  <span className="font-bold text-green-600">~4.800€</span>
                </div>
                <div className="flex justify-between">
                  <span>Amortisation:</span>
                  <span className="font-bold">~5,5 Jahre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Häufige Fragen: Photovoltaik mit Speicher in Paderborn
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Lohnt sich eine Photovoltaikanlage mit Speicher in Paderborn 2025?",
                answer: "Ja, eine Photovoltaikanlage mit Speicher lohnt sich in Paderborn 2025 definitiv. Bei Stromkosten von über 35 ct/kWh und deutlich gesunkenen Speicherpreisen amortisiert sich die Anlage in 7-10 Jahren. Der Eigenverbrauchsanteil steigt von 30% auf bis zu 70% mit Speicher."
              },
              {
                question: "Was kostet eine Photovoltaikanlage mit Speicher in Paderborn 2025?",
                answer: "Eine 10 kWp Photovoltaikanlage mit 10 kWh Batteriespeicher kostet in Paderborn etwa 15.000-20.000€. Die Kosten variieren je nach Hersteller, Dachbeschaffenheit und gewähltem Speichersystem. KfW-Kredite ab 3,25% sind verfügbar."
              },
              {
                question: "Welche Förderung gibt es für Photovoltaik mit Speicher in Paderborn?",
                answer: "In Paderborn gibt es den KfW-Kredit 270 ab 3,25% Zinsen für Photovoltaik und Speicher. Zusätzlich erhalten Sie die EEG-Einspeisevergütung von 7,86 ct/kWh (Teileinspeisung) bzw. 12,47 ct/kWh (Volleinspeisung) für 20 Jahre."
              },
              {
                question: "Wie viel Strom kann ich mit einem Batteriespeicher in Paderborn selbst nutzen?",
                answer: "Mit einem richtig dimensionierten Batteriespeicher können Sie in Paderborn 60-80% Ihres Strombedarfs selbst decken. Ohne Speicher liegt der Eigenverbrauch nur bei 25-35%. Ein 10 kWh Speicher reicht für einen 4-Personen-Haushalt meist aus."
              },
              {
                question: "Wie lange hält ein Batteriespeicher für Photovoltaik in Paderborn?",
                answer: "Moderne Lithium-Ionen-Batteriespeicher halten in Paderborn 15-20 Jahre oder 6.000-8.000 Ladezyklen. Die meisten Hersteller geben 10-15 Jahre Garantie mit mindestens 70-80% Restkapazität. Hochwertige Speicher erreichen oft 25 Jahre Lebensdauer."
              },
              {
                question: "Welche Speichergröße ist für mein Haus in Paderborn optimal?",
                answer: "Die optimale Speichergröße richtet sich nach Ihrem Stromverbrauch: 1-2 Personen: 4-6 kWh, 3-4 Personen: 8-12 kWh, 5+ Personen: 12-16 kWh. Als Faustregel gilt: 1 kWh Speicher pro 1.000 kWh Jahresverbrauch."
              },
              {
                question: "Kann ich bei Stromausfall weiterhin Strom nutzen mit Batteriespeicher?",
                answer: "Ja, viele moderne Batteriespeicher bieten eine Notstromfunktion. Bei Stromausfall werden automatisch wichtige Verbraucher weiterversorgt. Die Notstromkapazität hängt von der Speichergröße und den angeschlossenen Verbrauchern ab."
              },
              {
                question: "Wie wartungsintensiv ist eine Photovoltaikanlage mit Speicher?",
                answer: "Photovoltaikanlagen mit Speicher sind sehr wartungsarm. Wir empfehlen eine jährliche Sichtprüfung und alle 3-5 Jahre eine professionelle Wartung. Moderne Speicher überwachen sich selbst und melden Probleme automatisch."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#FE8800] transform transition-transform group-open:rotate-180">▼</span>
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
                Noch Fragen zu Photovoltaik mit Speicher in Paderborn?
              </h3>
              <p className="text-blue-700 mb-6">
                Unsere Experten beraten Sie kostenlos zu Ihrer optimalen Photovoltaikanlage mit Batteriespeicher
              </p>
              <button className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                <a href="/kontakt" className="block">Kontakt zu Solarwelt-Lippe</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Photovoltaikanlage mit Speicher in Paderborn planen!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Maximieren Sie Ihre Unabhängigkeit und Ersparnis mit einer optimal geplanten 
            Photovoltaikanlage und Batteriespeicher. Kostenlose Beratung in Paderborn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+4917657796989" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📞 +49 1765 7796989
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📧 Kontakt zu Solarwelt-Lippe
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">60-80%</div>
              <div className="text-sm opacity-90">Eigenverbrauch mit Speicher</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7-10</div>
              <div className="text-sm opacity-90">Jahre Amortisation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3,25%</div>
              <div className="text-sm opacity-90">KfW-Kredit ab</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm opacity-90">Jahre Speicher-Lebensdauer</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              <strong>Fazit:</strong> Eine Photovoltaikanlage mit Batteriespeicher in Paderborn lohnt sich 2025 definitiv!
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

export default PhotovoltaikSpeicherPaderborn;