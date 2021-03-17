import { Link } from "gatsby";
import React from "react";
import map from "../../assets/images/map-pin.svg";
import phone from "../../assets/images/phone.svg";

const Footer = () => (
  <div>
    {/* <div className="css-shapes-preview" /> */}

    <footer className="mt-10 text-white bg-blue-500  body-font w-full pt-14 ">
      <div className="flex flex-wrap justify-between  w-full">
        <div className="w-1/2 ml-8   text-left text-2xl sm:text-3xl text-white">
          <div className="flex  items-center mb-4">
            <img src={map} alt="" className="mr-4 h-14" />
            <p className=" ">
              No. 53 Azikiwe Road, <br /> Aba, Abia State
            </p>
          </div>
          <div className="flex  items-center">
            <img src={phone} alt="" className="mr-4 h-14" />
            <p className="mt-6   ">
              07053038406 <br />
              08063426769
            </p>
          </div>
        </div>

        <div className="flex mb-10  md:pl-20 md:mt-0 md:text-left ">
          <div className="w-full lg:w-1/3 md:w-1/2">
            <nav className="mb-10 list-none flex flex-col justify-end">
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <a
                  href="#"
                  className="text-3xl text-gray-50 px-4 hover:text-gray-800"
                >
                  Home{" "}
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <Link
                  className="text-3xl text-gray-50 px-4 hover:text-gray-800"
                  to="/#services"
                >
                  what we do
                </Link>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <Link
                  className="text-3xl text-gray-50 px-4 hover:text-gray-800"
                  to="/#products"
                >
                  our products
                </Link>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <Link
                  className="text-3xl text-gray-50 px-4 hover:text-gray-800"
                  to="/#projects"
                >
                  our projects
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="text-white text-5xl bg-black text-center "> */}
      <p className="text-white text-3xl text-center">
        &copy; Evergreen Technologies Nigeria Ltd {new Date().getFullYear()}{" "}
      </p>
      {/* </div> */}
    </footer>

    {/* <p> &copy; goziecodes {new Date().getFullYear()} </p> */}
  </div>
);

export default Footer;
