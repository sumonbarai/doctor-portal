import React from "react";

const InfoCard = ({ img, cardTitle, infoBg }) => {
  return (
    <div className={`card card-side shadow-xl text-white p-5 ${infoBg}`}>
      <figure>
        <img className="w-16" src={img} alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
