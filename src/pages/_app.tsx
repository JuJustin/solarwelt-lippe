import { AppProps } from 'next/app';
import '../styles/main.css';
import '../components/design.css';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
