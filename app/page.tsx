import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🛍️ Product catalog</h1>
      <Filter />
      {products.length === 0 ? (
        <p className="text-red-500">Failed to load products</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
