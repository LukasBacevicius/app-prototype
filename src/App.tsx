import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import Main from './containers/Main';

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </ThemeProvider >
  )
};

export default App;
