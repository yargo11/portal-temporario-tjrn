import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { MainMenu } from '../components/MainMenu';
import '../styles/global.scss';
import '../styles/bootstrap-grid.scss';
import { Footer } from '../components/Footer';
import VLibras from '../utils/vlibras';
import { CookiesButton } from '../components/CookiesButton';

function MyApp({ Component, pageProps }: AppProps) {

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
