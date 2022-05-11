import React from "react";
import InfoCard from "./InfoCard";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";
import clock from "../../assets/icons/clock.svg";

const Info = () => {
  return (
    <div className="info-area container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
      <InfoCard
        infoBg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        infoBg="bg-accent"
        cardTitle="Visit our location"
        img={marker}
      ></InfoCard>
      <InfoCard
        infoBg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact us now"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
