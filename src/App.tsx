import {
  SiFacebook,
  SiYoutube,
  SiGithub,
  SiTiktok,
  SiGmail,
} from "react-icons/si";
import avatar from "./image/avatar.jpg";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 m-2 ">
        <div className=" p-4 bg-slate-400 rounded-xl col-span-2 ">
          <img
            className="rounded-full w-20 h-20 border-2  "
            src={avatar}
            alt=""
          />
          <div className="text-2xl text-white bold">Huỳnh Minh Thạo</div>
          <div className="bg-white mt-2 rounded-xl p-4 ">
            <div className="border-dotted border-4 rounded-xl">
              <p className="bold text-slate-400 p-2 border-b-4 border-dotted ">
                CONTACT
              </p>
              <div className="flex p-2 ">
                <a target="blank" href="https://www.facebook.com/mthaone3/">
                  <SiFacebook className="hover:text-[#0866FF] h-8 w-8 m-2" />
                </a>
                <a
                  target="blank"
                  href="https://youtube.com/@thaohuynh5944?si=PlylOeYD-S_PJd0T"
                >
                  <SiYoutube className="hover:text-[#FF0000] h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://www.tiktok.com/@hnim_oaht">
                  <SiTiktok className="hover:text-orange-200 h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://github.com/thaone2">
                  <SiGithub className="hover:text-pink-400 h-8 w-8 m-2" />
                </a>
              </div>
              <p className="flex items-center p-2 ">
                <SiGmail className="hover:text-green-400 h-8 w-8 m-2" />
                <p className=" text-xs">khuong123w@gmail.com</p>
              </p>
              <p className="p-2 text-xs"> Phone: 0925141017</p>
            </div>

            <div className=" mt-2 border-4 border-dotted rounded-xl">
              <p className="bold p-2  text-slate-400 border-b-4 border-dotted">
                EDUCATION
              </p>
              <p className="text-xs p-2">
                2020 - 2024: Trường đại học Công nghiệp Tp.HCM
                <br />
                GPA: 3.0
              </p>
            </div>

            <div className=" mt-2 border-4 border-dotted rounded-xl">
              <p className="bold p-2  text-slate-400 border-b-4 border-dotted">
                LANGUAGE
              </p>
              <p className="text-xs p-2">
                English: TOEIC:xxx
                <br />
                Vietnamese: Native
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white">
          <div className="p-4">
            <p className="flex bold ">SUMMARY</p>
            <ul className="pl-8 list-disc">
              <li> Học ngu</li>
              <li> Xấu trai</li>
              <li> Nhạt</li>
              <li> Nghèo</li>
            </ul>
          </div>
          <div className="p-4">
            <p className="flex bold ">SKILL</p>
            <ul className="pl-8 list-disc">
              <li> Ăn bám</li>
              <li> Lười biếng</li>
              <li> React JS lỏ</li>
            </ul>
          </div>

          <div className="overflow-x-hidden w-full">
            <div className="py-12 animate-marquee whitespace-nowrap ">
              <span className="text-xl text-red-500 mx-4">
                Tình trạng: Vẫn còn độc thân
              </span>
              <span className="text-xl text-red-500 mx-4">
                Tình trạng: Vẫn còn độc thân
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
