import React, { useState } from "react";
import UserIcon from "../assets/user-icon.png";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  console.log(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchData = await fetch(
      `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}signup`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // const dataRes = await fetchData.json();

    alert(data.message);
    navigate("/login");
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
      <h1>signup</h1>
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={UserIcon} alt="" />
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Firs Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.lastName}
            onChange={handleOnChange}
          />

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
            className="w-full max-w-[150px] m-auto bg-red-500 hove:bg-red-600 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signup;
