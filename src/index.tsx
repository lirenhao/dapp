import React from 'react';
import ReactDOM from 'react-dom/client';
import { DAppProvider, ChainId } from "@usedapp/core";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const config = {
  readOnlyChainId: process.env.DEFAULT_CHAIN_ID ? Number.parseInt(process.env.DEFAULT_CHAIN_ID) : ChainId.Polygon,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
