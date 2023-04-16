const SecondContent = () => {
  return (
    <div className="h-full w-full items-center flex space-x-12">
      <div className="w-1/4 h-full flex flex-col justify-start">
        <h6 className="font-semibold">Header Text</h6>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim dolor
        </p>
      </div>
      <div className="flex-1 h-full w-full bg-[#c4c4c4]"></div>
      <div className="w-1/4 h-full flex flex-col justify-end">
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
