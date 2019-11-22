import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { createGlobalStyle } from 'styled-components';
import { GlobalTypeStyles } from "styled-typography";
import Main from './containers/Main';
import { Sidebar } from './containers/Sidebar';

const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: ${({ theme }) => theme.color('primary', 'background')};
  }

  #root {
    height: 100%;
    display: flex;
  }

  /* For Dark/Light mode transition */
  * {
    transition: color .2s ease, background .2s ease, border-color .2s ease;
  }
`;

const App: FC = () => {
  const [mode] = useState('light');

  return (
    <ThemeProvider theme={Theme(mode)}>
      <>
        <GlobalStyles />
        <GlobalTypeStyles />
        <Sidebar />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </>
    </ThemeProvider >
  )
};

export default App;
