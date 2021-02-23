import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';
import work4 from '../assets/images/work4.jpg';
import work5 from '../assets/images/work5.jpg';

const SingleProject = () => {
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
        <h1 className="text-blue-400 mb-8">2400Ah Solar bank System</h1>
      </div>

      <div className="px-8 w-full ">
        {' '}
        <Slider {...settings} className="">
          <div>
            <img src={work1} alt="" />
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
            <img src={work2} alt="" />
          </div>
          <div>
            <img src={work3} alt="" />{' '}
          </div>
          <div>
            <img src={work4} alt="" />{' '}
          </div>
          <div>
            <img src={work5} alt="" />{' '}
          </div>
        </Slider>
        {/* <div className="w-full h-24 bg-red-400">d</div> */}
      </div>

      <div className="mb-20 text-3xl text-left px-5 lg:px-5 lg:text-4xl mt-20 ">
        <h1 className="text-blue-400 mb-8">
          <span>The</span>{' '}
          <span>
            <b
              className="text-blue-500 font-normal"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Problem
            </b>
          </span>
        </h1>
        <div className="w-full md:w-1/2 lg:text-5xl text-left text-black text-3xl font-medium">
          <h2>
            The client wanted a solar set up to power his house and all
            appliances, this included two freezers, 4 ac units, 8 fans, 12 bulbs
            and a micro wave
          </h2>
        </div>
      </div>
      <h2
        className="text-blue-400 text-center text-4xl mb-8"
        style={{ fontFamily: 'GilroyBold' }}
      >
        The Process
      </h2>

      <div className="text-left  w-full text-blue-400 px-10">
        <div className="w-1/2">
          <h2
            className="text-blue-400 text-5xl mb-8"
            style={{ fontFamily: 'GilroyBold' }}
          >
            Power calculation
          </h2>
          <p className="text-3xl font-bold">
            The first step was to calculate the power consumption rate and
            wattage of his appliances to ascertain exactly how much power is
            needed to comfortably power these appliances
          </p>
        </div>
      </div>

      <div className="text-right flex flex-col items-end w-full mt-20 text-red-400 px-10">
        <div className="w-1/2">
          {' '}
          <h2
            className="text-red-400 text-5xl mb-8"
            style={{ fontFamily: 'GilroyBold' }}
          >
            Component Selection
          </h2>
          <p className="text-3xl font-bold  0">
            next we get the best materials, panels, deep cycle batteries, charge
            controllers and others neeeded for project
          </p>
        </div>
      </div>

      <div className="text-left w-full mt-20 text-pink-400 px-10">
        <div className="w-1/2">
          {' '}
          <h2
            className="text-pink-400 text-5xl mb-8"
            style={{ fontFamily: 'GilroyBold' }}
          >
            Installation
          </h2>
          <p className="text-3xl font-bold">
            We oversee the installation of the solar system from mounting the
            panels to wiring the electrical comonents and interfacing the system
            with the house power supply, making sure they are setup for optimum
            performance and ensure the whole system doesnt take up uneccessary
            space.
          </p>
        </div>
      </div>

      <div className="h-96 w-full mt-40">
        <h1>Under Construction.....</h1>
      </div>
    </>
  );
};

export default SingleProject;
