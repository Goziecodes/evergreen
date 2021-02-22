import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavbarLinks from './NavLinks';

const Navigation = styled.nav`
  height: 13vh;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 1vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 9vh;
    top: 0;
    left: 0;
    right: 0;
  }

  .closeNav {
    position: relative;
    left: 35%;
    top: 0px;
  }
`;

const Toggle = styled.div`
  display: none;
  // height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 500px) {
    // @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  // background-color: red;

  @media (max-width: 500px) {
    flex-direction: column;
    position: fixed;
    width: 50%;
    height: 100vh;
    padding-top: 20px;
    justify-content: flex-start;
    // padding-top: 10vh;
    // background-color: #fff;
    transition: all 0.2s ease-in;
    top: 0vh;
    right: ${(props) => (props.open ? '-100%' : '0px')};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Navigation className="bg-white">
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <Hamburger open={navbarOpen} />
        </Toggle>

        {navbarOpen ? (
          <Navbox className="bg-white">
            <Toggle
              className="closeNav"
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Hamburger open={navbarOpen} />
            </Toggle>
            <NavbarLinks navbarOpen={navbarOpen} />
            <p className="text-xl text-center mt-96 font-bold">
              Evergreen <br /> Technologies
            </p>
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks navbarOpen={navbarOpen} />
          </Navbox>
        )}
      </Navigation>
      {/* <div className="mb-32" /> */}
    </>
  );
};

export default Nav;
