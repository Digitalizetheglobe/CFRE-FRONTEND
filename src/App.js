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
import AddProperty2 from './AdminDashboard/PropertyPages/AddProperty2';
import Furnished from './Components/Rent/Furnished';
import UnFurnished from './Components/Rent/UnFurnished';
import Coworking from './Components/Rent/Coworking';
import PreLease from './Components/Invest/PreLease';
import Unlease from './Components/Invest/Unlease';
import PropertyDetailInRent from './Components/Rent/PropertyDetailsInRent';
import PropertyDetailInInvest from './Components/Invest/PropertyDetailInInvest';
import UserContext from './Components/Context/UserContext';
import PropertyList from './Components/Hero/Propertylist';
import ProjectProperty from './Components/Projects/ProjectProperty';



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
        <Route path="/rent"  element={<Rent />} />
        {/* <Route path='/Projects' element={<Projects />} /> */}
        <Route path='/projectproperty' element={<ProjectProperty />} />
        <Route path='/propertyList' element={<PropertyList />} />
        <Route path="/office" element={<Office />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path='/addproperty' element={<AddProperty />} />
        <Route path='/addproperty1' element={<AddProperty1 />} />
        <Route path='/addproperty2' element={<AddProperty2 />} />
        <Route path="/property-detail/:id" element={<PropertyDetailInRent />} />
        <Route path='/furnished' element={<Furnished />} />
        <Route path='/unfurnished' element={<UnFurnished />} />
        <Route path='/coworking' element={<Coworking />} />
        <Route path='/preleased' element={<PreLease />} />
        <Route path='/unleased' element={<Unlease />} />
        <Route path="/propertydetail/:id" element={<PropertyDetailInInvest />} />
      </Routes>
      {isHomePage && <CategoryCarousel />}
    </main>
  );
}

export default App;
