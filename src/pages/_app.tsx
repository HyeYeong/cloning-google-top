import type { AppProps } from 'next/app';
import GlobalStyle from '@/src/styles/globalStyle';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <RecoilRoot>
      <ChakraProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
