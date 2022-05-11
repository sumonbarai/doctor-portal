import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
