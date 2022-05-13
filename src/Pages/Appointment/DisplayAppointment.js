import React from "react";

const DisplayAppointment = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length >= 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="my-modal-3"
            className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary text-white uppercase border-0"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppointment;
