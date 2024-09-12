import React, { useState } from "react";
import Feature from "./Feature";
import { GoPackageDependents } from "react-icons/go";

const PriceOption = ({ option }) => {
  const { image, price, name, features } = option;

  return (
    <div className="flex flex-col bg-blue-700 text-white rounded-lg py-2 px-2">
      <h1>{PriceOption.image}</h1>
      <h1 className="text-center mb-4">
        <span className="text-3xl">{price}</span>
        <span>/Mon</span>
      </h1>
      <h1 className="text-3xl">{name}</h1>
      <div className="flex-grow text-sm">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-600 hover:bg-lime-600 w-full rounded-lg mt-4 mb-2 py-2 font-bold flex flex-row items-center justify-center">
        <GoPackageDependents className="mr-1"></GoPackageDependents> Buy now
      </button>
    </div>
  );
};

export default PriceOption;
