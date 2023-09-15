import React, {useEffect} from "react";
import Header from "./component/Header";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setDataProduct} from "./redux/productSlice";

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}product`
      );
      const resData = await res.json();
      console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);

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
