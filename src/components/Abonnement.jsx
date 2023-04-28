import React from "react";
import AbonnementList from "./AbonnementList";
import { NavLink } from "react-router-dom";

const Abonnement = () => {
  const lists = [
    {
      id: 0,
      fonction: "2 boosts gratuits + 30% off extra Boosts",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 1,
      fonction: "Avatar animé, bannière, thème de profil et tag personnalisé",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 2,
      fonction: "Des profils de serveur personnalisés",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 3,
      fonction: "Un badge Nitro sur ton profil",
      basic: "./Validation_vector.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 4,
      fonction: "Des arrière-plans personnalisés pour la vidéo",
      basic: "./Validation_vector.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 5,
      fonction: "Rejoins jusqu'à 200 serveurs",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 6,
      fonction: "Messages plus longs, jusqu'à 4 000 caractères",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
    {
      id: 7,
      fonction: "Colors for your Discord Theme",
      basic: "./Croix_small.svg",
      nitro: "./Validation_vector.svg",
    },
  ];
  return (
    <div className="mt-40  py-16 rounded-xl abonnement bg-gray-100">
      <h1 className="choice w-5/12 font-bold text-5xl text-center">
        Choisis l'abonnement qui te convient le mieux
      </h1>
      <div className="list relative">
        <div className="flex justify-between mt-28">
          <div className="afonction w text-xl font-bold">
            <h1 className="fonction">Fonctionnalités</h1>
          </div>
          <div className="anitro_basic layer ml-24">
            <img src="./Layer 1.svg" alt="Nitro_Basic" />
          </div>
          <div className="encadre">
            <div className="most absolute -top-4 z-10 right-6">
              <img src="./Tag.svg" alt="" />
            </div>
            <div className="cadre absolute z-0 -top-1 -right-6"></div>
          </div>
          <div className="anitro layer mr-10">
            <img src="./Centered.svg" alt="nitro" />
          </div>
        </div>
        <div className="flex">
          <div className="afonction text-lg text-gray-800">
            <h1>
              Des émojis personnalisés où tu veux, qui peuvent être animés
            </h1>
          </div>
          <div className="anitro_basic">
            <img src="./Validation_vector.svg" alt="" />
          </div>
          <div className="anitro  mr-20">
            <img src="./Validation_vector.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="afonction text-lg text-gray-800">
            <h1>
              Des autocollants personnalisés où tu veux et plus de 300
              exclusivités Nitro
            </h1>
          </div>
          <div className="anitro_basic">
            <img src="./Validation_vector.svg" alt="" />
          </div>
          <div className="anitro  mr-20">
            <img src="./Validation_vector.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="afonction text-lg text-gray-800">
            <h1>Partage de fichiers plus importants</h1>
          </div>
          <div className="anitro_basic ml-10">
            <p className="text text-center">50Mo</p>
          </div>
          <div className="anitro mr-24">
            <p className="text text-center">500Mo</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="afonction text-lg text-gray-800">
            <h1>Accès à plus d'Activités</h1>
          </div>
          <div className="anitro_basic">
            <img src="./Croix_small.svg" alt="" />
          </div>
          <div className="anitro  mr-20">
            <img src="./Validation_vector.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="afonction w text-lg text-gray-800">
            <h1>HD streaming</h1>
          </div>
          <div className="anitro_basic ml-10">
            <img src="./Croix_small.svg" alt="" />
          </div>
          <div className="anitro">
            <p className="text">Jusqu'à 4K et 60 fps</p>
          </div>
        </div>
        {lists.map((list) => (
          <AbonnementList key={lists.id} {...list} />
        ))}
        <div className="a border-bottom flex">
          <div className="afonction"></div>
          <div className="link">
            <NavLink
              className="text-sm text-white bg-blue-600 px-6 py-2 rounded-3xl hover:shadow-2xl ml-20"
              to="#"
            >
              S'abonner à Basic
            </NavLink>
          </div>
          <div className="link">
            <NavLink
              className="text-sm text-white bg-blue-600 px-6 py-2 rounded-3xl hover:shadow-2xl"
              to="#"
            >
              S'abonner à Basic
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
