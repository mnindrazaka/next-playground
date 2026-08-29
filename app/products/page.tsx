import ProductCard from "@/components/products/ProductCard";
import { fetchProducts } from "@/services/product";

export default async function Products() {
  const data = await fetchProducts();
  return (
    <div>
      <h1>Products Page</h1>
      <p>Show all my products here</p>
      <div className="flex gap-4 justify-center flex-wrap">
        {data.products.map((product) => {
          return (
            <ProductCard
              title={product.title}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}
