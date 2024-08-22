import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
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
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://bookstore-backend-9cwn.onrender.com/user/login",
        userInfo
      );
      console.log(res.data);
      if (res.data) {
        // alert("");
        toast.success("loggedIn successfully");
        document.getElementById("my_modal_5").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        // alert();
        toast.error("Error: " + err.response.data.message);
        setTimeout(() => {}, 2000);
      }
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_5").closes()}
              >
                X
              </Link>

              <h3 className="font-bold text-lg">LOGIN</h3>
              <div className="mt-4 space-y-2">
                <span>Email</span>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button className="bg-pink-500 text-white rounded-md px-6 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p className="flex items-center">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer ml-1"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
