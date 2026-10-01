import { Route, Routes } from 'react-router-dom';

import Layout from '../features/cars/shared/components/layout/Layout';
import Home from '../features/cars/home/pages/Home';
import Cars from '../features/cars/pages/Cars';
import CarDetail from '../features/cars/pages/CarDetail';
import Contact from '../features/contact/pages/Contact';
import NotFound from '../features/cars/shared/components/NotFound';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;