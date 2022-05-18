import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  // handleTreatment
  const handleTreatment = (event) => {
    event.preventDefault();
    const schedule = event.target.schedule.value;
    const number = event.target.number.value;
    const formatedDate = format(selected, "PP");
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formatedDate,
      schedule,
      patient: user.email,
      patientName: user.displayName,
      phone: number,
    };

    fetch("https://powerful-coast-15220.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(
            `appointment is set on ${booking.date} at ${booking.schedule}`
          );
        } else {
          toast.error(
            `all have an appointment ${data.booking?.date} at ${data.booking?.schedule}`
          );
        }

        // close modal
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
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
                value={user?.displayName || ""}
                disabled
              />

              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
                name="email"
                value={user?.email || ""}
                disabled
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full "
                name="number"
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
