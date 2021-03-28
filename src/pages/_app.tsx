import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
