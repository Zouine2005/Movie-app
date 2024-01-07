import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("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", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
