"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context"
import { FormRta } from "@/types";

export default function Formulario(){
    const { deleteCart } = useCart();
    const [form, setForm] = useState<{name: "", email:"", select: "", checkbox: false} | undefined>();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value} = e.target;
        setForm((prev)=> ({...prev, [name]: value}));
    }

    function handleSumbit(e: React.ChangeEvent) {
        e.preventDefault();

    }
    
    return (
        <form onSubmit={handleSumbit} className="px-6 py-6 space-y-5">
            <div className="space-y-5">
                <label htmlFor="name">Nombre:</label>
                <input id="name" name="name" type="text"  className="w-full bg-slate-300"/>
            </div>
            <div className="space-x-5">
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="text" className="w-full bg-slate-300"/>
            </div>
            <div className="space-x-5">
                <label htmlFor="email">Email:</label>
                <select name="paymethod" id="paymethod"></select>
            </div>
        </form>
    )
}


//<input id="name" name="name" type="text" value={form.name} className="w-full"/>