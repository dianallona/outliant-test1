import {
  useDispatchProductStateContext,
  useProductStateContext,
} from "@/context/ProductProvider";
import { useEffect, useRef } from "react";

const ProductAction = () => {
  const productState = useProductStateContext();
  const setProductState = useDispatchProductStateContext();
  const { productList, editIndex } = productState;

  const nameRef = useRef();
  const priceRef = useRef();

  const submitText = editIndex === undefined ? "Create" : "Edit";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editIndex === undefined) return;

    const filteredProduct = productList.find((_, index) => index === editIndex);
    if (filteredProduct === undefined) return;

    nameRef.current.value = filteredProduct.name;
    priceRef.current.value = filteredProduct.price;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editIndex]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (nameRef.current.value === "" || priceRef.current.value === "") return;

    const tempProductList = [...productList];

    if (editIndex === undefined) {
      const newProduct = {
        name: nameRef.current.value,
        price: priceRef.current.value,
      };
      setProductState((prevState) => ({
        ...prevState,
        productList: [...prevState.productList, newProduct],
      }));
      nameRef.current.value = "";
      priceRef.current.value = "";
      return;
    }

    const editProduct = tempProductList.map((product, index) => {
      if (index === editIndex)
        return {
          name: nameRef.current.value,
          price: priceRef.current.value,
        };

      return product;
    });

    setProductState((prevState) => ({
      ...prevState,
      productList: editProduct,
      editIndex: undefined,
    }));
    nameRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <div className="bg-bg-light-gray w-full h-full space-y-4 p-12">
      <div className="mb-8 text-center">
        <h6 className="mb-2 font-semibold">Header Text</h6>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        </p>
      </div>
      <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4">
        <input
          ref={nameRef}
          id="name"
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded text-sm"
        />
        <input
          ref={priceRef}
          id="price"
          type="text"
          placeholder="Price"
          className="px-4 py-2 rounded text-sm"
        />
        <input type="submit" value={submitText} className="cursor-pointer" />
      </form>
    </div>
  );
};

export default ProductAction;
