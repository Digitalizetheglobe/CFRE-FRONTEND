import React from 'react';
import Card from '../Cards/Card.jsx'
import CategoryCarousel from '../MainBody/CategoryCarousel';
import PropertyCardInvest from '../MainBody/PropertyCardInvest.jsx';
import Tagline from '../MainBody/Tagline.jsx';
import BlogHomePage from '../Blogs/BlogHomePage.jsx';
import Testimonials from '../Testimonials/Testimonials.jsx';
import Template from '../MainBody/Template.jsx';
import Hero from '../Hero/Hero.jsx';
import Blogslider from '../MainBody/Blogslider.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Blogslider />
      <Card />
      <CategoryCarousel />
      <PropertyCardInvest />
      <Tagline />
      <BlogHomePage />
      <Testimonials />
      <Template />
    </>
  );
};

export default Home;