import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const [specialty, setSpecialty] = useState([]);
  useEffect(() => {
    fetch("https://powerful-coast-15220.herokuapp.com/serviceSociality")
      .then((res) => res.json())
      .then((data) => setSpecialty(data));
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const ImageStorageKey = "9e9351bf7ec61f0e801e3e46ff782ed6";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const fromData = new FormData();
    fromData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((result) => {
        const img = result.data.url;
        if (result.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send form data in my data base
          fetch("https://powerful-coast-15220.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.acknowledged === true) {
                toast.success("successfully added in database");
                reset();
              } else {
                toast.error("Don't added in database");
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Add to Doctor</h2>
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
            {/* Name field */}
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
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Specialty field */}
            <div className="form-control w-full max-w-xs">
              <select
                className="select w-full max-w-xs input-bordered"
                {...register("specialty")}
              >
                {specialty.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            {/* image */}
            <div className="form-control w-full max-w-xs mt-3">
              <input type="file" {...register("image")} />
            </div>

            <button className="btn btn-block mt-3">add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
