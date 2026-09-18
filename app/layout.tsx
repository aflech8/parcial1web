import { CartProvider } from "@/context/cart-context";
import Header from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: { //todo: revisar esto
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}