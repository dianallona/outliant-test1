import {
  useDispatchProductStateContext,
  useProductStateContext,
} from "@/context/ProductProvider";

const ProductList = ({ productList }) => {
  const productState = useProductStateContext();
  const setProductState = useDispatchProductStateContext();

  const handleOnEdit = (index) => {
    setProductState((prevState) => {
      return {
        ...prevState,
        editIndex: index,
      };
    });
  };

  const handleOnDelete = (index) => {
    const tempProductList = [...productList];
    const filteredArray = tempProductList.filter((_, i) => index !== i);

    setProductState((prevState) => {
      return {
        ...prevState,
        productList: filteredArray,
      };
    });
  };

  if (!productList || productList.length === 0) {
    return <p className="text-center">No items found...</p>;
  }

  return (
    <>
      <table className="table-fix w-full text-left text-sm font-light">
        <thead className="font-medium ">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={`${product.name}-${index}`} className="">
              <td className="whitespace-nowrap">{product.name}</td>
              <td className="whitespace-nowrap">{product.price}</td>
              <td className="whitespace-nowrap">
                <div className="flex justify-center space-x-2">
                  <button onClick={() => handleOnEdit(index)}>
                    <p>Edit</p>
                  </button>
                  <button
                    className="bg-bg-white text-[#000000] border-2 border-txt-black"
                    onClick={() => handleOnDelete(index)}
                  >
                    <p>Delete</p>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
