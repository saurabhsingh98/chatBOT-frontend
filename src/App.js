import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home.jsx';

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export const App = () => {
  return (
    <>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </>
  );
}