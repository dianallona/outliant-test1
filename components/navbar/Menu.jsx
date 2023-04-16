import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex flex-col items-center justify-between shadow-lg w-48">
      <li className="my-4 cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="my-4 cursor-pointer">
        <Link href="/">About</Link>
      </li>
      <li className="my-4 cursor-pointer">
        <Link href="/">Services</Link>
      </li>
      <li className="my-4 cursor-pointer">
        <Link href="/products">Products</Link>
      </li>
    </ul>
  );
};

export default Menu;
