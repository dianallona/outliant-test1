import { createContext, useContext, useState } from "react";

const ProductContext = createContext(undefined);
const ProductDispatchContext = createContext(undefined);

export function ProductProvider({ children }) {
  const [productState, setProductState] = useState({
    productList: [
      {
        name: "Lorem ipsum",
        price: "Lorem ipsum",
      },
    ],
    editIndex: undefined,
  });

  return (
    <ProductContext.Provider value={productState}>
      <ProductDispatchContext.Provider value={setProductState}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
}

export function useProductStateContext() {
  return useContext(ProductContext);
}
export function useDispatchProductStateContext() {
  return useContext(ProductDispatchContext);
}
