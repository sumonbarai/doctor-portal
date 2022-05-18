import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Myappoinment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://powerful-coast-15220.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-orange-400 uppercase m-2">
        this is my appointment route {appointment.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((single, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{single.patientName}</td>
                <td>{single.date}</td>
                <td>{single.schedule}</td>
                <td>{single.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappoinment;
