import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
import PI from "./PI/Moving"
import Project from "./Project/Project"
import Vision from "./Vision/Vision";
import HomeCont1 from "./HomeCont1/HomeCont1"
import More from "./More/More"
import Team from "./Team/Team";
import HomeNoOne from "./HomeNoOne/HomeNoOne"
import HomeCont2 from "./HomeCont2/HomeCont2"
import HomePageNoFour from "./HomePageNoFour/HomePageNoFour";
import AbtCard from "./AbtCard/AbtCard";
import SamTeam from "./AbtCard/SamTeam";
// import Embedded from "./Embedded/Embedded"

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* <HeroSection /> */}
      <PI />
      <HomeNoOne />
      {/* <Vision /> */}
      <HomeCont1 />
      <HomeCont2 />
      {/* <More /> */}
      {/* <Embedded /> */}
      {/* <Team /> */}
      <SamTeam />
      {/* <Project /> */}
      <HomePageNoFour />
      <Footer />
    </div>
  );
}

export default Home;
