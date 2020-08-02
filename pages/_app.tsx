// eslint-disable-next-line no-unused-vars
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import Navbar from '../components/Navbar';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

// In order to Redux SSR principles, we have to create new store on each request
const newStore = () => store;

export default withRedux(newStore)(App);
