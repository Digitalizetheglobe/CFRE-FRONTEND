import React from 'react';
import Header from '../Components/Header/header'; 
import Footer from '../Components/Footer/footer'; 

const UserLayout = ({ children }) => {
  return (
    <>
       <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
