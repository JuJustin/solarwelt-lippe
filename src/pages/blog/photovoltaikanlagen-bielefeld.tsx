import React from 'react';
import Head from 'next/head';
import Canvas from '../../components/Canvas';
import LargeWithLogoCentered from '../../components/Footer2';
import FooterHero from '../../components/FooterHero';
import LazyShow from '../../components/LazyShow';
import Navbar2 from '../../components/Navbar2';
import WhatsAppPopup from '../../components/WhatsAppPopup';

const PhotovoltaikBielefeld = () => {
  const pageTitle = 'Photovoltaikanlagen in Bielefeld 2025 ▷ Kosten, Ertrag & Erfahrungen | Solarwelt Lippe';
  const pageDescription = 'Photovoltaikanlagen Bielefeld 2025: Aktuelle Kosten, Erträge bei 1.180 kWh/m² Sonneneinstrahlung & echte Kundenerfahrungen. ✓ Kostenlose Beratung ✓ Faire Preise ab 1.200€/kWp';
  const pageUrl = 'https://www.solarwelt-lippe.de/blog/photovoltaikanlagen-bielefeld';
  const imageUrl = 'https://www.solarwelt-lippe.de/assets/images/photovoltaikanlagen-bielefeld-kosten-ertrag.jpg';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Photovoltaikanlagen in Bielefeld: Kosten, Ertrag & Erfahrungen",
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
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="photovoltaikanlage bielefeld kosten, solaranlage bielefeld ertrag, photovoltaik bielefeld erfahrungen, solar bielefeld preise" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
      </Head>

      <Navbar2 />
      <WhatsAppPopup />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200/30 to-yellow-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-green-200/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  <span className="block">Photovoltaikanlagen in</span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#FE8800]">Bielefeld</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FE8800]/20 -z-10 rounded"></span>
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-700">
                    Kosten, Ertrag & Erfahrungen
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Alles was Sie über Photovoltaikanlagen in Bielefeld wissen müssen: 
                  Aktuelle Preise, lokale Erträge und echte Kundenerfahrungen aus der Region
                </p>
              </div>

              {/* Bielefeld-spezifische Kennzahlen */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#FE8800] mb-2">1.180</div>
                  <div className="text-sm text-gray-600 font-medium">kWh/m²</div>
                  <div className="text-xs text-gray-500 mt-1">Sonneneinstrahlung/Jahr</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">1.200€</div>
                  <div className="text-sm text-gray-600 font-medium">pro kWp</div>
                  <div className="text-xs text-gray-500 mt-1">Anlagenkosten ab</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">35ct</div>
                  <div className="text-sm text-gray-600 font-medium">Strompreis</div>
                  <div className="text-xs text-gray-500 mt-1">Stadtwerke Bielefeld</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">8-10</div>
                  <div className="text-sm text-gray-600 font-medium">Jahre</div>
                  <div className="text-xs text-gray-500 mt-1">Amortisationszeit</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/kontakt" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <span>📊</span>
                    Individuelle Ertragsberechnung
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

      {/* Kosten nach Anlagengröße */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Photovoltaik Kosten in Bielefeld 2025
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Aktuelle Preise für verschiedene Anlagengrößen - transparent und fair kalkuliert
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 6 kWp - Kleine Anlage */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Kleine Anlage</h3>
                <p className="text-gray-600">2-3 Personen Haushalt</p>
                <div className="text-4xl font-bold text-gray-800 mt-4">6 kWp</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Anlagenkosten:</span>
                    <span className="font-bold text-lg">7.200€</span>
                  </div>
                  <div className="text-sm text-gray-600">1.200€ pro kWp</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Jährlicher Ertrag:</span>
                    <span className="font-bold text-green-600">~6.200 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eigenverbrauch (65%):</span>
                    <span className="font-bold">~4.030 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Einspeisung (35%):</span>
                    <span className="font-bold">~2.170 kWh</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Jährliche Ersparnis:</span>
                    <span className="font-bold text-xl text-green-600">~1.580€</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Amortisation: ~4,6 Jahre
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
                  Ideal für Starter
                </span>
              </div>
            </div>

            {/* 10 kWp - Standard Anlage */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">BELIEBT</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Standard Anlage</h3>
                <p className="text-gray-600">3-4 Personen Haushalt</p>
                <div className="text-4xl font-bold text-gray-800 mt-4">10 kWp</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Anlagenkosten:</span>
                    <span className="font-bold text-lg">11.500€</span>
                  </div>
                  <div className="text-sm text-gray-600">1.150€ pro kWp (Mengenrabatt)</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Jährlicher Ertrag:</span>
                    <span className="font-bold text-green-600">~10.300 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eigenverbrauch (60%):</span>
                    <span className="font-bold">~6.180 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Einspeisung (40%):</span>
                    <span className="font-bold">~4.120 kWh</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Jährliche Ersparnis:</span>
                    <span className="font-bold text-xl text-green-600">~2.480€</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Amortisation: ~4,6 Jahre
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                  Beste Wirtschaftlichkeit
                </span>
              </div>
            </div>

            {/* 15 kWp - Große Anlage */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Große Anlage</h3>
                <p className="text-gray-600">4+ Personen, Wärmepumpe</p>
                <div className="text-4xl font-bold text-gray-800 mt-4">15 kWp</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Anlagenkosten:</span>
                    <span className="font-bold text-lg">16.500€</span>
                  </div>
                  <div className="text-sm text-gray-600">1.100€ pro kWp (Max. Rabatt)</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Jährlicher Ertrag:</span>
                    <span className="font-bold text-green-600">~15.450 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eigenverbrauch (55%):</span>
                    <span className="font-bold">~8.498 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Einspeisung (45%):</span>
                    <span className="font-bold">~6.953 kWh</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Jährliche Ersparnis:</span>
                    <span className="font-bold text-xl text-green-600">~3.520€</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Amortisation: ~4,7 Jahre
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
                  Für hohen Verbrauch
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sonneneinstrahlung & lokale Bedingungen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Warum Bielefeld ideal für Photovoltaik ist
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lokale Bedingungen und Faktoren, die Photovoltaik in Bielefeld besonders attraktiv machen
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Optimale Bedingungen in Bielefeld:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Gute Sonneneinstrahlung</h4>
                      <p className="text-gray-600">
                        Mit 1.180 kWh/m² jährlicher Globalstrahlung liegt Bielefeld im guten 
                        deutschen Mittelfeld. Das entspricht etwa 1.030 Volllaststunden pro Jahr.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Hohe Strompreise</h4>
                      <p className="text-gray-600">
                        Bei Stromkosten von über 35 ct/kWh der Stadtwerke Bielefeld lohnt sich 
                        jede selbst erzeugte Kilowattstunde besonders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Geeignete Dachflächen</h4>
                      <p className="text-gray-600">
                        Viele Einfamilienhäuser in Bielefeld haben südorientierte Dächer 
                        mit optimaler Neigung zwischen 30-45 Grad.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Klimafreundlich</h4>
                      <p className="text-gray-600">
                        Bielefeld hat sich klimaneutrale Ziele bis 2030 gesetzt. 
                        Photovoltaik leistet einen wichtigen Beitrag dazu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6 text-center text-gray-800">
                  Ertragsprognose 10 kWp Anlage in Bielefeld
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Installierte Leistung:</span>
                      <span className="font-bold text-lg">10.000 Wp</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Südausrichtung, 35° Neigung
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                      <span>Sonneneinstrahlung Bielefeld:</span>
                      <span className="font-bold text-yellow-700">1.180 kWh/m²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span>Jährlicher Ertrag:</span>
                      <span className="font-bold text-green-700">~10.300 kWh</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span>Volllaststunden:</span>
                      <span className="font-bold text-blue-700">~1.030 h</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                    <div className="text-center">
                      <span className="font-bold text-lg text-orange-800">
                        Performance Ratio: 85%
                      </span>
                    </div>
                    <div className="text-center mt-2 text-sm text-orange-700">
                      Sehr guter Wert für deutsche Verhältnisse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundenerfahrungen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Echte Erfahrungen von Kunden aus Bielefeld
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Was unsere Kunden über ihre Photovoltaikanlage in Bielefeld sagen
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kundenerfahrung 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                <h4 className="font-bold text-lg text-gray-800">Familie Müller</h4>
                <p className="text-gray-600 text-sm">Bielefeld-Schildesche</p>
                <p className="text-gray-600 text-sm">8 kWp Anlage • Installation 03/2023</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Unsere 8 kWp Anlage läuft seit März 2023 und hat bereits über 8.500 kWh produziert. 
                Bei unseren hohen Strompreisen sparen wir monatlich etwa 180€. Die Beratung war top!"
              </blockquote>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-sm text-green-800">
                  <strong>Ertrag 2024:</strong> 8.520 kWh<br/>
                  <strong>Ersparnis:</strong> ~2.160€/Jahr<br/>
                  <strong>Eigenverbrauch:</strong> 68%
                </div>
              </div>
            </div>

            {/* Kundenerfahrung 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                <h4 className="font-bold text-lg text-gray-800">Ehepaar Weber</h4>
                <p className="text-gray-600 text-sm">Bielefeld-Brackwede</p>
                <p className="text-gray-600 text-sm">12 kWp Anlage • Installation 08/2022</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Mit unserer 12 kWp Anlage sind wir fast autark. Im Sommer produzieren wir 
                deutlich mehr als wir brauchen. Die Investition hat sich bereits nach 4 Jahren gelohnt."
              </blockquote>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-sm text-green-800">
                  <strong>Ertrag 2024:</strong> 12.840 kWh<br/>
                  <strong>Ersparnis:</strong> ~3.200€/Jahr<br/>
                  <strong>Eigenverbrauch:</strong> 58%
                </div>
              </div>
            </div>

            {/* Kundenerfahrung 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                <h4 className="font-bold text-lg text-gray-800">Herr Schmidt</h4>
                <p className="text-gray-600 text-sm">Bielefeld-Sennestadt</p>
                <p className="text-gray-600 text-sm">6 kWp Anlage • Installation 11/2023</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Als Rentner war ich skeptisch wegen der Kosten. Aber die Anlage produziert 
                mehr als versprochen und meine Stromrechnung ist um 70% gesunken. Perfekt!"
              </blockquote>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-sm text-green-800">
                  <strong>Ertrag 2024:</strong> 6.440 kWh<br/>
                  <strong>Ersparnis:</strong> ~1.680€/Jahr<br/>
                  <strong>Eigenverbrauch:</strong> 72%
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                Durchschnittliche Kundenzufriedenheit
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                  <div className="text-sm text-blue-700">Gesamtbewertung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">108%</div>
                  <div className="text-sm text-green-700">Ertrag vs. Prognose</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">4,2</div>
                  <div className="text-sm text-orange-700">Jahre Ø Amortisation</div>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                <a href="/kontakt" className="block">Auch Sie können profitieren</a>
              </button>
            </div>
          </div>
          </div>
      </section>

      {/* Wirtschaftlichkeitsrechnung */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Wirtschaftlichkeitsrechnung für Bielefeld
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Detaillierte Berechnung zeigt: Photovoltaik lohnt sich in Bielefeld besonders
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Beispiel: 10 kWp Anlage Familie Mustermann, Bielefeld
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Investition */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Einmalige Investition</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>10 kWp Photovoltaikanlage:</span>
                      <span className="font-bold">11.500€</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Planung & Montage:</span>
                      <span className="font-bold">Inklusive</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Anmeldungen & Genehmigungen:</span>
                      <span className="font-bold">Inklusive</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-100 rounded border-l-4 border-red-500">
                      <span className="font-bold">Gesamtinvestition:</span>
                      <span className="font-bold text-lg">11.500€</span>
                    </div>
                  </div>
                </div>

                {/* Jährliche Erträge */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Jährliche Erträge</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-green-50 rounded">
                      <span>Stromkostenersparnis (6.180 kWh):</span>
                      <span className="font-bold text-green-600">2.163€</span>
                    </div>
                    <div className="flex justify-between p-3 bg-blue-50 rounded">
                      <span>Einspeisevergütung (4.120 kWh):</span>
                      <span className="font-bold text-blue-600">324€</span>
                    </div>
                    <div className="flex justify-between p-3 bg-orange-100 rounded border-l-4 border-orange-500">
                      <span className="font-bold">Gesamtertrag/Jahr:</span>
                      <span className="font-bold text-lg">2.487€</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 20-Jahre-Bilanz */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">20-Jahre-Bilanz</h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">11.500€</div>
                    <div className="text-sm text-gray-600">Investition</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">49.740€</div>
                    <div className="text-sm text-gray-600">Gesamtertrag</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">38.240€</div>
                    <div className="text-sm text-gray-600">Reingewinn</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">4,6</div>
                    <div className="text-sm text-gray-600">Jahre Amortisation</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="bg-green-500 text-white px-6 py-2 rounded-full font-bold">
                    432% Rendite über 20 Jahre!
                  </span>
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
            Häufige Fragen zu Photovoltaikanlagen in Bielefeld
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Wie viel kostet eine Photovoltaikanlage in Bielefeld?",
                answer: "Die Kosten variieren je nach Anlagengröße: 6 kWp ab 7.200€, 10 kWp ab 11.500€, 15 kWp ab 16.500€. Durch Mengenrabatte wird der Preis pro kWp bei größeren Anlagen günstiger."
              },
              {
                question: "Wie viel Strom produziert eine Photovoltaikanlage in Bielefeld?",
                answer: "Bei 1.180 kWh/m² Sonneneinstrahlung produziert 1 kWp etwa 1.030 kWh pro Jahr. Eine 10 kWp Anlage erzeugt somit ca. 10.300 kWh jährlich - genug für einen 4-Personen-Haushalt."
              },
              {
                question: "Wann amortisiert sich eine Photovoltaikanlage in Bielefeld?",
                answer: "Bei den aktuellen Strompreisen der Stadtwerke Bielefeld (35+ ct/kWh) amortisieren sich Anlagen in 4-5 Jahren. Danach produzieren sie 15-16 Jahre lang reinen Gewinn."
              },
              {
                question: "Welche Dachausrichtung ist in Bielefeld optimal?",
                answer: "Süd-Ausrichtung ist ideal, aber auch Ost-West-Dächer funktionieren gut. Bei 30-45° Dachneigung erhalten Sie optimale Erträge. Wir analysieren Ihr Dach individuell."
              },
              {
                question: "Benötige ich eine Genehmigung für Photovoltaik in Bielefeld?",
                answer: "Für normale Dachanlagen benötigen Sie keine Baugenehmigung. Wir übernehmen alle Anmeldungen beim Netzbetreiber und der Bundesnetzagentur für Sie."
              },
              {
                question: "Wie wartungsintensiv sind Photovoltaikanlagen?",
                answer: "Photovoltaikanlagen sind sehr wartungsarm. Eine jährliche Sichtprüfung und Reinigung alle 2-3 Jahre reichen meist aus. Wir bieten Wartungsverträge an."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow group">
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
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihre Photovoltaikanlage für Bielefeld wartet auf Sie!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Profitieren Sie von 1.180 kWh/m² Sonneneinstrahlung und hohen Strompreisen in Bielefeld. 
            Wir beraten Sie individuell zu Ihrer Dachfläche und erstellen eine maßgeschneiderte Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+4917657796989" className="bg-[#FE8800] hover:bg-[#FE8800]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📞 +49 1765 7796989
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              📊 Individuelle Dachanalyse anfordern
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">1.180</div>
              <div className="text-sm opacity-90">kWh/m² Sonneneinstrahlung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4,6</div>
              <div className="text-sm opacity-90">Jahre Amortisation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">35ct</div>
              <div className="text-sm opacity-90">Strompreis pro kWh</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm opacity-90">Jahre Ertrag</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              <strong>Fazit:</strong> Wir beraten Sie individuell zu Ihrer Dachfläche in Bielefeld!
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

export default PhotovoltaikBielefeld;
        