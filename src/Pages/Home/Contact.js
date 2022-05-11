import React from "react";
import Button from "../Shared/Button";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="bg-fixed bg-no-repeat bg-cover bg-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="container mx-auto my-16 px-4 py-14">
        <div className="text-center">
          <h2 className="text-secondary uppercase text-2xl">contact us</h2>
          <h3 className="text-3xl capitalize mb-4 text-white">
            Stay connected with us
          </h3>
        </div>
        <div className="text-center">
          <form>
            <div>
              <input
                type="text"
                placeholder="Email address"
                class="input input-bordered input-sm w-full max-w-md my-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                class="input input-bordered input-sm w-full max-w-md my-2"
              />
            </div>
            <div>
              <textarea
                class="textarea textarea-bordered w-full max-w-md my-2"
                placeholder="Bio"
              ></textarea>
            </div>
            <Button>submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
