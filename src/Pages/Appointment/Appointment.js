import React from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
  return (
    <section className="appointment-area">
      <AppointmentBanner></AppointmentBanner>
      <Footer></Footer>
    </section>
  );
};

export default Appointment;
