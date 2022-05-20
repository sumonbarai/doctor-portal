import React from "react";
import toast from "react-hot-toast";

const DoctorRow = ({ index, doctor, refetch }) => {
  const { name, email, specialty, img } = doctor;
  const handleDelete = () => {
    const confirmation = window.confirm("are sure delete?");
    if (confirmation) {
      fetch(`https://powerful-coast-15220.herokuapp.com/doctor/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("delete successfully");
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-xs btn-error">
          Tiny
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
