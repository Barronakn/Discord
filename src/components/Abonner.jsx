import React from "react";
import { NavLink } from "react-router-dom";

const Abonner = () => {
  return (
    <div className="abonner flex justify-between">
      <div>
        <img src="./Group 482480.svg" alt="" />
      </div>
      <div className="abonner-text">
        <h1 className="text-white text-5xl font-bold mb-20">
          Débloque le fun avec Nitro
        </h1>
        <NavLink
          className=" bg-white rounded-3xl py-3 px-12 text-xl hover:text-blue-800 hover:shadow-2xl"
          to="#"
        >
          S'abonner
        </NavLink>
      </div>
      <div>
        <img src="./Group 482479.svg" alt="" />
      </div>
    </div>
  );
};

export default Abonner;
