"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";

export default function Formulario() {
    //const { clearCart } = useCart();

    const [form, setForm] = useState({
        name: "",
        email: "",
        paymethod: "card",
        terms: false,
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const isNameValid = form.name.trim().length >= 5;
    const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
    const isFormValid = isNameValid && isEmailValid && form.terms;

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const { name, value, type } = e.target;
        const val =
            type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

        setForm((prev) => ({ ...prev, [name]: val }));
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);

        // Simular proceso de pago
        await new Promise((resolve) => setTimeout(resolve, 1500));

        deleteCart(); 
        setIsSubmitting(false);
        setIsDone(true);
    }

    if (isDone) {
        return (
            <div className="p-6 text-center space-y-3">
                <h2 className="text-xl font-bold">yeiiii</h2>
                <p>Forms env</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            <div className="space-y-1">
                <label htmlFor="name" className="block">Nombre completo:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-slate-200 p-2 rounded"
                />
                {touched.name && !isNameValid && (
                    <p className="text-red-500 text-xs">Mínimo 5 caracteres</p>
                )}
            </div>


            <div className="space-y-1">
                <label htmlFor="email" className="block">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-slate-200 p-2 rounded"
                />
                {touched.email && !isEmailValid && (
                    <p className="text-red-500 text-xs">Ingresa un email válido</p>
                )}
            </div>

            <div className="space-y-1">
                <label htmlFor="paymethod" className="block">Método de pago:</label>
                <select
                    id="paymethod"
                    name="paymethod"
                    value={form.paymethod}
                    onChange={handleChange}
                    className="w-full bg-slate-200 p-2 rounded"
                >
                    <option value="card">Tarjeta de crédito</option>
                    <option value="cash">Efectivo</option>
                </select>
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                />
                <label htmlFor="terms" className="text-sm">Acepto los términos y condiciones</label>
            </div>

            <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-slate-400"
            >
                {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
        </form>
    );
}

function deleteCart() {
    
}
