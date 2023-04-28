import React from "react";

const AbonnementList = ({ fonction, basic, nitro }) => {
  return (
    <div>
      <div className="lists flex justify-between">
        <div className="afonction text-lg text-gray-800">
          <h1> {fonction} </h1>
        </div>
        <div className="anitro_basic">
          <img src={basic} alt="" />
        </div>
        <div className="anitro mr-20">
          <img src={nitro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AbonnementList;
