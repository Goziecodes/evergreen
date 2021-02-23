import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './singleProduct.css';

import cam1 from '../assets/images/cam1.png';
import cam2 from '../assets/images/cam2.png';
import cam3 from '../assets/images/cam3.png';

const SingleProduct = () => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center mb-20 text-3xl leading-none lg:text-left lg:px-40 lg:text-5xl mt-12 ">
        <h1 className="text-blue-400 mb-8">360 degree camera</h1>
      </div>

      <div className="px-8 w-full ">
        {' '}
        <Slider
          {...settings}
          className="a"
          style={{
            // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
            boxShadow: '0px 5px 23px -8px rgba(96, 165, 250, 1)',
          }}
        >
          <div>
            <img src={cam3} alt="" />
            <div className="text-2xl">
              <p>
                <b>2400Ah solar bank system</b>
              </p>
              <p>
                <b>Client: Mr. Cyril Adekunle</b>
              </p>
              <p>
                <b>Category: Solar Installation</b>
              </p>
            </div>
          </div>
          <div>
            <img src={cam1} alt="" />
          </div>
          <div>
            <img src={cam2} alt="" />{' '}
          </div>
        </Slider>
        {/* <div className="w-full h-24 bg-red-400">d</div> */}
      </div>

      <div className=" w-full mt-20 px-8  text-blue-400">
        <h1>#35,000</h1>
      </div>
      <div className=" w-full mt-20 px-8  text-black font-medium text-left text-4xl">
        <p>
          high quality polysaccharide solar panels for best mid-range
          performance for household use or industrial use
        </p>
      </div>
      <div className=" flex justify-center mb-2">
        <button
          type="button"
          className="  hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg w-80 mt-8 mb-10 text-4xl self-center sm:self-start "
          style={{
            background: '#50b34e',
            // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
            boxShadow: '1px 2px 14px 2px rgba(82, 193, 54, 1)',
          }}
        >
          make a request
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
