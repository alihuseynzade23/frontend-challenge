import Cart from "@/components/Cart";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import Header from "@/components/Header";

export const metadata = {
  title: "E-Commerce Store – Best Products",
  description: "Buy the best products at great prices!",
  openGraph: {
    title: "E-Commerce Store – Best Products",
    description: "Buy the best products at great prices!",
    siteName: "E-Commerce Store",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <ReduxProvider>
            <Header />
            <Cart />
            {children}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
