import { AppProps } from 'next/app';
import '../styles/main.css';
import '../components/design.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
