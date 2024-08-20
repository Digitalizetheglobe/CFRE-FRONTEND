import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Hero from './Components/Hero/Hero';
import CategoryCarousel from './Components/MainBody/CategoryCarousel';
import PropertyDetail from './Components/MainBody/PropertyDetail';
import Footer from './Components/Footer/footer';
import PropertyCard from './Components/MainBody/PropertyCard';
import AboutUs from './Components/AboutUs/AboutUs';
import Invest from './Components/Invest/Invest';
import Rent from './Components/Rent/rent';
import Office from './Components/Office/office';
import Showroom from './Components/Showroom/Showroom';
import AddProperty from './AdminDashboard/PropertyPages/AddProperty';
import AddProperty1 from './AdminDashboard/PropertyPages/AddProperty1';


function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Footer />
      
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main>
      {isHomePage && <Hero />}
      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/office" element={<Office/>} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path='/addproperty' element={<AddProperty />} />
        <Route path='/addproperty1' element={<AddProperty1 />} />
      </Routes>
      {isHomePage && <CategoryCarousel />}
    </main>
  );
}

export default App;
