import React, { useEffect } from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2 from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';
import Link from 'next/link';

const SolarVsPhotovoltaik = () => {
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

  const pageTitle = 'Solar vs. Photovoltaik – Unterschiede, Vorteile & Tipps 2025 | Solarwelt Lippe';
  const pageDescription = 'Solar oder Photovoltaik? Erfahren Sie die Unterschiede, Vorteile & Kosten – und welche Lösung sich 2025 in OWL wirklich lohnt.';
  const pageUrl = 'https://www.solarwelt-lippe.de/solar-vs-photovoltaik';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/solar-vs-photovoltaik-unterschied.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solar vs. Photovoltaik – Der Unterschied einfach erklärt",
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

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="solar vs photovoltaik, unterschied solar photovoltaik, solarthermie vs photovoltaik, solar paderborn, photovoltaikanlage owl" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
                <span className="block">Solar vs.</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FE8800]">Photovoltaik</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FE8800]/20 -z-10 rounded"></span>
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-700">Der Unterschied einfach erklärt</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Viele verwechseln Solar und Photovoltaik. Hier erfahren Sie die wichtigsten Unterschiede 
                und welche Technologie sich 2025 in OWL wirklich lohnt.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Solar</div>
                  <div className="text-sm text-gray-600 font-medium">Oberbegriff</div>
                  <div className="text-xs text-gray-500 mt-1">für Sonnenenergie</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Photovoltaik</div>
                  <div className="text-sm text-gray-600 font-medium">Strom</div>
                  <div className="text-xs text-gray-500 mt-1">aus Sonnenlicht</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">Solarthermie</div>
                  <div className="text-sm text-gray-600 font-medium">Wärme</div>
                  <div className="text-xs text-gray-500 mt-1">aus Sonnenenergie</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2025</div>
                  <div className="text-sm text-gray-600 font-medium">PV gewinnt</div>
                  <div className="text-xs text-gray-500 mt-1">deutlich</div>
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

      {/* Was bedeutet Solar? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Was bedeutet Solar?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Solar ist der Oberbegriff für alle Technologien, die Sonnenenergie nutzen. 
              Es gibt verschiedene Solar-Technologien mit unterschiedlichen Zielen.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Solar umfasst alle Technologien zur Sonnenenergie-Nutzung:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Photovoltaik (PV)</h4>
                      <p className="text-gray-600">
                        Wandelt Sonnenlicht direkt in elektrischen Strom um. Die bekannteste 
                        und wirtschaftlichste Solar-Technologie 2025.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Solarthermie</h4>
                      <p className="text-gray-600">
                        Erzeugt Wärme aus Sonnenenergie für Warmwasser und Heizungsunterstützung. 
                        Wird 2025 zunehmend von Photovoltaik + Wärmepumpe verdrängt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Solarthermische Kraftwerke</h4>
                      <p className="text-gray-600">
                        Große Anlagen zur Stromerzeugung über Dampfturbinen. 
                        Hauptsächlich in sonnenreichen Regionen wie Spanien oder Kalifornien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6 text-center text-gray-800">
                  Solar-Technologien im Vergleich
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Photovoltaik:</span>
                      <span className="font-bold text-blue-600">Strom</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Vielseitig einsetzbar, beste Förderung, niedrigste Kosten
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Solarthermie:</span>
                      <span className="font-bold text-red-600">Wärme</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Nur für Warmwasser & Heizung, weniger Förderung
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                    <div className="text-center">
                      <div className="font-bold text-lg text-orange-700 mb-2">
                        In OWL ist "Solar" meist Photovoltaik gemeint
                      </div>
                      <div className="text-sm text-orange-600">
                        Wenn Hausbesitzer in Paderborn oder Detmold von "Solar" sprechen, 
                        meinen sie zu 90% Photovoltaik-Anlagen für Strom.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Photovoltaik? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Was ist Photovoltaik?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Photovoltaik wandelt Sonnenlicht direkt in elektrischen Strom um. 
            Diese Solar-Technologie hat sich als die wirtschaftlichste Lösung für Hausbesitzer etabliert.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Funktionsweise</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Photovoltaischer Effekt:</strong> Licht erzeugt Spannung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Gleichstrom:</strong> Module produzieren DC-Strom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Wechselrichter:</strong> Wandelt in AC-Strom</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Vorteile 2025</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Niedrige Kosten:</strong> 1.200-1.500€ pro kWp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Hohe Förderung:</strong> KfW + EEG</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Vielseitig:</strong> Strom für alles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Einsatzbereiche</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Haushaltsgeräte:</strong> Waschmaschine, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Heizen:</strong> Über Wärmepumpe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>E-Auto:</strong> Laden mit Solarstrom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solarthermie vs. Photovoltaik */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Solarthermie vs. Photovoltaik – Unterschiede im Überblick
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Beide Technologien nutzen Sonnenenergie, aber auf völlig unterschiedliche Weise. 
            Der direkte Vergleich zeigt klare Unterschiede bei Kosten, Nutzen und Wirtschaftlichkeit.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-800">Kriterium</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">Photovoltaik</th>
                    <th className="px-6 py-4 text-center font-bold text-red-600">Solarthermie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-medium">Zweck</td>
                    <td className="px-6 py-4 text-center">Stromerzeugung</td>
                    <td className="px-6 py-4 text-center">Wärmeerzeugung</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-6 py-4 font-medium">Kosten (10 m²)</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">6.000-8.000€</td>
                    <td className="px-6 py-4 text-center text-red-600">4.000-6.000€</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-medium">Wirtschaftlichkeit</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Sehr gut</td>
                    <td className="px-6 py-4 text-center text-orange-600">Mäßig</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-6 py-4 font-medium">Förderung 2025</td>
                    <td className="px-6 py-4 text-center text-blue-600">KfW-Kredit + EEG</td>
                    <td className="px-6 py-4 text-center text-red-600">Nur BAFA (begrenzt)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-medium">Einsatzbereich</td>
                    <td className="px-6 py-4 text-center">Universell</td>
                    <td className="px-6 py-4 text-center">Nur Warmwasser/Heizung</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Was lohnt sich 2025 mehr? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Was lohnt sich 2025 mehr?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Die klare Antwort: Photovoltaik gewinnt 2025 deutlich. Hier die wichtigsten Gründe 
            und eine konkrete Wirtschaftlichkeitsrechnung für OWL.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Wirtschaftlichkeitsvergleich: 10 m² Dachfläche in Paderborn
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-700 mb-4 text-center">
                    Photovoltaik (1,7 kWp)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Investition:</span>
                      <span className="font-bold">2.550€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jährlicher Ertrag:</span>
                      <span className="font-bold text-green-600">1.700 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stromersparnis/Jahr:</span>
                      <span className="font-bold text-green-600">595€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Einspeisevergütung/Jahr:</span>
                      <span className="font-bold text-blue-600">100€</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Gesamtvorteil/Jahr:</span>
                      <span className="text-green-600">695€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>20-Jahre-Gewinn:</span>
                      <span className="font-bold text-green-600">11.350€</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-700 mb-4 text-center">
                    Solarthermie (10 m²)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Investition:</span>
                      <span className="font-bold">5.000€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jährlicher Ertrag:</span>
                      <span className="font-bold text-orange-600">4.000 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gasersparnis/Jahr:</span>
                      <span className="font-bold text-orange-600">320€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wartungskosten/Jahr:</span>
                      <span className="font-bold text-red-600">-80€</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Gesamtvorteil/Jahr:</span>
                      <span className="text-orange-600">240€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>20-Jahre-Gewinn:</span>
                      <span className="font-bold text-orange-600">-200€</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center bg-green-100 p-6 rounded-lg">
                <h5 className="text-xl font-bold text-green-800 mb-2">
                  Ergebnis: Photovoltaik ist 11.550€ rentabler!
                </h5>
                <p className="text-green-700">
                  Auf derselben Dachfläche erwirtschaftet Photovoltaik über 20 Jahre 
                  11.550€ mehr Gewinn als Solarthermie in Paderborn und Detmold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Fazit – Solar oder Photovoltaik für OWL
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-orange-100 px-8 py-4 rounded-full border border-orange-200 shadow-sm">
                  <span className="text-orange-700 font-bold text-xl flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    Die klare Empfehlung für 2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-blue-600">
                      📖 Begriffe richtig verwenden
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Solar</strong> = Oberbegriff für Sonnenenergie</li>
                      <li>• <strong>Photovoltaik</strong> = Stromerzeugung</li>
                      <li>• <strong>Solarthermie</strong> = Wärmeerzeugung</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-green-600">
                      🏆 Warum Photovoltaik gewinnt
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vielseitig einsetzbar</li>
                      <li>• 3-4x rentabler als Solarthermie</li>
                      <li>• Zukunftssicher für E-Auto & Wärmepumpe</li>
                      <li>• Beste Förderung verfügbar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-3 text-orange-700">
                    Für Hausbesitzer in Paderborn, Detmold und ganz OWL:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Immer mehr Hausbesitzer in OWL entscheiden sich 2025 für Photovoltaik statt Solarthermie. 
                    Mit einer <Link href="/photovoltaikanlage-speicher-paderborn-2025" className="text-blue-600 hover:underline">
                    Photovoltaikanlage mit Speicher</Link> erreichen Sie 60-80% Unabhängigkeit und können 
                    auch Ihr E-Auto laden oder mit einer Wärmepumpe heizen.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="font-bold text-green-800 text-lg">
                      Fazit: Wenn Sie "Solar" wollen, meinen Sie wahrscheinlich Photovoltaik – und das ist 2025 die richtige Wahl!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Häufige Fragen: Solar vs. Photovoltaik
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Was ist der Unterschied zwischen Solar und Photovoltaik?",
                answer: "Solar ist der Oberbegriff für die Nutzung von Sonnenenergie. Photovoltaik ist eine spezielle Solar-Technologie, die Sonnenlicht direkt in Strom umwandelt. Solarthermie hingegen erzeugt Wärme aus Sonnenenergie."
              },
              {
                question: "Was lohnt sich 2025 mehr: Solarthermie oder Photovoltaik?",
                answer: "2025 lohnt sich Photovoltaik deutlich mehr als Solarthermie. Photovoltaik hat bessere Förderungen, niedrigere Kosten und vielseitigere Einsatzmöglichkeiten. Mit Batteriespeicher erreichen Sie 60-80% Unabhängigkeit."
              },
              {
                question: "Kann ich Photovoltaik und Solarthermie kombinieren?",
                answer: "Ja, die Kombination ist möglich, aber meist nicht wirtschaftlich. Photovoltaik mit Wärmepumpe ist 2025 effizienter und günstiger als die Kombination mit Solarthermie. Der Platzbedarf auf dem Dach ist geringer."
              },
              {
                question: "Was bedeutet Solar genau?",
                answer: "Solar kommt vom lateinischen 'sol' (Sonne) und bezeichnet alle Technologien zur Nutzung der Sonnenenergie. Dazu gehören Photovoltaik (Strom), Solarthermie (Wärme) und passive Solararchitektur."
              },
              {
                question: "Warum sagen alle Solar, wenn sie Photovoltaik meinen?",
                answer: "Solar ist der bekanntere Begriff. Wenn Hausbesitzer in OWL 'Solaranlage' sagen, meinen sie zu 90% Photovoltaik. Der Begriff ist einfacher und hat sich umgangssprachlich durchgesetzt, auch wenn er technisch ungenau ist."
              },
              {
                question: "Welche Solar-Technologie ist zukunftssicherer?",
                answer: "Photovoltaik ist 2025 deutlich zukunftssicherer. Sie können damit E-Autos laden, Wärmepumpen betreiben und sind flexibel bei der Nutzung. Solarthermie ist auf Warmwasser und Heizung beschränkt."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group">
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
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sie möchten wissen, ob sich Solar bzw. Photovoltaik für Ihr Haus lohnt?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kostenlose Beratung für Hausbesitzer in Paderborn, Detmold und ganz OWL. 
            Wir klären alle Unterschiede und finden die beste Lösung für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+4917657796989" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📞 +49 1765 7796989
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📧 Kostenlose Beratung anfordern
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">Solar</div>
              <div className="text-sm opacity-90">ist der Oberbegriff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Photovoltaik</div>
              <div className="text-sm opacity-90">erzeugt Strom</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2025</div>
              <div className="text-sm opacity-90">PV lohnt sich mehr</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">OWL</div>
              <div className="text-sm opacity-90">ideal für Photovoltaik</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              <strong>Jetzt kostenfrei beraten lassen:</strong> Welche Solar-Technologie passt zu Ihrem Haus?
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

export default SolarVsPhotovoltaik;