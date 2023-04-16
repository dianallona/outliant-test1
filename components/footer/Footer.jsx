const Footer = () => {
  return (
    <footer className="h-[calc(100vh-150px)] flex bg-[#ECECEC] px-24 relative mt-24">
      <div className="w-2/5 h-[calc(100vh-150px)]  flex-1 bg-[#C4C4C4] absolute bottom-16" />
      <div className="w-1/3 space-y-8 absolute right-40 top-48">
        <h1 className="text-5xl font-semibold">
          Lorem ipsum dolor sit consectetur
        </h1>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>
        <button>
          <p>Call to Action</p>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
