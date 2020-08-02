// eslint-disable-next-line no-unused-vars
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
