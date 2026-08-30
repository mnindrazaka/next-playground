type ProductResponse = {
  products: { title: string; description: string }[];
  total: number;
  skip: number;
  limit: number;
};

export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data: ProductResponse = await res.json();
  return data;
}

export async function searchProducts(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/products/search?query=${query}`,
  );
  const data: ProductResponse = await res.json();
  return data;
}
