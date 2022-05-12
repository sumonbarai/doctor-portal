import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppoinments from "./AvailableAppoinments";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <section className="appointment-area">
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppoinments selected={selected}></AvailableAppoinments>
      <Footer></Footer>
    </section>
  );
};

export default Appointment;
