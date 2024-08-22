import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   register: This function is used to register an input or select element and apply validation rules to it.
  // handleSubmit: This function handles the form submission and is used to wrap your form submission logic.
  // formState: { errors }: This extracts the errors object from the form state, which contains any validation errors for the registered fields.
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-9cwn.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("signup successful");
          toast.success("Signedup successful");
          // <Navigate to="/" />;
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          // alert();
          toast.error("err" + err.response.data.message);
        }
      });
    // console.log(data);
  };
  return (
    <>
      <div className="flex h-screen items-cente justify-center ">
        <div className=" w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circe btn-ghost absolute right-2 top-2"
              >
                X
              </Link>

              <h3 className="font-bold text-lg">Sign up</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3  py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3  py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3  py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-4 px-0">
                <button className="bg-pink-500 text-white rounded-md px-6 py-1 hover:bg-pink-700 duration-200">
                  Sign up
                </button>
                <p className="text-xl">
                  Have a account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_5").showModal();
                    }}
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
