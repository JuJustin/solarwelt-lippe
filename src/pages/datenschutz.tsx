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
        <title>{'Solarwelt-Lippe Photovoltaikanlage - Datenschutz!'}</title>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Datenschutz!"
          key="title"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Datenschutz!"
          key="title"
        />
        <meta
          name="description"
          content="Hier finden Sie Infomration pber den Datenschtz auf unserer Website!"
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
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header mainPage={false} />
          </div>
          <p>
            <b>Datenschutz</b>
          </p>
          <p>
            B&B Solarwelt-Lippe UG (haftungsbeschränkt) Datenschutzerklärung{' '}
            <br /> <br />
            In dieser Datenschutzerklärung wird beschrieben, wie Ihre
            personenbezogenen Daten erfasst, verwendet und weitergegeben werden,
            wenn Sie www.solarwelt-lippe.de (die &#34;Website&#34;) nutzen.{' '}
            <br /> <br />
            VON UNS ERFASSTE PERSONENBEZOGENE DATEN <br />
            Wenn Sie die Website besuchen, erfassen wir automatisch bestimmte
            Informationen über Ihr Gerät, darunter Informationen zum Webbrowser,
            der IP-Adresse, der Zeitzone und einigen der Cookies, die auf Ihrem
            Gerät installiert sind. Wenn Sie auf der Website navigieren,
            erfassen wir außerdem Informationen zu den einzelnen Webseiten oder
            Produkten, die Sie aufrufen, zu den Websites oder Suchbegriffen, die
            Sie auf die Website geführt haben, sowie Informationen darüber, wie
            Sie mit der Website interagieren. Wir bezeichnen diese automatisch
            erfassten Informationen als &#34;Geräteinformationen&#34;. <br />{' '}
            <br /> Wir erfassen Geräteinformationen mithilfe der folgenden
            Technologien: <br /> <br />- &#34;Protokolldateien&#34;
            protokollieren Aktionen auf der Website und erfassen Daten wie
            IP-Adresse, Browsertyp, Internetdienstanbieter,
            verweisende/Ausstiegsseiten sowie Datums-/Uhrzeitstempel. <br />-
            &#34;Web Beacons&#34;, &#34;Tags&#34; und &#34;Pixel&#34; sind
            elektronische Dateien zur Erfassung von Informationen dazu, wie Sie
            auf der Website navigieren. <br />
            Wenn Sie auf der Website eine Anfrage absenden, erfassen wir
            außerdem bestimmte Informationen über Ihre Person. Dazu gehören
            Name, Adresse, E-Mail-Adresse und Telefonnummer. Wir bezeichnen
            diese Angaben als &#34;Bestellinformationen&#34;. <br /> <br />
            Mit &#34;personenbezogene Daten&#34; in dieser Datenschutzerklärung
            bezeichnen wir sowohl Geräteinformationen als auch
            Bestellinformationen. <br /> <br />
            WIE VERWENDEN WIR IHRE PERSONENBEZOGENEN DATEN? <br /> <br /> Wir
            verwenden die von uns erfassten Bestellinformationen in der Regel
            zur Ausführung von Bestellungen, die wir über die Website erhalten
            (unter anderem zur Verarbeitung Ihrer Zahlungsinformationen,
            Versandbereitstellung und Zusendung von Rechnungen und/oder
            Bestellbestätigungen). <br /> <br />
            Außerdem verwenden wir diese Bestellinformation zur: <br /> <br />
            Kommunikation mit Ihnen; Prüfung unserer Bestellungen auf
            potenzielle Risiken oder Betrug und Bereitstellung von Informationen
            oder Werbung im Zusammenhang mit unseren Produkten oder
            Dienstleistungen an Sie, sofern dies mit Ihren
            Datenschutzeinstellungen im Einklang steht. Wir verwenden die von
            uns erfassten Geräteinformationen für die Prüfung auf potenzielle
            Risiken und Betrug (insbesondere Ihre IP-Adresse) und allgemein zur
            Verbesserung und Optimierung unserer Website (z.B. mithilfe von
            Analysen zum Navigationsverhalten unserer Kunden und ihrer
            Interaktion mit der Website sowie zum Beurteilen des Erfolgs unserer
            Marketing- und Werbekampagnen). <br /> <br /> WEITERGABE IHRER
            PERSONENBEZOGEN DATEN <br />
            Wir geben Ihre personenbezogenen Daten an Dritte weiter, die uns bei
            der Verwendung Ihrer personenbezogenen Daten wie oben beschrieben
            unterstützen. Zum Beispiel verwenden wir Shopify, um unseren
            Onlineshop zu betreiben. Weitere Informationen dazu, wie Shopify
            Ihre personenbezogenen Daten verwendet, finden Sie hier:
            https://www.shopify.com/legal/privacy. Außerdem verwenden wir Google
            Analytics, um zu verstehen, wie unsere Kunden die Website nutzen.
            Weitere Informationen zur Verwendung Ihrer personenbezogenen Daten
            durch Google finden Sie hier:
            https://policies.google.com/privacy?hl=de. Hier können Sie Google
            Analytics deaktivieren: https://tools.google.com/dlpage/gaoptout.{' '}
            <br /> <br />
            Schließlich können wir Ihre personenbezogenen Daten auch
            weitergeben, um geltende Gesetze und Vorschriften einzuhalten, um
            auf eine Vorladung, einen Durchsuchungsbefehl oder eine andere
            rechtmäßige Anfrage nach Informationen, die wir erhalten, zu
            reagieren oder um unsere Rechte anderweitig zu schützen. <br />{' '}
            <br />
            VERHALTENSBASIERTE WERBUNG <br />
            Wie oben beschrieben verwenden wir Ihre personenbezogenen Daten, um
            Ihnen zielgerichtete Werbung oder Marketingmitteilungen zur
            Verfügung zu stellen, von denen wir glauben, dass sie für Sie von
            Interesse sein könnten. Weitere Informationen darüber, wie
            zielgerichtete Werbung funktioniert, finden Sie auf der
            Aufklärungsseite der Network Advertising Initiative (&#34;NAI&#34;)
            unter
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.{' '}
            <br /> <br />
            DO NOT TRACK Wir weisen Sie darauf hin, dass wir die
            Datenerfassungs- und -nutzungsverfahren unserer Website nicht
            ändern, wenn wir von Ihrem Browser ein &#34;Do Not Track&#34;-Signal
            erhalten. <br /> <br />
            IHRE RECHTE <br />
            Wenn Sie in Europa ansässig sind, haben Sie das Recht, auf die
            personenbezogenen Daten, die wir über Sie besitzen, zuzugreifen und
            deren Korrektur, Aktualisierung oder Löschung zu fordern. Wenn Sie
            dieses Recht ausüben möchten, setzen Sie sich über die nachstehenden
            Kontaktdaten mit uns in Verbindung. Wenn Sie in Europa ansässig
            sind, weisen wir außerdem darauf hin, dass wir Ihre Daten
            verarbeiten, um Verträge mit Ihnen zu erfüllen (z. B. wenn Sie über
            die Website eine Bestellung aufgeben) oder um unsere oben genannten
            berechtigten Geschäftsinteressen zu verfolgen. Bitte beachten Sie
            außerdem, dass Ihre Daten außerhalb von Europa, einschließlich
            Kanada und den Vereinigten Staaten, übertragen werden. <br /> <br />
            AUFBEWAHRUNG VON DATEN <br /> Wenn Sie eine Bestellung über die
            Website aufgeben, bewahren wir Ihre Bestellinformationen für unsere
            Aufzeichnungen auf, sofern Sie uns nicht auffordern, diese Daten zu
            löschen. <br /> <br />
            ÄNDERUNGEN <br />
            Wir können diese Datenschutzerklärung gelegentlich ändern, um
            Änderungen unserer Vorgehensweisen zu berücksichtigen, oder aus
            anderen betrieblichen, rechtlichen oder aufsichtsrechtlichen
            Gründen. <br /> <br />
            KONTAKT <br />
            Wenn Sie weitere Informationen zu unseren Datenschutzverfahren
            benötigen, Fragen haben oder eine Beschwerde einreichen möchten,
            kontaktieren Sie uns per E-Mail an info@solarwelt-lippe.de oder per
            Post an die unten genannte Adresse: Drosselweg 3,
            Schieder-Schwalenberg, Nordrhein-Westfalen, 32816, Deutschland
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
