import React from 'react';
import map from '../../assets/images/map-pin.svg';
import phone from '../../assets/images/phone.svg';

const Footer = () => (
  <div>
    {/* <div className="css-shapes-preview" /> */}

    <footer className="mt-10 text-white bg-blue-600  body-font w-full pt-14 ">
      <div className="flex flex-wrap justify-between  w-full">
        <div className="w-1/2 ml-8 pl-10  text-left text-3xl text-white">
          <div className="flex  items-center">
            <img src={map} alt="" className="mr-4 h-14" />
            <p className=" ">
              No. 6, Azikiwe Road, <br /> Awka,Anambra
            </p>
          </div>
          <div className="flex  items-center">
            <img src={phone} alt="" className="mr-4 h-14" />
            <p className="mt-6   ">
              08162545042 <br />
              08162545042
            </p>
          </div>
        </div>

        <div className="flex mb-10  md:pl-20 md:mt-0 md:text-left ">
          <div className="w-full lg:w-1/3 md:w-1/2">
            <nav className="mb-10 list-none flex flex-col justify-end">
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  what we do
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  our projects
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  our services
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-400 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  home{' '}
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="text-white text-5xl bg-black text-center "> */}
      <p className="text-white text-4xl text-center">
        &copy; Evergreen technologies {new Date().getFullYear()}{' '}
      </p>
      {/* </div> */}
    </footer>

    {/* <p> &copy; goziecodes {new Date().getFullYear()} </p> */}
  </div>
);

export default Footer;
