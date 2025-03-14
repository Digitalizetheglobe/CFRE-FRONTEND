import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Cookies from './Components/MainBody/cookies.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/home.jsx';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blogs/Blogs.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Invest from './Components/Invest/Invest';
import Rent from './Components/Rent/rent';
import PropertyDetail from './Components/MainBody/PropertyDetail';
import ProjectProperty from './Components/Projects/ProjectProperty';
import ProjectDetails from './Components/Projects/ProjectDetails';
import PropertyDetails from './Components/Hero/PropertyDetails.jsx';
import AddProperty from './AdminDashboard/PropertyPages/AddProperty';
import AddProperty1 from './AdminDashboard/PropertyPages/AddProperty1';
import AddProperty2 from './AdminDashboard/PropertyPages/AddProperty2';
import Furnished from './Components/Rent/Furnished';
import UnFurnished from './Components/Rent/UnFurnished';
import Coworking from './Components/Rent/Coworking';
import PreLease from './Components/Invest/PreLease';
import Unlease from './Components/Invest/Unlease';
import Latestblog from './Components/Blogs/Latestblog.jsx';
import Blog1 from './Components/Blogs/Blog1.jsx';
import Blog2 from './Components/Blogs/Blog2.jsx';
import Blog3 from './Components/Blogs/Blog3.jsx';
import Blog4 from './Components/Blogs/blog4.jsx';
import Blog5 from './Components/Blogs/Blog5.jsx'
import Blog7 from './Components/Blogs/Blog7.jsx';
import MainRent from './Components/Rent/MainRent.jsx';
import PropertyList from './Components/Hero/Propertylist';
import PropertyDetailInRent from './Components/Rent/PropertyDetailsInRent';
import UnfurnishedPropertyDetailsInRent from './Components/Rent/UnfurnishedPropertyDetailsInRent.jsx';
import ExploreRentProperty from './Components/Exploreproperty/ExpolreInevstProperty.jsx';
import BulkUploadForm from './AdminDashboard/BulkUploadForm.jsx';
import Thirdcards from './Components/MainBody/Thirdcards.jsx';
import Card from './Components/Cards/Card.jsx';
import AddNewProperty from './AdminDashboard/PropertyPages/AddNewProperty.jsx';
import Office from './Components/Office/office';
import ShowroomPropertyDetails from './Components/Showroom/ShowroomPropertyDetails.jsx';
import Showroom from './Components/Showroom/Showroom';
import ExploreInvestProperty from './Components/Exploreproperty/ExpolreInevstProperty.jsx';
import AdminLogin from './AdminDashboard/AdminLogin.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Dashboard from './AdminDashboard/Dashboard.jsx'
import SellYourProperty from './Components/MainBody/SellYourProperty.jsx';
import RentYourProperty from './Components/MainBody/RentYourProperty.jsx';

// Layoutes
import AdminLayout from './Layout/AdminLayout.jsx'
import FAQs from './FAQs.jsx';

