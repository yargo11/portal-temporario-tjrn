import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { MainMenu } from '../components/MainMenu';
import '../styles/global.scss';
import '../styles/bootstrap-grid.scss';
import { Footer } from '../components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <MainMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
