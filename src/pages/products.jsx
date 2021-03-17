import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.png";
import cam4 from "../assets/images/cam4.png";
import panel from "../assets/images/panel.jpg";
import panel2 from "../assets/images/panel2.png";
import ba3 from "../assets/images/ba3.png";
import charge from "../assets/images/charge.png";
import inverter from "../assets/images/inverter.png";
import message from "../assets/images/message-circle.svg";

const Products = ({ data }) => {
  console.log(data);
  const [showSolar, setshow] = useState(true);
  const [solarProducts, setSolarProducts] = useState([]);
  const [securityProducts, setSecurityProducts] = useState([]);

  useEffect(() => {
    setSolarProducts(
      data.products.nodes.filter((product) => product.category === "solar")
    );
    setSecurityProducts(
      data.products.nodes.filter((product) => product.category === "security")
    );
  }, [data.products.nodes]);

  return (
    <>
      <div className="text-center mb-20 text-4xl lg:text-left lg:px-40 lg:text-5xl mt-12 ">
        <h1 className="text-blue-400 mb-8">
          <span>Our</span>{" "}
          <span>
            <b
              className="text-blue-500 font-normal"
              style={{ fontFamily: "GilroyBold" }}
            >
              Products
            </b>
          </span>
        </h1>
      </div>

      <div className="text-left text-5xl px-8 lg:px-40 text-blue-500  mb-8">
        <h3>
          <b>Categories</b>
        </h3>

        <div className="w-96 flex border border-blue-400 rounded-full text-4xl mt-8 overflow-hidden">
          <button
            type="button"
            onClick={() => setshow(true)}
            className={`w-1/2 ${
              showSolar ? "bg-blue-400 text-white" : "bg-white text-blue-400"
            }  text-center focus:outline-none`}
          >
            <p>Solar</p>
          </button>
          <button
            type="button"
            onClick={() => setshow(false)}
            className={`w-1/2 ${
              showSolar ? "bg-white text-blue-400" : "bg-blue-400 text-white"
            }  text-center focus:outline-none`}
          >
            <p>Security</p>
          </button>
        </div>
      </div>

      {showSolar ? (
        <div className="container px-5 py-2 mx-auto lg:px-30">
          <div className="flex flex-wrap  justify-evenly mx-auto ">
            {solarProducts.map((solarProduct) => (
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <Link to={`/product/${solarProduct.slug.current}`}>
                  <Img
                    // className="object-cover object-center w-full h-64 rounded-lg lg:h-96"
                    fluid={solarProduct.image.asset.fluid}
                    style={{
                      boxShadow: "rgb(173 195 173) 6px 2px 16px 3px",
                    }}
                  />
                </Link>

                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-black title-font">
                    {solarProduct.name}
                  </h1>
                  <Link
                    to={`/product/${solarProduct.slug.current}`}
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    <img src={message} alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container px-5 py-2 mx-auto lg:px-32">
          <div className="flex flex-wrap  justify-evenly mx-auto ">
            {securityProducts.map((securityProduct) => (
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <Link to={`/product/${securityProduct.slug.current}`}>
                  <Img
                    // className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                    fluid={securityProduct.image.asset.fluid}
                    style={{
                      boxShadow: "rgb(173 195 173) 6px 2px 16px 3px",
                    }}
                  />
                </Link>

                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-black title-font">
                    {securityProduct.name}
                  </h1>
                  <Link
                    to={`/product/${securityProduct.slug.current}`}
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    <img src={message} alt="" />
                  </Link>
                </div>
              </div>
            ))}

            {/* <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={cam2}
                  style={{
                    boxShadow: "rgb(173 195 173) 6px 2px 16px 3px",
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-black title-font">
                    Batteries{" "}
                  </h1>
                  <Link
                    to="/button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    <img src={message} alt="" />
                  </Link>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
};

export const query = graphql`
  query AllProductsQuery {
    products: allSanityProducts {
      totalCount
      nodes {
        slug {
          current
        }
        description
        id
        category
        name
        image {
          asset {
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default Products;
