import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Spinner from "../Shared/Spinner/Spinner";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [token] = useToken(user);
  useEffect(() => {
    if (token) {
      navigate("/appointment");
    }
  }, []);

  // when user in loading
  if (loading) {
    return <Spinner></Spinner>;
  }
  // if user in in login then console log

  // user login and password
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="container mx-auto px-4 flex justify-center items-center h-[90vh]">
      <div className="card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* email address */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please enter valid email address",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password must be 6 character",
                  },
                  minLength: {
                    value: 6,
                    message: "Please enter minimum 6 character password ",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <button className="btn btn-block mt-2">Sign Up</button>
            <p className="mt-3">
              All ready have an account?{" "}
              <span className="text-primary">
                <Link to="/login">Please Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
