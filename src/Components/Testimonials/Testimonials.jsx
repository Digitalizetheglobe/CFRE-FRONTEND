import React from "react";
import Image from "../assets/listpro.png";
import BackgroundImage from "./Background1.jpg";
import CountUp from "react-countup";
import Bckgrndimg from "../assets/coundown.jpg";
import cfrebuilding from "../assets/icons/cfrebuilding.jpg";
import cfrebuilding1 from "../assets/icons/cfreimgbuilding.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      image: Image,
      text: "CFRE Realty successfully facilitated the transaction for Ashok Leyland's office space at Pyramid Axis, Baner, Pune. Their professional approach ensured a seamless experience from start to finish.",
      name: "Ashok Leyland's",
    },
    {
      image: cfrebuilding1,
      text: "CFRE Realty facilitated the successful transaction of 60,000 sq.ft. for Cloudnine Group of Hospitals at VEN Business Centre-II, Baner, Pune. Our tailored real estate solutions continue to support growth in the healthcare sector. We’re proud to deliver spaces that help businesses thrive.",
      name: "Cloudnine Group",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="px-4 lg:px-8">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div
                className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-8 shadow-lg rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-[300px] object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Testimonial Section */}
                <div className="w-full lg:w-2/3 lg:pl-12 flex flex-col justify-center bg-opacity-90 text-white rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <p className="text-lg lg:text-xl font-light leading-relaxed text-white">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Person's Info */}
                  <div className="mt-6">
                    <p className="font-semibold text-lg text-white">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="py-12 sm:py-16 border ml-16 mr-12 mt-6  hidden md:block"
        style={{
          borderRadius: "2rem",
          backgroundImage: `url(${Bckgrndimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-opacity-75 rounded-lg p-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-white">Years</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUp start={0} end={12} duration={7} /> +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-white">
                Sq.Ft <br />
                Delivered
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUp
                  start={0}
                  end={2.5}
                  decimals={1}
                  suffix=" M"
                  duration={7}
                />
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-white">Clients</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUp start={0} end={500} duration={7} /> +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-white">Cities</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUp start={0} end={40} duration={7} /> +
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
