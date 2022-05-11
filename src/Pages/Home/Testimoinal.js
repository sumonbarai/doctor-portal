import React from "react";
import qoute from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimoinal = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      customerReview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      customerReview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      customerReview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people3,
    },
  ];
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-secondary text-2xl">Testimoinal</h2>
          <h3 className="text-3xl capitalize">what our patients says</h3>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={qoute} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimoinal;
