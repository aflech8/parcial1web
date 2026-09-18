import Link from "next/link";
import { FormRta, Product } from "@/types";
import Formulario from "@/components/Formulario"

interface PageProps {
    params: Promise<{ cart: Product[] }>;
}

export default async function CheckoutPage({ params }: PageProps) {
    const { cart } = await params;
    //const product = await getProductDetail(id);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Formulario></Formulario>
        </div>
    );
}