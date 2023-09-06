import React from "react";

const Home = () => {
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
          <h2 className="text-4xl font-bold">
            Venta de equipo informaticos
            <span className="text-red-600"> Desarrolles</span>
          </h2>

          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sunt, consequatur sint architecto natus soluta eaque, eveniet
            facilis illum possimus molestias, eligendi laudantium animi
            doloremque. Quia deserunt officiis, autem veniam sapiente
            cupiditate eius nihil porro ea rerum numquam at aut molestiae,
            incidunt possimus beatae quo atque nostrum vero minus quis.
          </p>
        </div>

        <div className="md:w-1/2">
          <div>Image1</div>
          <div>Image2</div>
          <div>Image3</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
