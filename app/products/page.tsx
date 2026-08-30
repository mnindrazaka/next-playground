import ProductList from "@/components/products/ProductList";
import { searchProducts } from "@/services/product";

export type ProductsPageProps = {
  searchParams: Promise<{ query: string }>;
};

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams;
  const data = await searchProducts(searchParams.query ?? "");
  return (
    <div>
      <h1>Products Page</h1>
      <p>Show all my products here</p>
      <ProductList query={searchParams.query ?? ""} products={data.products} />
    </div>
  );
}
