import React from "react";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-16 bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
