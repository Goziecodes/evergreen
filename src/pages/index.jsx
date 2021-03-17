/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Slider from 'react-slick';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
// import dotenv from "dotenv";

import './index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bulbguy from '../assets/images/bulbguy.svg';
import innovation from '../assets/images/Innovation.svg';
import Solar from '../assets/images/solar-panel.inline.svg';
import Camera from '../assets/images/security-camera2.inline.svg';
import home from '../assets/images/home.svg';
import map from '../assets/images/map-pin.svg';
import message1 from '../assets/images/message-circle.svg';
import message2 from '../assets/images/message-square.svg';
import send from '../assets/images/send.svg';
import services from '../assets/images/tool.svg';
import user from '../assets/images/user.svg';
import arrow from '../assets/images/arrow-right.svg';
import briefcase from '../assets/images/briefcase.svg';
import phone from '../assets/images/phone.svg';
import img1 from '../assets/images/close.png';
import cam1 from '../assets/images/cam1.png';
import panel from '../assets/images/panel.jpg';
import ba3 from '../assets/images/ba3.png';
import charge from '../assets/images/charge.png';

import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';
import work4 from '../assets/images/work4.jpg';
import work5 from '../assets/images/work5.jpg';

import SEO from '../components/SEO';

// import DesignsFilter from '../components/DesignsFilter/DesignsFilter';
// import ShirtsList from '../components/Shirts';
// import useLatestData from '../utils/useLatestData';
// import { HomePageGrid } from '../styles/Grids';
// import LoadingGrid from '../components/LoadingGrid/LoadingGrid';
// import ItemGrid from '../components/ItemGrid/ItemGrid';

// const H1 = styled.h1`
//   font-size: 5rem;
//   @media (min-width: 300px) {
//     font-size: 5.5rem;
//   }

//   @media (min-width: 640px) {
//     font-size: 4vw;
//   }
// `;

