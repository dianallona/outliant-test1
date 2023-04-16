const SecondContent = () => {
  return (
    <div className="h-full w-full items-center flex flex-col space-y-12 md:space-x-12 md:flex-row">
      <div className="w-full md:w-1/4 md:h-full flex flex-col md:justify-start">
        <h6 className="font-semibold">Header Text</h6>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim dolor
        </p>
      </div>
      <div className="flex-1 h-full w-full bg-img-light-gray"></div>
      <div className="w-full md:w-1/4 md:h-full flex flex-col md:justify-end">
        <h6 className="font-semibold">Header Text</h6>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim dolor
        </p>
      </div>
    </div>
  );
};

export default SecondContent;
