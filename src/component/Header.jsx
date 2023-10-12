import React, { useState } from "react";
import logo from "../assets/logo-jc1.png";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
  };



  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={"home"}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>about</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600">
            <BsFillCartCheckFill />
            <div className="absolute top-3 right-13 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-2xl text-slate-600">
            <div
              className="border-2 border-solid border-slate-600 p-1 rounded-full"
              onClick={handleShowMenu}
            >
              {userData.firstName ? (
                <h1>{userData.firstName}</h1>
              ) : (
                <BiSolidUser />
              )}
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] ">
                {userData.userEmail ===
                  import.meta.env.VITE_REACT_APP_ADMIN_EMAIL && (
                    <Link
                      to={"newproduct"}
                      className="whitespace-nowrap cursor-pointer px-2"
                    >
                      New product
                    </Link>
                  )}

                {userData.firstName ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout({userData.firstName}){ }
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col">
                  <Link to={""} className="px-2 py-1" >Home</Link>
                  <Link to={"menu"} className="px-2 py-1">Menu</Link>
                  <Link to={"about"} className="px-2 py-1">about</Link>
                  <Link to={"contact"} className="px-2 py-1">contact</Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
