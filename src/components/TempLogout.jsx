import React from "react";
import { useAuth } from "../contact/AuthProvider";
import toast from "react-hot-toast";

export default function TempLogout() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout sucessfully");
      //   document.getElementById("my_modal_5").close();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error" + error.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <>
      <div>
        <button
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}
