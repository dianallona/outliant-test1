import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 sticky top-0 bg-white px-24 z-10">
      <h6 className="font-semibold">Logo</h6>
      <div className="space-x-10">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/products">Products</Link>
      </div>
      <button>
        <p>Call to Action</p>
      </button>
    </nav>
  );
};

export default Navbar;
