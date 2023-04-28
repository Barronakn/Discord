import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-black-500 px-20 pt-8">
      <div className="flex footer_1 py-8 justify-between">
        <div className="footerTop flex flex-col gap-4">
          <h1 className="text-blue-700 imagine uppercase text-4xl font-bold w-32">
            Imagine un endroit
          </h1>
          <select className="w-20">
            <option value="France">France</option>
            <option value="Deustch">Deustch</option>
            <option value="English">English</option>
            <option value="Espagnol">Espagnol</option>
          </select>
          <div className="images flex gap-6 mt-8">
            <img className="w-6 h-6" src="./twitter.svg" alt="" />
            <img className="w-6 h-6" src="./Insta.svg" alt="" />
            <img className="w-6 h-6" src="./facebook.svg" alt="" />
            <img className="w-6 h-6" src="./youtube.svg" alt="" />
            <img className="w-6 h-6" src="./Tiktok.svg" alt="" />
          </div>
        </div>
        <div className="footerTop flex flex-col gap-4">
          <h1 className="text-blue-700">Produit</h1>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Télécharger
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Nitro
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Statut
          </NavLink>
        </div>
        <div className="footerTop flex flex-col gap-4">
          <h1 className="text-blue-700">Entrepise</h1>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            À propos
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Emplois
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Charte graphique
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Espace actualités
          </NavLink>
        </div>
        <div className="footerTop flex flex-col gap-4">
          <h1 className="text-blue-700">Ressources</h1>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Université
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Assistance
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Sécurité
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Blog
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Commentaires
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            StreamKit
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Créateurs
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Communauté
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Bâtir
          </NavLink>
        </div>
        <div className="footerTop flex flex-col gap-4">
          <h1 className="text-blue-700">Charte</h1>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Conditions
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Confidentialité
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Paramètres des cookies
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Charte d'utilisation
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Remerciement
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Licences
          </NavLink>
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="#"
          >
            Modération
          </NavLink>
        </div>
      </div>
      <div className="footerBottom pt-7 pb-20 flex justify-between">
        <div className="logo">
          <NavLink
            className="text-white font-normal text-sm hover:underline"
            to="/"
          >
            <img className="w-32" src="./logo.svg" alt="logo" />
          </NavLink>
        </div>
        <NavLink
          className="text-white bg-blue-500 pt-2 px-4 rounded-3xl hover:bg-blue-400 hover:shadow-2xl"
          to="#"
        >
          Télécharger
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
