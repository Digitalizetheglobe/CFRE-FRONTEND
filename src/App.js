import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Hero from './Components/Hero/Hero';
import CategoryCarousel from './Components/MainBody/CategoryCarousel';
import PropertyDetail from './Components/MainBody/PropertyDetail';
import Footer from './Components/Footer/footer';
import PropertyCard from './Components/MainBody/PropertyCard.jsx';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blogs/Blogs.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
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
// import UserContext from './Components/Context/UserContext';
import PropertyList from './Components/Hero/Propertylist';
import ProjectProperty from './Components/Projects/ProjectProperty';
import ProjectDetails from './Components/Projects/ProjectDetails';
// import ProjectCard from './components/ProjectCard';
import Blogslider from './Components/MainBody/Blogslider.jsx';
import Cookies from './Components/MainBody/cookies.jsx';
import ShowroomPropertyDetails from './Components/Showroom/ShowroomPropertyDetails.jsx';
import PropertyDetails from './Components/Hero/PropertyDetails.jsx'
import Tagline from './Components/MainBody/Tagline.jsx';
import Template from './Components/MainBody/Template.jsx';
import sellProperty from './Components/MainBody/sellProperty.jsx';
import Card from './Components/Cards/Card.jsx';
import Thirdcards from './Components/MainBody/Thirdcards.jsx';
import AddNewProperty from './AdminDashboard/PropertyPages/AddNewProperty.jsx';
import PropertyCardInvest from './Components/MainBody/PropertyCardInvest.jsx'
import BulkUploadForm from './AdminDashboard/BulkUploadForm.jsx';



function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Cookies />
      <Footer />

    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main>
      {isHomePage && (
        <>
        <Hero />
        <Blogslider />
        </>)}
      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path='/contactUs' element={<ContactUs />} />
        
        <Route path="/invest" element={<Invest />} />
        <Route path="/rent"  element={<Rent />} />
        <Route path='/projectproperty' element={<ProjectProperty />} />
        {/* <Route path='/blogslider' element={<Blogslider />} /> */}
        <Route path='/propertyList' element={<PropertyList />} />
        <Route path="/combinedproperties/:id" element={<PropertyDetails />} />
        <Route path="/office" element={<Office />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/showroom/:id" element={<ShowroomPropertyDetails />} />
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
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path='/cards' element={<Card/>}/>
        <Route path='/third-card' element={<Thirdcards/>}/>
        <Route path='/addnewproperty' element={<AddNewProperty/>} />
        <Route path ='/bulkproperty' element={<BulkUploadForm/>} />
        
      </Routes>
      {isHomePage && (
  <>
    {/* <Blogslider /> */}
    {/* <PropertyCardInvest /> */}
    <Card />
    <CategoryCarousel />
    <PropertyCardInvest /> 
    <Tagline />
    <sellProperty/>
    <Template />
    
    
  </>
)}
    </main>
  );
}

export default App;
