import {
  SiFacebook,
  SiYoutube,
  SiGithub,
  SiTiktok,
  SiGmail,
} from "react-icons/si";
import avatar from "@/image/avatar.jpg";
import omeme from "@/image/omeme.png";
function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 m-2 dark:bg-gray-900  md:grid-cols-3">
        {/* bg-slate-400 */}
        <div className=" p-4 bg-slate-400 dark:bg-gray-900 rounded-xl col-span-2 sm:col-span-3 md:col-span-2 ">
          <img
            className="rounded-full w-20 h-20 border-2  "
            src={avatar}
            alt=""
          />
          <div className="text-2xl text-white bold">Huỳnh Minh Thạo</div>
          <div className="bg-blue-200 mt-2 rounded-xl p-4 dark:bg-gray-900 ">
            <div className="border-dotted border-4 rounded-xl">
              <p className="bold text-slate-400 p-2 border-b-4 border-dotted ">
                CONTACT
              </p>
              <div className="flex p-2 ">
                <a target="blank" href="https://www.facebook.com/mthaone3/">
                  <SiFacebook className="text-[#0866FF] h-8 w-8 m-2" />
                </a>
                <a
                  target="blank"
                  href="https://youtube.com/@thaohuynh5944?si=PlylOeYD-S_PJd0T"
                >
                  <SiYoutube className="text-[#FF0000] h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://www.tiktok.com/@hnim_oaht">
                  <SiTiktok className="text-black h-8 w-8 m-2" />
                </a>
                <a target="blank" href="https://github.com/thaone2">
                  <SiGithub className="text-pink-400 h-8 w-8 m-2" />
                </a>
              </div>
              <p className="flex items-center p-2 ">
                <SiGmail className="text-red-400 h-8 w-8 m-2" />
                <p className=" text-xs text-gray-500">hmt46896@gmail.com</p>
              </p>
              <p className="p-2 text-xs text-gray-500"> Phone: 0925141017</p>
            </div>

            <div className=" mt-2 border-4 border-dotted rounded-xl">
              <p className="bold p-2  text-slate-400 border-b-4 border-dotted">
                EDUCATION
              </p>
              <p className="text-xs p-2 text-gray-500">
                2020 - 2024: Trường đại học Công nghiệp Tp.HCM
                <br />
                GPA: 3.0
              </p>
            </div>

            <div className=" mt-2 border-4 border-dotted rounded-xl">
              <p className="bold p-2  text-slate-400 border-b-4 border-dotted">
                LANGUAGE
              </p>
              <p className="text-xs p-2 text-gray-500">
                English: TOEIC:xxx
                <br />
                Vietnamese: Native
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-1 sm:bg-yellow-200 sm:col-span-0 sm:flex sm:flex-col sm:col-span-3 md:bg-red-200 md:col-span-1 md:flex md:flex-col lg:bg-green-200 2xl:bg-pink-400 ">
          <div className="p-2 bg-gray-400 dark:bg-gray-900 border rounded-xl mx-2 shadow-sm shadow-red-400">
            <p className="flex bold uppercase">Interests</p>
            <ul className="pl-8 list-disc">
              <li> Reading technology news</li>
              <li> Playing badminton </li>
              <li> Singing</li>
            </ul>
          </div>
          <div className="p-2 bg-gray-400 dark:bg-gray-900 border rounded-xl m-2 shadow-sm shadow-blue-400">
            <p className="flex bold uppercase">Objective</p>
            <ul className="pl-8 list-disc">
              <li>
                I am eager to learn many types of front-end technologies,
                including HTML, CSS, JavaScript, ReactJS and Tailwind. I am
                always eager to learn new technologies and improve my skills.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden m-2">
        <div className=" animate-marqueeLeft whitespace-nowrap">
          <img className="w-40 h-40" src={omeme} alt="" />
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className=" animate-marqueeRight whitespace-nowrap">
          <img className="w-40 h-40" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
