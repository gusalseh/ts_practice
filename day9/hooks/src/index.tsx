import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateApp1 from './UseStateApp1';
import UseStateApp2 from './UseStateApp2';
import UseEffectApp1 from './UseEffectApp1';
import UseEffectApp2 from './UseEffectApp2';
import UseSampleApp1 from './UseSampleApp1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <UseStateApp1/>
  // <UseStateApp2/>
  // <UseEffectApp1/>
  // <UseEffectApp2/>
  <UseSampleApp1/>
);
