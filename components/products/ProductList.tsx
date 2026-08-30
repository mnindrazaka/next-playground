"use client";

import { useSearchProducts } from "@/hooks/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: { title: string; description: string }[];
  query: string;
};

// custom hook

export default function ProductList(props: ProductListProps) {
  const { setQuery, query, loading, error, products } = useSearchProducts({
    query: props.query,
    products: props.products,
  });

  function onChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search product title or description"
        value={query}
        onChange={onChangeSearch}
      />
      <p>Menampilkan pencarian untuk "{query}"</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Hayolo error</p>
      ) : products.length > 0 ? (
        <div className="flex gap-4 justify-center flex-wrap">
          {products.map((product) => {
            return (
              <ProductCard
                title={product.title}
                description={product.description}
              />
            );
          })}
        </div>
      ) : (
        <p>Data untuk pencarian "{query}" tidak ditemukan</p>
      )}
    </div>
  );
}
