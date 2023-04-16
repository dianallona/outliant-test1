import { useRef } from "react";

const ProductSearch = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleOnChange = () => {
    onSearch?.(inputRef.current.value);
  };

  return (
    <>
      <h2 className="font-semibold">Products</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search for keywords..."
        className="w-1/2"
        onChange={handleOnChange}
      />
    </>
  );
};

export default ProductSearch;
