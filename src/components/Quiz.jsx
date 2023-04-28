const Quiz = () => {
  const handleClickFirst = () => {
    const first = document.querySelector(".listes_1");
    const second = document.querySelector(".listes_2");
    const three = document.querySelector(".listes_3");
    const four = document.querySelector(".listes_4");
    first.style.display = "block";
    second.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
  };
  const handleClickTwo = () => {
    const first = document.querySelector(".listes_1");
    const second = document.querySelector(".listes_2");
    const three = document.querySelector(".listes_3");
    const four = document.querySelector(".listes_4");
    first.style.display = "none";
    second.style.display = "block";
    three.style.display = "none";
    four.style.display = "none";
  };
  const handleClickThree = () => {
    const first = document.querySelector(".listes_1");
    const second = document.querySelector(".listes_2");
    const three = document.querySelector(".listes_3");
    const four = document.querySelector(".listes_4");
    first.style.display = "none";
    second.style.display = "none";
    three.style.display = "block";
    four.style.display = "none";
  };
  const handleClickFour = () => {
    const first = document.querySelector(".listes_1");
    const second = document.querySelector(".listes_2");
    const three = document.querySelector(".listes_3");
    const four = document.querySelector(".listes_4");
    first.style.display = "none";
    second.style.display = "none";
    three.style.display = "none";
    four.style.display = "block";
  };
  return (
    <div className="quiz my-32 relative text-center">
      <h1 className="text-5xl font-bold">Foire aux questions</h1>
      <div className="liens flex center mb-10 text-gray-500 mt-14">
        <p className="text-md cursor-pointer first" onClick={handleClickFirst}>
          Général
        </p>
        <p className="ml-6 text-md cursor-pointer two" onClick={handleClickTwo}>
          Paiements
        </p>
        <p
          className="ml-6 text-md cursor-pointer three"
          onClick={handleClickThree}
        >
          Cadeaux et promotions
        </p>
        <p
          className="ml-6 text-md cursor-pointer four"
          onClick={handleClickFour}
        >
          Autre
        </p>
      </div>
      <div className="listes_1 font-bold text-lg none">
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Nitro, c'est quoi ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Comment fonctionne Nitro ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Quelle est différence entre Nitro et Nitro Basic ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Combien coûte Nitro ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Où puis-je acheter Nitro ?</h1>
          <span>+</span>
        </div>
      </div>
      <div className="listes_2 font-bold text-lg none">
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Quels sont les mode paiements acceptés ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>
            Proposez-vous une tarification localisée pour Nitro et Nitro Basic ?
          </h1>
          <span>+</span>
        </div>
      </div>
      <div className="listes_3 font-bold text-lg">
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Les cadeaux Nitro, c'est réel ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Où utiliser les codes Nitro ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>
            Puis-je obtenir Nitro gratuitement via bot ou un événement cadeau ?
          </h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Est-ce que Discord offre des promotions sur Nitro ?</h1>
          <span>+</span>
        </div>
      </div>
      <div className="listes_4 font-bold text-lg none">
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Mon abonnement Nitro offre des boots. Qu'est-ce que c'est ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Les boots sont-ils permanents ?</h1>
          <span>+</span>
        </div>
        <div className="liste cursor-pointer flex justify-between bg-gray-100 p-7 rounded-xl">
          <h1>Pourquoi mon Nitro ne marche pas ?</h1>
          <span>+</span>
        </div>
      </div>
      <div className="img">
        <img
          className="absolute -top-24 right-0"
          src="./Group 482467.svg"
          alt=""
        />
        <img className="-mt-14" src="./Group 482477.svg" alt="" />
      </div>
    </div>
  );
};

export default Quiz;
