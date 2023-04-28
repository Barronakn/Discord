import { NavLink } from "react-router-dom";
import Nitro from "./Nitro";
import { useState, useEffect } from "react";

const Navigation = () => {
  const handleClick = () => {
    const nav = document.querySelector(".nav");
    const menuLogo = document.querySelector(".menuLogo");
    nav.classList.add("block");
    nav.classList.remove("nn");
    menuLogo.classList.add("nn");
  };

  const handleDelete = () => {
    const nav = document.querySelector(".nav");
    const menuLogo = document.querySelector(".menuLogo");
    nav.classList.remove("block");
    nav.classList.add("nn");
    menuLogo.classList.remove("nn");
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? "blue" : "transparent",
    marginTop: scrollPosition > 0 ? "0px" : "28px",
    padding: scrollPosition > 0 ? "5px" : "0px",
  };

  return (
    <div className="relative">
      <div className="navigation">
        <video
          muted
          autoPlay
          loop
          src="./ff96c6cc388e99cdcdd33e996ba9f893.webm"
          alt="video-nav"
        />

        <div
          style={navbarStyle}
          className="menu fixed flex justify-around top-0 w-full font-bold text-sm z-10"
        >
          <div className="logo">
            <NavLink className="hover:underline text-white" to="/">
              <img className="w-32" src="./logo.svg" alt="logo" />
            </NavLink>
          </div>
          <div className="nav nn mt-2">
            <ul className="flex gap-10">
              <img
                onClick={handleDelete}
                className="none delete cursor-pointer w-10 h-10 mt-10"
                src="./x.svg"
                alt=""
              />
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Télécharger
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Nitro
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Découvrir
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Sécurité
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Assistance
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline text-white" to="#">
                  Carrières
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="login flex gap-5">
            <NavLink
              className="bg-gray-100 font-normal text-black p-3 rounded-3xl"
              to="#"
            >
              Je m'inscris
            </NavLink>
            <img
              onClick={handleClick}
              className="none menuLogo cursor-pointer w-10 h-10"
              src="./menu.svg"
              alt=""
            />
          </div>
          <div className="none"></div>
        </div>
        <div className="absolute top-44 text-white left-40 menu-text w-1/3">
          <h1 className="text-7xl font-bold">
            Débloque encore plus de fun avec Nitro
          </h1>
          <p className="text-xl mt-8 w-5/6 text-justify">
            Abonne-toi à Nitro pour faire passer tes émojis au niveau supérieur,
            partager des fichiers encore plus gros et bien plus encore.
          </p>
        </div>
      </div>
      <Nitro />
    </div>
  );
};

export default Navigation;
