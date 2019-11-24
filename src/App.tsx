import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { GlobalTypeStyles } from "styled-typography";
import { Theme } from './theme';
import { stateProps } from './reducers';
import { setMode } from './actions/theme';
import Main from './containers/Main';
import { Sidebar } from './containers/Sidebar';
import ThemeModeToggle from './components/ThemeMode'

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

  .--theme-change {
    * {
      transition: ${({ theme }) => theme.transitions.default(['color', 'background', 'border-color'])};
    }
  }
`;

const App: FC = () => {
  const mode = useSelector(({ theme }: stateProps) => theme.mode);
  const dispatch = useDispatch();
  const isDarkMode = mode !== 'light';

  const changeTheme = () => {
    document.body.classList.add('--theme-change');

    dispatch(setMode(isDarkMode));

    setTimeout(() => document.body.classList.remove('--theme-change'), 300);
  };

  return (
    <ThemeProvider theme={Theme(mode)}>
      <>
        <GlobalStyles />
        <GlobalTypeStyles />
        <Sidebar>
          <ThemeModeToggle onClick={changeTheme} checked={isDarkMode} />
        </Sidebar>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </>
    </ThemeProvider >
  )
};

export default App;
