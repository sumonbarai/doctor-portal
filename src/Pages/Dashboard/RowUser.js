import React from "react";
import toast from "react-hot-toast";

const RowUser = ({ user, index }) => {
  const { email, roll } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {roll !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">remove Admin</button>
      </td>
    </tr>
  );
};

export default RowUser;
