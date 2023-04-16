import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex justify-between items-center py-6 sticky top-0 bg-bg-white px-12 md:px-24 z-10">
      <h6 className="font-semibold">Logo</h6>
      <div className="hidden md:block space-x-6">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/products">Products</Link>
      </div>
      <button className="hidden md:block">
        <p>Call to Action</p>
      </button>
      <div className="relative md:hidden" onClick={handleOnClick}>
        <div className="space-y-1.5 cursor-pointer hover:scale-105 absolute top-0 right-0 bg-bg-light-gray">
          <div className="w-8 h-0.5 bg-txt-black"></div>
          <div className="w-8 h-0.5 bg-txt-black"></div>
          <div className="w-8 h-0.5 bg-txt-black"></div>
        </div>
        <div
          className={`absolute right-0 bg-bg-white top-6 ${
            toggle ? "" : "hidden"
          }`}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
