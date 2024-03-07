import Container from '@/components/Container';
import Headers from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CodeitMall</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <ThemeProvider>
        <Headers></Headers>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
