import React from 'react';
import { Route, Routes } from 'react-router-dom';

import  Layout from '../features/shared/components/layout/Layout.tsx';
import  Home from '../features/home/pages/Home.tsx';
import  Cars from '../features/cars/pages/Cars.tsx';
import  CarDetail from '../features/cars/pages/CarDetail.tsx';
import NotFound from '../features/shared/NotFound.tsx';

const App = () => {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}>
          <Route path="/cars" element={<Cars/>}>
          <Route path="/cars:id" element={<CarDetail/>}>
          <Route path="/contact" element={<Contact/>}>
          <Route path="*" element={<NotFound/>}>
        </Route>
      </Routes>
  );
}

export default App