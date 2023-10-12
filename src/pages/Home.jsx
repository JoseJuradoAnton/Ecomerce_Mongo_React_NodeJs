import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr"

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData)
  const homeCardList = productData?.filter(el => el.category === "PC", [])
  console.log(homeCardList)

  const loadingArragy = new Array(4).fill(null)

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex">
        <div className="w-1/2">
          <div className="flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-white">Bike Delivery</p>
            <img
              src="https://www.svgrepo.com/show/70289/bike.svg"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Venta de equipo informaticos
            <span className="text-red-600"> JoseCode/  </span>
          </h2>

          <p className="py-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sunt, consequatur sint architecto natus soluta eaque, eveniet
            facilis illum possimus molestias, eligendi laudantium animi
            doloremque. Quia deserunt officiis, autem veniam sapiente
            cupiditate eius nihil porro ea rerum numquam at aut molestiae,
            incidunt possimus beatae quo atque nostrum vero minus quis.
          </p>
          <button className="font-bold bg-violet-700 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            productData?.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  category={el.category}
                />
              )

            })
          }

        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Fresh</h2>
          <div className="ml-auto flex gap-4">
            <button className="bg-slate-300 hover:bg-slate-400 text-lg"><GrPrevious /></button>
            <button className="bg-slate-300 hover:bg-slate-400 text-lg"><GrNext /></button>
          </div>
        </div>
        <div className="flex gap-5 overflow-scroll">
          {
            homeCardList?.map(el => {
              return (

                <CardFeature
                  key={el._id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}

                />
              )

            })
          }
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl text-slate-800 mb-4">
          Your Product
        </h2>
      </div>
    </div>
  );
};

export default Home;
