import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const MakeAppoinment = () => {
  return (
    <section style={{ background: `url(${appointment})`, marginTop: "100px" }}>
      <div className="container mx-auto my-8 px-4 md:flex justify-center items-center">
        <div className="md:w-1/3 ">
          <img className="md:mt-[-118px]" src={doctor} alt="" />
        </div>
        <div className="text-white md:w-2/3">
          <h2 className="text-secondary">Appointment</h2>
          <h4 className="py-2 text-3xl">Make an appointment Today</h4>
          <p className="py-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>get started</Button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