import BasicForm from './AdminDashboard/BasicForm.jsx'
import BasicFormView from './AdminDashboard/BasicFormView.jsx'
import EnquiryDetails from './AdminDashboard/Enquiry/EnquiryDetails.jsx'
import ProjectForm from './AdminDashboard/PropertyPages/ProjectForm.jsx'
import EmiCalculator from './Components/EMICalculator/EmiCalculator.jsx';
import StickyButton from './Components/StickyButton/StickyButton.jsx';
import ProjectUpload from './AdminDashboard/ProjectUpload.jsx';
import ProjectList from './AdminDashboard/ProjectList.jsx';
import ViewAllProperty from './AdminDashboard/PropertyPages/ViewAllProperty.jsx'
import MobileSearchBar from './MobileSearchBar.jsx';
import MobileSearchBarComponent from './MobileSearchBarComponent.jsx';
import ViewAllProjects from './AdminDashboard/ProjectPages/ViewAllProjects.jsx';
import InvestPropertyDetail from './Components/Invest/InvestPropertyDetail.jsx';
import SaleInvestPropertyDetail from './Components/Invest/SaleInvestPropertyDetail.jsx';
import NewprojectForm from './Components/NewprojectForm.js';
import ListProperty from './AdminDashboard/ListProperty/ListProperty.jsx';
import PropertyModal from './AdminDashboard/ListProperty/PropertyModal.jsx';
import TestNewproject from './Components/Projects/TestProject.jsx';
import EditProperty from './AdminDashboard/PropertyPages/EditProperty.jsx';
import ViewAllcoworking from './AdminDashboard/coworking/ViewAllCoworking.jsx';
import CoworkingForm from './AdminDashboard/coworking/addcoworking.jsx';
// import DisclaimerPopup from './Components/Disclaimer/DisclaimerPopup .jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Header /> */}
      <main>
      <HelmetProvider>
        <StickyButton />
        {/* <DisclaimerPopup /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/latestblog" element={<Latestblog />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/NewpropertyForm" element={<NewprojectForm />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/projectproperty" element={<ProjectProperty />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path='/propertyList' element={<PropertyList />} />
          <Route path="/combinedproperties/:slug" element={<PropertyDetails />} />
          <Route path="/property/:slug" element={<PropertyDetail />} />
          <Route path="/property-detail/:slug" element={<PropertyDetailInRent />} />
          {/* <Route path="/Coworking-property-detail/:slug" element={<CoworkingPropertyDetails/>} /> */}
          <Route path="/property-detail-invest/:slug" element={<InvestPropertyDetail/>} />
          <Route path="/property-detail-invest-sale/:slug" element={<SaleInvestPropertyDetail/>} />
          <Route path='/commercial-properties-for-rent' element={<MainRent />} />
          <Route path='/unfurnished-property-detail/:slug' element={<UnfurnishedPropertyDetailsInRent />} />
          <Route path="/addproperty1" element={<AddProperty1 />} />
          <Route path="/addproperty2" element={<AddProperty2 />} />
          <Route path="/preleased" element={<PreLease />} />
          <Route path="/unleased" element={<Unlease />} />
          <Route path="/furnished" element={<Furnished />} />
          <Route path="/unfurnished" element={<UnFurnished />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/mainrent" element={<MainRent />} />
          <Route path="/commercial-property-in-baner" element={<Blog1 />} />
          <Route path="/commercial-property-in-balewadi" element={<Blog2 />} />
          <Route path="/coworking-space" element={<Blog3 />} />
          <Route path="/office-space-for-rent-in-warje-pune" element={<Blog4 />} />
          <Route path='/Why to Invest in Commercial Property in 2024 and Which are the Best Option to Invest in Baner-Balewadi?' element={<Blog5/>}/>
          <Route path="/How to Evaluate Real Estate Investment Opportunities in Warje, Pune" element={<Blog7/>}/>
          <Route path="*" element={<Error />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/third-card' element={<Thirdcards />} />
          <Route path='/exploreRentProperty' element={<ExploreRentProperty />} />
          <Route path="/office" element={<Office />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/showroom/:slug" element={<ShowroomPropertyDetails />} />
          <Route path="/exploreInvestProperty" element={<ExploreInvestProperty />} />
          <Route path="/emiCalculator" element={<EmiCalculator/>} />
          <Route path='/mobileSearchBar' element={< MobileSearchBar/>}/>
          <Route path='/mobileSearchBarComponent' element={<MobileSearchBarComponent/>} />
          <Route path='/SellYourProperty' element={<SellYourProperty/>} />
          <Route path='/RentYourProperty' element={<RentYourProperty/>} />
          <Route path='/fAQs' element={<FAQs/>}/>
          <Route path='/ListProperty/:id' element={<PropertyModal/>}/>
          {/* <Route path="/property/:id" element={<ListPropertyDetail />} /> */}
          <Route path="/ListProperty" element={<ListProperty />} />
          

<Route path='/testproject' element={<TestNewproject/>} />
          {/* below admin panal routes */}
          <Route path='/adminlogin' element={<AdminLogin />} />
          


          {/* Private routes (Protected) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/addnewproperty"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <AddNewProperty />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/bulkproperty"
            element={
              <PrivateRoute>
                <BulkUploadForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/basicform"
            element={
              <PrivateRoute>
                <BasicForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/view"
            element={
              <PrivateRoute>
                <BasicFormView />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/enquirydetails"
            element={
              <PrivateRoute>
                <EnquiryDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/ListProperty"
            element={
              <PrivateRoute>
                <ListProperty />
              </PrivateRoute>
            }
          />
         
          <Route
            path="/addnewproject"
            element={
              <PrivateRoute>
                < ProjectForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/addcoworking"
            element={
              <PrivateRoute>
                < CoworkingForm />
              </PrivateRoute>
            }
          />
          <Route
            path='/ViewAllProperty'
            element={
              <PrivateRoute>
                <ViewAllProperty />
              </PrivateRoute>
            }
          />
          <Route
            path='/EditProperty'
            element={
              <PrivateRoute>
                <EditProperty />
              </PrivateRoute>
            }
          />
          <Route
            path='/viewallcoworking'
            element={
              <PrivateRoute>
                <ViewAllcoworking/>
              </PrivateRoute>
            }
          />

          <Route
           path='/ViewAllProjects'
           element={
            <PrivateRoute>
              <ViewAllProjects/>
            </PrivateRoute>
           }
          />
        </Routes>
        </HelmetProvider>
      </main>
      
      <Cookies />
      <Footer />
    </Router>
  );
}

export default App;
