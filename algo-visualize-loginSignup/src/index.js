import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
/*ALL THESE WORKS ARE DONE BY 

ANKITA SIKDER

STUDENT OF BTECH, IN UEMK

CONTACT NO.: 8583939774

EMAIL ID: ankita.sikder14@gmail.com
*/
setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root'))
}, 2500)
