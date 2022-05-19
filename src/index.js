import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "uikit/dist/css/uikit.min.css";

// loads the Icon plugin
UIkit.use(Icons);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

