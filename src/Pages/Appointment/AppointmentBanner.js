import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse lg:gap-8">
          <img
            src={chair}
            class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
      <p>You picked {format(selected, "PP")}</p>
    </>
  );
};

export default AppointmentBanner;
