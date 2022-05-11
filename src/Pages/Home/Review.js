import React from "react";

const Review = ({ review }) => {
  const { name, customerReview, location, img } = review;
  return (
    <div className="shadow-xl p-7 rounded-md">
      <div>
        <p>{customerReview}</p>
      </div>
      <div className="mt-3 flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h6>{name}</h6>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
