import React, { useState } from "react";
import UserIcon from "../assets/user-icon.png";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <div className="p-3 md:p-4">
      <h1>Login</h1>
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={UserIcon} alt="" />
        </div>

        <form action="">
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full max-x-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to="/signup" className="text-red-500 underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
