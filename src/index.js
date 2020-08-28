import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { THEME } from './constants';
import App from './components/App';
import Details from './components/details/Details';
import Booking from './components/booking/Booking';

const theme = createMuiTheme(THEME);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/booking/:id" component={Booking}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
