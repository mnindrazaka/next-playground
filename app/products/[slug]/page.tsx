import ProductAmount from "@/components/products/ProductAmount";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ query: string }>;
};

export default async function ProductDetail(props: ProductDetailProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Show detail product here</p>
      <p>Slug : {params.slug}</p>
      <p>Query : {searchParams.query}</p>

      <ProductAmount />
    </div>
  );
}
