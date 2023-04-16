const FirstContent = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse items-center md:flex-row">
      <div className="w-full space-y-8 md:w-2/5 mt-8 md:mt-0">
        <h1 className="font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>
        <div className="flex space-x-2">
          <button>
            <p>Call to Action</p>
          </button>
          <button className="bg-bg-white text-[#000000] border-2 border-black">
            <p>See Workspace</p>
          </button>
        </div>
      </div>
      <div className="w-full h-full relative md:w-3/5">
        <div className="w-[calc(100%-86px)] md:w-[calc(100%-200px)] h-[calc(100%-40px)] bg-img-light-gray absolute right-20 bottom-0" />
        <div className="w-48 h-52 bg-img-dark-gray absolute right-0" />
      </div>
    </div>
  );
};

export default FirstContent;
