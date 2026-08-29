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
