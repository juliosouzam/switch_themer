import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header toogleTheme={toogleTheme} />
    </ThemeProvider>
  );
}

export default App;
