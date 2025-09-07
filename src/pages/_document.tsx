import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
        <Html lang={AppConfig.locale}>
          <Head> <link
            rel="icon"
            href="https://www.solarwelt-lippe.de/favicon.ico"
            type="image/x-icon"
          /> <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    );
  }
}

export default MyDocument;
