import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { MainMenu } from '../components/MainMenu';
import '../styles/global.scss';
import '../styles/bootstrap-grid.scss';
import { Footer } from '../components/Footer';
import VLibras from '../vlibras'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from "../utils/gtag";
import { CookiesButton } from '../components/CookiesButton';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <CookiesButton />
      <Header />
      <MainMenu />
      <VLibras />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
