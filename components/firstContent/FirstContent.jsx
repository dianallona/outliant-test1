const FirstContent = () => {
  return (
    <div className="h-full w-full flex items-center">
      <div className="w-2/5 space-y-8">
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
          <button className="bg-white text-[#000000] border-2 border-black">
            <p>See Workspace</p>
          </button>
        </div>
      </div>
      <div className="w-3/5 h-full relative">
        <div className="w-[calc(100%-200px)] h-[calc(100%-40px)] bg-[#C4C4C4] absolute right-20 bottom-0" />
        <div className="w-48 h-52 bg-[#9D9D9D] absolute right-0" />
      </div>
    </div>
  );
};

export default FirstContent;
