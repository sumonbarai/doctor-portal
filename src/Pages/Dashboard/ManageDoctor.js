import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch("https://powerful-coast-15220.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2 className="text-2xl uppercase text-orange-600 text-center pt-4">
        all doctor hear {doctors.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={index}
                index={index}
                doctor={doctor}
                refetch={refetch}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
