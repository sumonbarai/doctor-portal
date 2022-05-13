import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  // handleTreatment
  const handleTreatment = (event) => {
    event.preventDefault();
    const data = event.target.date.value;
    const schedule = event.target.schedule.value;
    const name = event.target.name.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    const obj = { data, schedule, name, number, email };
    console.log(obj);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary mb-3">{name}</h3>
          <div>
            <form
              className="grid grid-cols-1  gap-3"
              onSubmit={handleTreatment}
            >
              <input
                type="text"
                name="date"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={format(selected, "PP")}
                disabled
              />
              <select name="schedule" className="select select-bordered">
                {slots.map((schedule, index) => (
                  <option key={index} value={schedule}>
                    {schedule}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full "
                name="name"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full "
                name="number"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
                name="email"
              />
              <input
                type="submit"
                className="input input-bordered w-full  btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
