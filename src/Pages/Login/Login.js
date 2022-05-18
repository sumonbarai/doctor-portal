import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Spinner from "../Shared/Spinner/Spinner";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(googleUser || user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  // when user in loading
  if (loading || googleLoading) {
    return <Spinner></Spinner>;
  }

  // if login error
  let errorMessage;
  if (error) {
    errorMessage = (
      <p>
        <small className="text-red-500">{error.message}</small>
      </p>
    );
  } else if (googleError) {
    errorMessage = (
      <p>
        <small className="text-red-500">{googleError.message}</small>
      </p>
    );
  }

  // user login and password
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="container mx-auto px-4 flex justify-center items-center h-[90vh]">
      <div className="card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
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
            <div>
              <Link to="/forgetPassword" className="text-secondary">
                Forget password
              </Link>
            </div>
            {errorMessage}
            <button className="btn btn-block mt-2">Login</button>
            <p className="mt-3">
              New to Doctors Portal?{" "}
              <span className="text-primary">
                <Link to="/signUp">Create new account</Link>
              </span>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-block btn-outline uppercase font-normal"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
