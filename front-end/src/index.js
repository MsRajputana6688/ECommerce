import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import './table.css';
import Itrust from './Itrust';
import Store from './Redux';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Itrust />
    </Provider>
  </React.StrictMode>
);
