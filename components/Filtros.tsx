"use client";
import { useCart } from "@/context/cart-context";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react";



export default function Filtros({products}: any) {
    const [filter1, setFilter1] = useState("");

const productos_filtrados = products.filter((product: { title: string; })=> product.title.toLowerCase().includes(filter1.toLowerCase().trim()));

    return (
        <div>
        <label htmlFor="textofiltro1">Filtro por nombre:</label>
        <input id="nameFilter" onChange={(e) => setFilter1(e.target.value)} className="input-box" type="text" value={filter1}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productos_filtrados.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        
    );
};
