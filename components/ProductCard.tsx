"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}


export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
            <div className="h-48 bg-slate-100 relative">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-semibold text-slate-600 uppercase">
                        {product.category}
                    </span>
                    <h2 className="text-lg font-bold text-slate-800 mt-1">
                        {product.title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">
                        Stock: <span className="font-medium text-slate-700">{product.stock}</span>
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">
                        ${product.price}
                    </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                        href={`/product/${product.id}`}
                        className="text-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-2 px-3 rounded-md">
                        Ver Detalle
                    </Link>

                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-md"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

//line-clamp-1 -> oculta el texto en una linea