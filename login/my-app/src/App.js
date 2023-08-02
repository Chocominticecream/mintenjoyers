import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Routes } from 'react-router-dom';

/*import Navigation from './Navigation';*/

import LoginForm from "./components/loginform";
import RedirectPage from "./components/redirectPage";
import Layout from "./Layout";
import ImageCaption from "./components/imageCaption";

/*
function App() {
  return (
    <div className="page">
      <LoginForm />
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/


export default function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Add existing routes here if you have other pages */}
            <Route path="login" element={<LoginForm />} />
            <Route path="redirectPage" element={<RedirectPage />} />
            <Route path="imageCaption" element={<ImageCaption />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)