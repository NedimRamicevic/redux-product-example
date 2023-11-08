"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FavoritePAge = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("favorites part", data);
  const deleteFavorite = (product: any) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: product.id });
  };

  return (
    <div className="m-4">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="mb-10">Favorites</h1>
        {data.map((product: any) => (
          <div className="flex flex-row text-white gap-4 p-1" key={product.id}>
            <p>{product.name}</p>
            <button
              onClick={() => deleteFavorite(product)}
              className="text-red-700 pl-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePAge;
