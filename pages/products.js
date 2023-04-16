import Product from "@/components/products";
import { ProductProvider } from "@/context/ProductProvider";

const Products = () => {
  return (
    <main className="p-24 flex flex-col justify-center ">
      <ProductProvider>
        <Product />
      </ProductProvider>
    </main>
  );
};

export default Products;
