import React, { FC } from 'react';
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
`;

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
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
