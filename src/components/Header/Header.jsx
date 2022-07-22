import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "./img4.svg";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
    
  return (
    <ReactNavbar
      navColor1="var(--black)"
      navColor2="var(--blue)"
      burgerColor="var(--orange)"
      burgerColorHover="var(--orange)"
      logo={logo}
      logoWidth="500px"
      logoHoverColor="var(--white)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="Services"
      link3Text="Goals"
      link4Text="About"
      link1Url="/"
      link2Url="/services"
      link3Url="/goals"
      link4Url="/about"
      link1ColorHover="var(--orange)"
      link1Color="white"
      link1Size="1.8rem"
      link1Padding="3vmax"
      profileIcon={true}
      profileIconUrl='/login'
      ProfileIconElement={FaUserAlt}
      profileIconColor="white"
      profileIconColorHover="var(--orange)"
    />
  );
};

export default Header;
