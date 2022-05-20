import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container px-4 mx-auto">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-side-bar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-4">
          {/* <!-- Page content here --> */}
          <h2 className="text-4xl text-orange-400 font-bold text-center mt-4">
            Welcome to my dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-side-bar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 overflow-y-auto max-w-xs bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctor">Manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
