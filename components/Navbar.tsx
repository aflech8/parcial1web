"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function Navbar() {
  const { cart } = useCart(); //hook

  // .reduce() sirve para sumar la propiedad 'quantity' de todos los productos
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors">
          ShopHub
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="/checkout"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            <span className="text-slate-200">Carrito:</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}