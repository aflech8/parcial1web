export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
    stock: number;
    description?: string;
    brand?: string;  
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart?: (productId: number) => void;
    clearCart?: () => void;
}

export interface ProductsAPIResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}