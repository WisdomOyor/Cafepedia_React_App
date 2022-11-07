import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import Layout from './pages/Layout';
import OurStory from './pages/Our-story';
import Menu from './pages/Menu';
import NoPage from './pages/NoPage';

export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<App></App>}></Route>
          <Route path="our-story" element={<OurStory></OurStory>}></Route>
          <Route path="menu" element={<Menu></Menu>}></Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