const HomePage = ({ data }) => {
  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  // const shirtList = data.shirts.nodes;
  const homepageProducts = data.products.nodes;
  const homepageProjects = data.allSanityProjectsGallery.nodes;
  // console.log(data);
  // console.log("see my dataa", homepageProducts);

  const settings = {
    autoplay: true,
    arrows: false,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      number,
      message,
    };

    emailjs
      .send(
        'service_vdxv9rs',
        'template_548zm8i',
        templateParams,
        'user_6Tb9hqiXSez1KZsSQ3lTy'
      )
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            text: 'email sent',
            target: '#custom-target',
            customClass: {
              container: 'position-absolute',
            },
            toast: true,
            position: 'center-center',
          });
        },
        function (error) {
          // console.log("FAILED...", error);
          Swal.fire({
            text: 'something went wrong, try again',
            target: '#custom-target',
            customClass: {
              container: 'position-absolute',
            },
            toast: true,
            position: 'center-center',
          });
        }
      );
  };

  return (
    <>
      <SEO title="our Customers" />

      <section className="bg-white w-screen flex items-end lg:items-center flex-wrap  sm:px-20  sm:flex sm:flex-row  sm:pt-12 sm:justify-center sm:flex-row-reverse ">
        <div className="w-full sm:w-1/2 overflow-hidden">
          <img
            className="w-full h-screen/2 relative left-20 sm:static sm:left-0  sm:bg-contain sm:h-auto"
            src={bulbguy}
            alt=""
          />
        </div>
        <div
          className="w-full sm:w-1/2 sm:h-1/2 text-4xl leading-none sm:text-4xl flex flex-col  sm:leading-normal  md:text-5xl lg:text-6xl sm:flex sm:flex-col md:justify-center sm:text-responsive"
          // style={{
          //   fontSize: '6vw',
          //   lineHeight: '12.5vw',
          // }}
        >
          <div className="pl-20 sm:p-0">
            <h1 className="font-medium">Save up on</h1>
            <h1 className="font-medium">
              <b
                className="text-blue-500 font-medium"
                style={{ fontFamily: 'GilroyBold' }}
              >
                Electricity
              </b>
            </h1>

            <h1 style={{ fontFamily: 'GilroyBold' }}>
              <span className="text-blue-300 font-medium">Gasoline</span>
              <span className="text-blue-500 font-medium"> Bills</span>
            </h1>
          </div>

          <button
            type="button"
            className="  hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg w-60 mt-10 text-4xl self-center sm:self-start "
            style={{
              background: '#50b34e',
              // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
              boxShadow: '1px 2px 14px 2px rgba(82, 193, 54, 1)',
            }}
          >
            <a href="/#contact" className="text-white">
              Start now
            </a>
          </button>
        </div>
        {/* <div className="text-center w-full "> */}
        {/* <button
          type="button"
          className="  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-20"
          style={{ background: '#50b34e' }}
        >
          Start now
        </button> */}
        {/* </div> */}
      </section>

      <section className="bg-white w-screen  mt-72">
        <div className="container mx-auto w-11/12">
          <div className="text-center px-8 md:text-left mb-2 mt-20 text-4xl sm:text-5xl">
            <h1 className="text-blue-400">
              <span
                className="text-blue-500 "
                style={{ fontFamily: 'GilroyBold' }}
              >
                What
              </span>{' '}
              <b> we do</b>{' '}
            </h1>
          </div>

          <div className=" flex flex-col lg:flex-row lg:justify-around w-full h-auto mt-20">
            <div className="text-left px-8 sm:text-5xl text-4xl leading-normal flex justify-center   md:leading-loose text-black">
              <p className="font-medium antialiased">
                <b
                  className="font-medium leading-10"
                  style={{ fontFamily: 'GilroyBold' }}
                >
                  Evergreen Technologies
                </b>{' '}
                provides innovative eco-friendly power solutions using solar
                energy and advanced power storage devices for total independence
                from the power grid and save you the running cost of electricity
                and Generator bills!
              </p>
            </div>

            <img
              src={innovation}
              alt=""
              className="  w-full bg-center bg-contain bg-no-repeat mb-2  md:relative lg:bottom-14 md:left-14"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full px-10  h-auto mt-32 md:mt-0">
        <div className="text-center mb-20 text-4xl lg:text-right lg:text-5xl ">
          <h1 className="text-blue-400 mb-8 mt-20 ">
            <span>Our</span>{' '}
            <span>
              <b
                className="text-blue-500 font-normal"
                style={{ fontFamily: 'GilroyBold' }}
              >
                Services
              </b>
            </span>
          </h1>
        </div>

        <div className="mb-20">
          <div className="text-left text-5xl px-2 text-blue-500 lg:text-right mb-8">
            <h3>
              <b>CCTV Installations</b>
            </h3>
          </div>

          <div className="px-2 text-4xl leading-normal md:text-5xl text-black font-medium  md:leading-loose mb-12 flex  flex-row-reverse  justify-between  lg:flex-row">
            <div className="h-96 lg:h-35 w-75  lg:relative lg:bottom-40 ">
              <Camera className="w-full h-full transform scale-x-minus1 lg:transform-none" />
            </div>
            <div className="justify-self-end lg:text-right lg:w-9/12">
              <p className="">
                We handle installation and maintenance of security cameras in
                home and business enviroments, safe guarding your properties and
                giving you peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-right text-5xl px-2 text-blue-500  mb-8">
            <h3>
              <b>
                {' '}
                Solar Installations <br /> & Maintenance
              </b>
            </h3>
          </div>

          <div className="px-2 text-right text-4xl leading-normal md:text-5xl text-black font-medium md:leading-loose mb-12 flex   justify-between  flex-row">
            <div className="h-96 w-63 lg:h-35 lg:w-75  lg:relative lg:bottom-40 ">
              <Solar className="w-full h-full" />
            </div>
            <div className="justify-self-end  lg:w-9/12">
              <p className="">
                Our Expertise lies in the installation, repairs and maintenance
                of solar panels and iverter systems for households, small and
                large scale businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="w-full overflow-hidden h-auto bg-white mt-8 clear-both "
      >
        <div className="flex justify-around mb-8">
          <h1 className="text-center">
            <span className="text-blue-400">Our</span>{' '}
            <span
              className="text-blue-500 font-medium"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Products
            </span>
          </h1>
        </div>
        <div className="container px-5 py-2 mx-auto lg:px-32">
          <div className="flex flex-wrap  justify-evenly mx-auto text-black font-medium  text-sm leading-none ">
            {homepageProducts &&
              homepageProducts.map((product) => (
                <div
                  key={product.image.asset._id}
                  className="w-72 h-96 mt-6 lg:w-96 lg:mt-0 border-2 border-gray-200 rounded-lg"
                >
                  {/* <img
                    alt=""
                    className="object-cover object-center w-full h-4/5"
                    src={panel}
                  /> */}
                  <Link to={`/product/${product.slug.current}`}>
                    <div className="h-4/5 w-full">
                      <Img
                        className="w-full h-full"
                        fluid={product.image.asset.fluid}
                      />
                    </div>
                  </Link>

                  <div className="flex  px-4 mx-auto mt-2 items-center sm:flex-row sm:items-center">
                    <h1 className="flex-grow   mb-2  tracking-tighter  title-font">
                      {product.name}
                    </h1>
                    <a
                      href={`https://api.whatsapp.com/send?phone=2348063426769&text=I%20am%20interested%20in%20this%20${product.name}%20${product.image.asset.fluid.src}`}
                      type="button"
                      className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                    >
                      <img src={message1} alt="" />
                    </a>
                    {/* <button
                      type="button"
                      className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                    >
                      <img src={message} alt="" />
                    </button> */}
                  </div>
                </div>
              ))}

            <div className="w-full container text-center mt-20">
              <button
                type="button"
                className="bg-blue-400  p-4 w-1/2 rounded-full"
              >
                <Link
                  className="text-white text-3xl font-medium"
                  to="/products"
                >
                  {' '}
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-20 h-auto mb-20 px-2">
        <div className="flex justify-between mb-8 pl-8">
          <h1 className="text-center text-5xl">
            <span className="text-blue-400">Our</span>{' '}
            <span
              className="text-blue-500 font-medium"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Projects
            </span>
          </h1>

          {/* <button
            type="button"
            className="mr-5 br-20 bg-blue-400 hover:bg-blue-700 text-white font-bold   rounded-lg text-lg  focus:outline-none focus:bg-blue-700"
            style={{ transition: " all .15s ease" }}
          >
            <Link className="text-white" to="/projects">
              <b>See More ⇒</b>
            </Link>
          </button> */}
        </div>

        <div className="px-8 mb-4  text-black font-medium">
          An extract of some of our executed projects in various locations
          around the country...
        </div>

        <div className="px-8 w-full ">
          {' '}
          <Slider {...settings} className=" ">
            {homepageProjects &&
              homepageProjects.map((project) => (
                <div className="" key={project.image.asset._id}>
                  <Img fluid={project.image.asset.fluid} alt="" />
                  <div className="text-2xl text-center">
                    <p>
                      <b>{project.description}</b>
                    </p>
                  </div>
                </div>
              ))}

            {/* <div>
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
              <img src={work3} alt="" />{" "}
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
              <img src={work4} alt="" />{" "}
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
              <img src={work5} alt="" />{" "}
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
            </div> */}
          </Slider>
          {/* <div className="w-full h-24 bg-red-400">d</div> */}
        </div>
      </section>

      <section id="contact" className="h-auto w-full px-8 bg-white mt-44 ">
        {/* text-4xl leading-small */}
        {/* md:text-5xl */}
        <div className="w-full px-2 md:text-center font-medium">
          <h1 className="mb-8">
            <span
              className="text-blue-500"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Contact
            </span>{' '}
            <span className="text-blue-400">Us</span>
          </h1>
          <p className="mb-8">
            <span className="text-blue-500 ">
              <b>Got a Question??</b>{' '}
            </span>
            reach out to us today
          </p>
          <p>use the form below to email us, or chat with us on whatsapp!</p>
        </div>

        {/* <div className="flex justify-between mb-8 pl-8">
          <h1 className="text-center text-5xl">
            <span className="text-blue-400">Our</span>{' '}
            <span
              className="text-blue-500 font-medium"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Projects
            </span>
          </h1> */}

        <div className="container mx-auto pt-8 w-full lg:w-3/5">
          <div className="form  mt-8 mb-8 ">
            <form onSubmit={handleSubmit} className="w-full ">
              <div className=" flex  mb-8">
                <div className="bg-blue-400 w-20  brr-20  rounded-l-lg flex justify-center items-center">
                  <img src={user} alt="" />
                </div>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full Name"
                  className="px-3 py-5 text-3xl w-full placeholder-gray-400 text-gray-700  bg-white bg-white rounded-r-lg  shadow outline-none focus:outline-none focus:shadow-outline  pl-10 border-2 border-blue-400"
                />
              </div>

              <div className=" flex  mb-8">
                <div className="bg-blue-400 w-20  brr-20 rounded-l-lg flex justify-center items-center">
                  <img src={phone} alt="" />
                </div>
                <input
                  type="text"
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Your mobile Number"
                  className="px-3 py-5 text-3xl w-full placeholder-gray-400 text-gray-700  bg-white bg-white rounded-r-lg  shadow outline-none focus:outline-none focus:shadow-outline  pl-10 border-2 border-blue-400"
                />
              </div>

              <div className=" flex flex-col mb-12">
                <div className="bg-blue-400 w-full h-20 brr-20 rounded-t-lg flex px-4  items-center text-white">
                  <img src={message2} alt="" className="mr-14" />
                  <h3>Your message/enquiry</h3>
                </div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="rounded-b-lg border-2 border-blue-400"
                />
              </div>

              <div className=" flex justify-center mb-2">
                <button
                  type="submit"
                  className="  hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg w-60 mt-4 mb-10 text-4xl self-center sm:self-start "
                  style={{
                    background: '#50b34e',
                    // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
                    boxShadow: '1px 2px 14px 2px rgba(82, 193, 54, 1)',
                  }}
                >
                  Submit
                </button>
              </div>
              <div
                className="a relative border-solid  h-52 w-96"
                id="custom-target"
              />
            </form>
          </div>
          {/* <div className="text-center text-blue-500">
            <h1 style={{ fontFamily: 'GilroyBold' }}>
              <b>OR</b>
            </h1>
          </div>
          <div className="container mx-auto w-full sm:w-1/2">ffff</div> */}
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query HomePageProductsQuery {
    products: allSanityHomePageProducts {
      totalCount
      nodes {
        id
        name
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
            _id
          }
        }
        slug {
          current
        }
      }
    }
    allSanityProjectsGallery {
      nodes {
        description
        image {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
            _id
          }
        }
      }
    }
  }
`;
export default HomePage;
