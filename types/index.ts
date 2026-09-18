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
    subprice?: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    deleteCart: () => void;
}

export interface ProductsAPIResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface FormRta {
    text: string;
    email: string;
    paymethod: string;
    acceptterms: boolean;
}