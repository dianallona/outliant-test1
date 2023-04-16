import {
  useDispatchProductStateContext,
  useProductStateContext,
} from "@/context/ProductProvider";
import { useEffect, useState } from "react";
import { ProductAction, ProductList, ProductSearch } from ".";

const Product = () => {
  const productState = useProductStateContext();
  const setProductState = useDispatchProductStateContext();

  const { productList } = productState;

  const [searchedProduct, setSearchedProduct] = useState(productList);

  useEffect(() => {
    setSearchedProduct(productList);
  }, [productList]);

  const handleOnSearch = (searchText) => {
    if (searchText === "") {
      setSearchedProduct(productList);
      return;
    }

    const lowerCasedSearchText = searchText.toLowerCase();
    const filteredProduct = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCasedSearchText) ||
        product.price.toLowerCase().includes(lowerCasedSearchText)
    );

    setSearchedProduct(filteredProduct);
  };

  return (
    <>
      <div className="flex w-full">
        <div className="w-full lg:w-3/5 flex mb-12 justify-between">
          <ProductSearch onSearch={handleOnSearch} />
        </div>
        <div className="hidden md:block md:w-auto " />
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full mb-12 lg:mb-0 lg:w-3/5 mr-16">
          <ProductList productList={searchedProduct} />
        </div>
        <div className="flex-1 w-auto h-fit">
          <ProductAction />
        </div>
      </div>
    </>
  );
};

export default Product;
