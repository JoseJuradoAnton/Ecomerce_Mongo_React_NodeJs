import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from 'react-router-dom'

const Menu = () => {

  const { filterby } = useParams()
  const productData = useSelector(state => state.product.productList)

  const productDisplay = productData?.filter(el => el = filterby)[0]
  console.log(productDisplay)

  return (
    <div>

      <div className="w-full max-w-4xl bg-lime-600 m-auto">

        <div className="">

          <img src={productDisplay} alt="" />

        </div>
      </div>

    </div>
  );
};

export default Menu;
