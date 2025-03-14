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
  // {

  //   img: img26,
  // },
  
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
    <figure className="relative w-64 h-24 cursor-pointer overflow-hidden rounded-xl mb-5 bg-white flex flex-col ">
  <img
    className="object-cover w-full h-full mb-0 ml-0 mr-0 transition duration-300 ease-in-out  hover:filter-none"
    alt="Client Logo"
    src={img}
  />
</figure>

  );
};


const Blogslider = () => {
  return (
    <div className="overflow-hidden">
      {/* Content Section */}
      <div className="text-center overflow-hidden">
      </div>
      {/* Blog Slider Section */}
      <div className="relative h-auto w-11/12 mx-auto items-center rounded-lg border-spacing-y-2 border-black p-1">
  <Marquee pauseOnHover speed={150} className=" flex gap-4">
    {firstRow.map((review) => (
      <ReviewCard key={review.username} {...review} />
    ))}
  </Marquee>
</div>

    </div>
  );
};

export default Blogslider;
