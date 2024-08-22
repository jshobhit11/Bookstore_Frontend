import React, { useState } from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mh-10 dark:bg-slate-900 dark:text-white ${
          isDarkMode ? "dark:bg-slate-900 dark:text-white" : ""
        }`}
      >
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes here to learn{" "}
              <span className="text-pink-500">something new everyday</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">GET STARTED</button>
        </div>
        <div className="order-1 w-full md:w-1/2 relative">
          {isDarkMode && (
            <div className="absolute inset-0 bg-black opacity-50"></div>
          )}
          <img
            src={banner}
            className={`w-full h-75 object-cover ${
              isDarkMode ? "dark:bg-slate-900 dark:text-white" : ""
            }`}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={toggleDarkMode} className="btn btn-primary">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Banner;
