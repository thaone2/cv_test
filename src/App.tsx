import { SiFacebook, SiYoutube, SiGithub, SiTiktok } from "react-icons/si";
import avatar from "./image/avatar.jpg";
function App() {
  return (
    <>
      <div className="grid grid-cols-3 m-2 ">
        <div className=" p-4 bg-slate-400 rounded-xl col-span-2">
          <img className="rounded-full w-20 h-20" src={avatar} alt="" />
          <div className="text-2xl text-white bold">Huỳnh Minh Thạo</div>
          <div className="bg-white mt-2 rounded-xl p-2 ">
            <div className="bold">
              CONTACT
              <div className="flex p-2 ">
                <a target="blank" href="https://www.facebook.com/mthaone3/">
                  <SiFacebook className="hover:text-[#0866FF] h-8 w-8 m-2" />
                </a>
                <a target="blank" href="www.youtube.com/@thaohuynh5944">
                  <SiYoutube className="hover:text-[#FF0000] h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://www.tiktok.com/@hnim_oaht">
                  <SiTiktok className="hover:text-orange-200 h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://github.com/thaone2">
                  <SiGithub className="hover:text-pink-400 h-8 w-8 m-2" />
                </a>
              </div>
            </div>

            <div>
              <p className="bold">EDUCATION</p>
              <p className="text-xs p-2">
                2020 - 2024: Trường đại học Công nghiệp Tp.HCM
                <br />
                GPA: 3.0
              </p>
            </div>

            <div>
              <p className="bold">LANGUAGE</p>
              <p className="text-xs p-2">
                English: TOEIC:xxx
                <br />
                Vietnamese: Native
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white">
          <div className="flex bold p-4 ">SUMMARY</div>
          <ul className="pl-8 list-disc">
            <li> Học ngu</li>
            <li> Xấu trai</li>
            <li> Nhạt</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
