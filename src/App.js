import React, { Component } from 'react';
import './App.css';
import Headers from './Component/topmenu/Headers';
import SiteBranding from './Component/site branding/SiteBranding';
import Navigation from './Component/navigation/Navigation';
import Slider from './Component/slider/Slider';
import PromoArea from './Component/promo area/PromoArea';
import ContentArea from './Component/content area/ContentArea';
import BrandsArea from './Component/brands area/BrandsArea';
import ProductWidgetArea from './Component/product widget area/ProductWidgetArea';
import FooterTopArea from './Component/footer/FooterTopArea';
import FooterBottomArea from './Component/footer/FooterBottomArea';

function App() {
  return (
    <div className="Home">
        <Headers/>
        <SiteBranding/>
        <Navigation/>
        <Slider/>
        <PromoArea/>
        <ContentArea/>
        <BrandsArea/>
        <ProductWidgetArea/>
        <FooterTopArea/>
        <FooterBottomArea/>

    </div>
  );
}

export default App;
