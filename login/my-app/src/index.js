import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Routes } from 'react-router-dom';

import LoginForm from "./components/loginform";
import redirectPage from "./components/redirectPage";

/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add existing routes here if you have other pages }
        <Route path="/login" component={LoginForm} />
        <Route path="/redirect-page" component={redirectPage} />
      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);

*/

