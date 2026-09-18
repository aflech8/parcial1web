"use client";

import { useCart } from "@/context/cart-context";
import { Product } from "@/types";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 hover:bg-blue-100 text-white font-medium py-3 px-4 rounded-md">
            Agregar al carrito
        </button>
    );
}