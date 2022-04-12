import { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global-styles';
import Theme from '../styles/theme';
import { AlertProvider } from '../context/AlertContext';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Theme>
        <GlobalStyle />
        <AlertProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </AlertProvider>
      </Theme>
    </>,
  );
}

App.propTypes = AppProps;
