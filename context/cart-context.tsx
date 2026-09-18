"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem, CartContextType } from "@/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                // INMUTABILIDAD: Mapeamos el arreglo para crear uno nuevo en memoria.
                // Solo modificamos la cantidad del ítem que coincide.
                return prevCart.map((item) =>  //TODO: Entender bien esto
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // INMUTABILIDAD: Usamos el spread operator (...) para crear un nuevo arreglo
            // con los elementos anteriores más el nuevo objeto.
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// 4. Custom Hook (Tu herramienta para acceder a la "nube")
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
}