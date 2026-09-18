import Link from "next/link";
//import { Product } from "@/context/cart-context";
import AddToCartButton from "@/components/AddToCartButton";
import { Product, ProductsAPIResponse } from "@/types";

interface ProductDetail extends Product {
    description: string;
    brand: string;
}

interface PageProps {
    params: Promise<{ id: string }>;
}

async function getProductDetail(id: string): Promise<ProductDetail> {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error("No se pudo obtener el detalle del producto");
    }
    return res.json();
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const product = await getProductDetail(id);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link
                href="/"
                className="inline-block mb-6 text-sm text-blue-600 hover:underline font-medium"
            >
                &lt;- Volver al Catálogo
            </Link>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-auto object-cover max-h-80"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            {product.category}
                        </span>
                        <h1 className="text-2xl font-bold text-slate-900 mt-1">
                            {product.title}
                        </h1>
                        <p className="text-2xl font-bold text-slate-800 mt-3">
                            ${product.price}
                        </p>

                        <p className="text-slate-600 mt-4 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-500">
                                Disponibilidad:{" "}
                                <span className="font-semibold text-slate-700">
                                    {product.stock} unidades
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}