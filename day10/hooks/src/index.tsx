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
import UseContextApp1 from './UseContextApp1';
import UseRefApp1 from './UseRefApp1';
import UseRefApp2 from './UseRefApp2';
import UseRefApp3 from './UseRefApp3';
import UseRefApp4 from './UseRefApp4';
import UseMemoApp1 from './UseMemoApp1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <UseStateApp1/>
  // <UseStateApp2/>
  // <UseEffectApp1/>
  // <UseEffectApp2/>
  // <UseSampleApp1/>
  // <UseContextApp1/>
  // <UseRefApp1/>
  // <UseRefApp2/>
  // <UseRefApp3/>
  // <UseRefApp4/>
  <UseMemoApp1/>
);
