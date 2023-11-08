"use client";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { use } from "react";
interface Product {
  id: number;
  name: string;
}
const getProducts = async () => {
  const res = await fetch("https://northwind.vercel.app/api/products");
  const data = await res.json();
  return data;
};

const ProductsPage = () => {
  const dispatch = useDispatch();

  const addFavorite = (product: Product) => {
    dispatch({ type: "ADD_FAVORITE", payload: product });
  };

  const products = use(getProducts());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="m-4">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="mb-10">Products </h1>
          <div>
            {products.map((product: Product) => (
              <div className="flex flex-row gap-4 p-1" key={product.id}>
                <p>{product.name}</p>
                <button
                  onClick={() => addFavorite(product)}
                  className=" text-green-500"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductsPage;
