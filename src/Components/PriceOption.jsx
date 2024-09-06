import React, { useState } from "react";
import Feature from "./Feature";

const PriceOption = ({ option }) => {
  const { price, name, features } = option;

  return (
    <div className="flex flex-col bg-blue-700 text-white rounded-lg py-2 px-2">
      <h1>
        <span className="text-3xl">{price}</span>
        <span>/Mon</span>
      </h1>
      <h1 className="text-3xl">{name}</h1>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-600 hover:bg-lime-600 w-full rounded-lg mt-4 mb-2">
        buy now
      </button>
    </div>
  );
};

export default PriceOption;
