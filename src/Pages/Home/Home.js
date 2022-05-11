import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimoinal from "./Testimoinal";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppoinment></MakeAppoinment>
      <Testimoinal></Testimoinal>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
