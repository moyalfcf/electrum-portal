
import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.tsx';

import themes from 'devextreme/ui/themes';
themes.initialized(() => ReactDOM.render(
  <App />,
  document.getElementById('root'),
));

