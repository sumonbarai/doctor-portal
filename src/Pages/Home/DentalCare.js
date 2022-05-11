import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../Shared/Button";

const DentalCare = () => {
  return (
    <div className="container mx-auto my-10 px-4 md:flex justify-center items-center gap-7 ">
      <div className="md:w-2/6">
        <img
          className="rounded-md w-80 mx-auto md:w-full"
          src={treatment}
          alt=""
        />
      </div>
      <div className="md:w-3/6">
        <h2 className="text-5xl capitalize text-secondary mb-3 mt-3">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="mb-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button>get started</Button>
      </div>
    </div>
  );
};

export default DentalCare;
