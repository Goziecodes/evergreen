import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { Link } from 'gatsby';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import message from '../assets/images/message-circle.svg';
import whatsapp from '../assets/images/whatsapp2.svg';
import whatsapp1 from '../assets/images/whatsapp.png';
import whatsapp2 from '../assets/images/whatsapp.gif';

const FloatingButton = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: fixed;
  // left: 90%;
  right: 0px;
  top: 63%;
  background-color: #1da9f2;
  background-image: url(${whatsapp2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 1;
`;

const Layout = ({ children }) => (
  <>
    <Link to="https://api.whatsapp.com/send?phone=2348063426769&text=I%20want%20to%20get%20solar%20panels%20from%20you">
      <FloatingButton className="" />
    </Link>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
