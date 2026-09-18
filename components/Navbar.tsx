"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function Navbar() {
  const { cart } = useCart(); //hook

  // .reduce() sirve para sumar la propiedad 'quantity' de todos los productos
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-400">
          ShopHub
        </Link>
        <div className="flex items-center bg-slate-900">
          <span className="text-s font-medium">Carrito:</span>
          <span className=" text-s font-bold px-2.5 py-1<">
            {totalItems}
          </span>
        </div>
      </nav>
    </header>
  );
}