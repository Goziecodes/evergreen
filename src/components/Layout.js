import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import message from '../assets/images/message-circle.svg';
import whatsapp from '../assets/images/whatsapp2.svg';

const FloatingButton = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: fixed;
  // left: 90%;
  right: 0px;
  top: 63%;
  background-color: #1da9f2;
  background-image: url(${whatsapp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 1;
`;

const Layout = ({ children }) => (
  <>
    <FloatingButton className=" " />
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
