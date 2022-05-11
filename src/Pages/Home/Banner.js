import React from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import Button from "../Shared/Button";
const Banner = () => {
  return (
    <div
      className="banner-area bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgChair})` }}
    >
      <section className="container mx-auto">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="lg:max-w-lg rounded-lg shadow-2xl"
              alt="banner photos"
            />
            <div>
              <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quibusdam quam praesentium suscipit tenetur vitae repudiandae
                odit, animi amet culpa illum beatae omnis, voluptatibus eligendi
                quasi nulla vel cupiditate rem. Non quia odit voluptate adipisci
                maxime cupiditate quas accusamus omnis incidunt, dolorem ipsum,
                maiores nemo. Excepturi ducimus aliquid eaque voluptatibus
                dolorum eius quo, aliquam debitis officia quidem tenetur
                suscipit impedit nemo sequi obcaecati in doloremque. Molestias,
                quasi aliquid et necessitatibus iste quisquam rem sit voluptas
                repellat? Magni saepe ipsam, numquam cumque optio atque enim
                pariatur beatae perspiciatis non doloremque placeat nostrum
                iure. Odit, doloribus minus? Nostrum deleniti ipsa impedit
                labore.
              </p>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
