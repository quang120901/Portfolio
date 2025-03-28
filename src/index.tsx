import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import translation_en from "./assets/locale/en/translation.json"
import translation_vie from "./assets/locale/vie/translation.json"

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || 'en',
  resources: {
    en: {
      global: translation_en,
    },
    fa: {
      global: translation_vie,
    },
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);