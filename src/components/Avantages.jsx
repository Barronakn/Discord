import React from "react";
import { NavLink } from "react-router-dom";

const Avantages = () => {
  return (
    <div className="avantages mt-96">
      <h1 className="text-center font-bold text-6xl">
        Avantages Nitro populaires
      </h1>
      <div className="cards">
        <div className="card">
          <h1 className="text-2xl font-bold mb-6">
            Vidéos ou images, partage ce que tu veux avec des uploads plus
            volumineux
          </h1>
          <img src="./Project-Speedy-Uploader-Static.svg" alt="" />
        </div>
        <div className="card">
          <h1 className="text-2xl font-bold mb-6">
            Streame des applis et des jeux en qualité HD
          </h1>
          <img
            className="ml-auto mr-auto"
            src="./Project-Speedy-Streaming-Static.svg"
            alt=""
          />
        </div>
        <div className="card">
          <h1 className="text-2xl font-bold mb-6">
            Des émojis personnalisés où tu veux pour chauffer et lancer des
            memes
          </h1>
          <img src="./Project-Speedy-Emoji-Static.svg" alt="" />
        </div>
        <div className="card">
          <h1 className="text-2xl font-bold mb-6">
            Débloque des avantages pour tes communautés avec 2 boosts de serveur
          </h1>
          <img className="ml-auto mr-auto" src="./Frame 881.svg" alt="" />
        </div>
      </div>
      <div className="text-center">
        <NavLink
          className="bg-black text-white py-4 px-7 font-bold text-lg rounded-3xl hover:shadow-2xl"
          to="#"
        >
          Montrer tous les avantages
        </NavLink>
      </div>
    </div>
  );
};

export default Avantages;
