import { NavLink } from "react-router-dom";

const Nitro = () => {
  return (
    <div className="nitros absolute flex justify-evenly">
      <div className="nitro-basic text-xl rounded-lg">
        <img className="mb-6" src="./Nitro_Basic.svg" alt="nitro_basic" />
        <ul>
          <li className="pb-3">
            <img src="./633beb46b101837b5c2fc3fb_Vector (14).svg" alt="" />
            <p>Uploads de 50 Mo</p>
          </li>
          <li className="pb-3">
            <img src="./633beb45f5c7e8aed02d1ce1_Vector (15).svg" alt="" />
            <p>Des émojis personnalisés où tu veux</p>
          </li>
          <li className="pb-3">
            <img src="./633beb46cfeb9861ceb51d28_Vector (16).svg" alt="" />
            <p>Un badge Nitro spécial sur ton profil</p>
          </li>
          <li className="mt-32 justify-center items-center">
            <NavLink
              className="hover:shadow-2xl text-black bg-white w-full text-center rounded-3xl py-3"
              to="/abonner"
            >
              S'abonner
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nitro text-xl rounded-lg">
        <img className="mb-6" src="./nitro.svg" alt="nitro" />
        <ul>
          <li className="pb-3">
            <img src="./633beb46b101837b5c2fc3fb_Vector (14).svg" alt="" />
            <p>Uploads de 50 Mo</p>
          </li>
          <li className="pb-3">
            <img src="./633beb45f5c7e8aed02d1ce1_Vector (15).svg" alt="" />
            <p>Des émojis personnalisés où tu veux</p>
          </li>
          <li className="pb-5">
            <img
              src="./633bf1841225cb2fb8b85bf5_Stream Quality_white.svg"
              alt=""
            />
            <p>Streaming vidéo HD</p>
          </li>
          <li className="pb-5">
            <img src="./6344399faa4bd8012421e3dd_Activity (1).svg" alt="" />
            <p>Accès aux activités</p>
          </li>
          <li className="pb-3">
            <img src="./633bf190cfeb987aaeb553e0_Large.svg" alt="" />
            <p>2 boosts de serveur</p>
          </li>
          <li className="pb-3">
            <img src="./633bf183d99eb03bfb2c8854_Filled_Icons.svg" alt="" />
            <p>Des profils personnalisés et plus encore !</p>
          </li>
          <li className="justify-center items-center">
            <NavLink
              className="hover:shadow-2xl text-black bg-white w-full text-center rounded-3xl py-3"
              to="/abonner"
            >
              S'abonner
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nitro;
