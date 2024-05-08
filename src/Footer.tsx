import avatar from "./image/avatar.jpg";
import omeme from "./image/omeme.png";
function Footer() {
  return (
    <>
      <div className="overflow-x-hidden m-2">
        <div className=" animate-marqueeLeft whitespace-nowrap">
          {/* <span className="text-xl bg-red-200 bold rounded-2xl ">
            Tình trạng hiện tại: vẫn còn độc thân
          </span> */}
          <img className="w-40 h-40" src={omeme} alt="" />
        </div>
      </div>
      <div className="overflow-x-hidden mb-2">
        <div className=" animate-marqueeRight whitespace-nowrap">
          {/* <span className="text-xl  bg-blue-200 bold rounded-2xl ">
            Tình trạng hiện tại: vẫn còn độc thân{" "}
          </span> */}
          <img className="w-40 h-40" src={avatar} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
