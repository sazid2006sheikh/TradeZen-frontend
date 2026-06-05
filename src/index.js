import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import './index.css';

import HomePage from './landing_page/home/HomePage';
import Login from './landing_page/login/Login';
import Signup from './landing_page/signup/Signup';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


// Layout for pages having Navbar + Footer
function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

    <Routes>

      {/* Pages with Navbar and Footer */}
      <Route element={<Layout />}>

        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />

      </Route>


      {/* Standalone pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} /> 


      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>

  </BrowserRouter>
);