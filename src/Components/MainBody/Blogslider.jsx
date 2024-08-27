import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../ClientLogo/1.png";
import img2 from "../ClientLogo/2.png";
import img3 from "../ClientLogo/3.png";
import img4 from "../ClientLogo/4.png";
import img5 from "../ClientLogo/5.png";
import img6 from "../ClientLogo/6.png";
import img7 from "../ClientLogo/7.png";
import img8 from "../ClientLogo/8.png";
import img9 from "../ClientLogo/9.png";
import img10 from "../ClientLogo/10.png";
import img11 from "../ClientLogo/11.png";
import img12 from "../ClientLogo/12.png";
import img13 from "../ClientLogo/13.png";
import img14 from "../ClientLogo/14.png";
import img15 from "../ClientLogo/15.png";
import img16 from "../ClientLogo/16.png";
import img17 from "../ClientLogo/17.png";
import img18 from "../ClientLogo/18.png";
import img19 from "../ClientLogo/19.png";
import img20 from "../ClientLogo/20.png";
import img21 from "../ClientLogo/21.png";
import img22 from "../ClientLogo/22.png";
import img23 from "../ClientLogo/23.png";
import img24 from "../ClientLogo/24.png";
import img25 from "../ClientLogo/25.png";
import img26 from "../ClientLogo/26.png";
import img27 from "../ClientLogo/27.png";
import img28 from "../ClientLogo/28.png";



const reviews = [
  {

    img: img1,
  },
  {

    img: img2,
  },
  {

    img: img3,
  },
  {

    img: img4,
  },
  {

    img: img5,
  },
  {

    img: img6,
  },
  {

    img: img7,
  },
  {

    img: img8,
  },
  {

    img: img9,
  },
  {

    img: img10,
  },
  {

    img: img11,
  },
  {

    img: img12,
  },

  {

    img: img13,
  },
  {

    img: img14,
  },
  {

    img: img15,
  },
  {

    img: img16,
  },
  {

    img: img17,
  },

  {

    img: img18,
  },
  {

    img: img19,
  },
  {

    img: img20,
  },
  {

    img: img21,
  },

  {

    img: img22,
  },
  {

    img: img23,
  },

  {

    img: img24,
  },
  {

    img: img25,
  },
  {

    img: img26,
  },
  
  {
    img:img27,
  },
  {
    img:img28,
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
// const secondRow = reviews.slice(1, reviews.length / 1);

const ReviewCard = ({ img }) => {
  return (
    <figure className="relative w-64 h-40 cursor-pointer overflow-hidden rounded-xl mt-5 mb-6 border border-gray-300 bg-gray-100 hover:bg-gray-200 mx-2 flex flex-col">
      <img
        className="object-cover w-full h-full"
        alt="Client Logo"
        src={img}
      />
    </figure>
  );
};


const Blogslider = () => {
  return (
    <div className="overflow-hidden ">
      {/* Content Section */}
      <div className="text-center">
        <h2 className="text-3xl text-black font-bold mt-4">
          Our Clients
        </h2>
      
      </div>
      {/* Blog Slider Section */}
      <div className="relative h-auto rounded-lg  border-gray-300 p-4">
        <Marquee pauseOnHover className="[--duration:5s] flex gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:5s] flex gap-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
      </div>
    </div>
  );
};

export default Blogslider;
