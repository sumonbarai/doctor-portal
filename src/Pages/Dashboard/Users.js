import React, { useEffect, useState } from "react";
import RowUser from "./RowUser";

const Users = () => {
  const [myUser, setMyUser] = useState([]);
  useEffect(() => {
    fetch("https://powerful-coast-15220.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyUser(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl text-center">Show all users {myUser.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {myUser.map((user, index) => (
              <RowUser key={user._id} index={index} user={user}></RowUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
