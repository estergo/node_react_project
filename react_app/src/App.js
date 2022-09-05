import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.scss';
import Nav from './general/nav';
import { BrowserRouter } from 'react-router-dom';
import Route from './general/route';
import RTL from './general/rtl';


const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Nav />
        <BrowserRouter>
            <img alt="" className="background" src={require('./assets/background.jpg')} />
            <RTL>
              <div dir="rtl" className="main-content">
                <Route />
              </div>
            </RTL>
         
        </BrowserRouter>

      
        </ThemeProvider>
  );
}

export default App;

