function Footer() {
  return (
    <>
      <div className="overflow-x-hidden m-2">
        <div className=" animate-marqueeLeft whitespace-nowrap">
          <span className="text-xl bg-red-200 bold rounded-2xl ">
            Tình trạng hiện tại: vẫn còn độc thân
          </span>
        </div>
      </div>
      <div className="overflow-x-hidden mb-2">
        <div className=" animate-marqueeRight whitespace-nowrap">
          <span className="text-xl  bg-blue-200 bold rounded-2xl ">
            Tình trạng hiện tại: vẫn còn độc thân
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
