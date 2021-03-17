import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleProduct.css";

import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.png";
import { Container } from "postcss";

const SingleProduct = ({ data: { product } }) => {
  console.log(product, "jjjjjjjjjjjjjjjjjjjjjjjjjjjj");
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

  return (
    <>
      <div className="text-center mb-20 text-3xl leading-none lg:text-5xl mt-12 ">
        <h1 className="text-blue-400 mb-8">
          <b>{product.name}</b>
        </h1>
      </div>

      {product && product.productImages.length >= 1 ? (
        <div className="px-8 w-full  ">
          <Slider
            {...settings}
            className="a"
            style={{
              // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
              boxShadow: "0px 5px 23px -8px rgba(96, 165, 250, 1)",
            }}
          >
            {product.productImages.map((productImage) => (
              <div>
                <Img fluid={productImage.asset.fluid} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="  w-10/12 h-45 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0 ">
            <Img
              fixed={product.image.asset.fluid}
              alt=""
              className="	w-full h-full"
              // objectFit="contain"
              imgStyle={{ objectFit: "contain" }}
              style={{
                boxShadow: "rgb(173 195 173) 6px 2px 16px 3px",
              }}
            />
          </div>
        </div>
      )}

      {/* <div className=" w-full mt-20 px-8  text-blue-400">
        <h1>#35,000</h1>
      </div> */}

      <div className=" w-full mt-14 px-8  text-black font-medium text-left text-4xl text-center">
        <p>{product.description}</p>
      </div>
      <div className=" flex flex-col justify-center mb-2">
        <div className=" w-full mt-20 px-8  text-blue-600 text-center">
          <h4>want to make an order? use the button below</h4>
        </div>
        <a
          // type="button"
          href={`https://api.whatsapp.com/send?phone=2348063426769&text=I%20am%20interested%20in%20this%20${product.name}%20${window.location.href}`}
          className="  hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg w-80 mt-8 mb-10 text-4xl self-center text-center "
          style={{
            background: "#50b34e",
            // boxShadow: 'rgba(80, 179, 80, 1) 5px 8px 16px 6px',
            boxShadow: "1px 2px 14px 2px rgba(82, 193, 54, 1)",
          }}
        >
          make a request
        </a>
        <h4 className="text-center">
          or call us at{" "}
          <b>
            <a href="tel:08063426769">08063426769</a>
          </b>
        </h4>
      </div>
    </>
  );
};

// this needs to be be dynamic based on shirt slug passed in via context in gatsby-node.js

export const query = graphql`
  query($slug: String!) {
    product: sanityProducts(slug: { current: { eq: $slug } }) {
      name
      id
      category
      description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      productImages {
        asset {
          fluid(maxWidth: 800, maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
export default SingleProduct;
