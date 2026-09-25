//import Image from "next/image";
import React from "react";
// import { useState } from "react";
//import { Product } from "@/context/cart-context";
import ProductCard from "@/components/ProductCard"
import { Product, ProductsAPIResponse } from "@/types";
import Filtros from "@/components/Filtros";

interface ProductsResponse {  
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://dummyjson.com/products?limit=8&select=id,title,price,category,thumbnail,stock"
  );

  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

// const [filter2min, setFilter2min] = useState(0);
// const [filter2min, setFilter2min] = useState(99999);


export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        Catálogo de Productos
      </h1>
      <Filtros products={products} ></Filtros>
    </div>
  );
}