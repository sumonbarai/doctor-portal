import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

import DisplayAppointment from "./DisplayAppointment";

const AvailableAppoinments = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-16 px-4">
      <h4 className="text-center text-secondary text-2xl">
        Available Appointments {format(selected, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 ">
        {services.map((service) => (
          <DisplayAppointment
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></DisplayAppointment>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
