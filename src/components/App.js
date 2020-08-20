import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Landing from './landing/Landing';
import { THEME } from '../constants';

function App() {
  const theme = createMuiTheme(THEME);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
