import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myappoinment from "./Pages/Dashboard/Myappoinment";
import Myreview from "./Pages/Dashboard/Myreview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import Users from "./Pages/Dashboard/Users";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/forgetPassword"
          element={<ForgetPassword></ForgetPassword>}
        />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Myappoinment></Myappoinment>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="signUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
