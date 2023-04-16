const Footer = () => {
  return (
    <footer className="w-full h-80 md:h-96 flex bg-bg-light-gray px-12 md:px-24 fixed mt-24">
      <div className="w-2/5 h-80 md:h-96 flex-1 bg-img-light-gray absolute bottom-16" />
      <div className="flex flex-col justify-center w-1/3 h-full space-y-2 md:space-y-6 absolute right-16 ">
        <h1 className="text-2xl md:text-5xl font-semibold">
          Lorem ipsum dolor sit consectetur
        </h1>
        <p className="text-xs font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>
        <button className="w-fit">
          <p>Call to Action</p>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
