import {
  SiFacebook,
  SiYoutube,
  SiGithub,
  SiTiktok,
  SiGmail,
} from "react-icons/si";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Calendar } from "@/components/ui/calendar";
import avatar from "./image/avatar.jpg";

function Body() {
  return (
    <div>
      <div className="grid grid-cols-3 m-2">
        {/* bg-slate-400 */}
        <div className=" p-4 bg-slate-400 rounded-xl col-span-3 ">
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
                <SiGmail className="text-green-400 h-8 w-8 m-2" />
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
            {/* Phan viet học tiếng Anh */}
            <div className=" mt-2 p-2 border-4 border-dotted rounded-xl">
              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                1. Simple Present Tense - Thì hiện tại đơn
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: diễn tả một chân lý, một sự thật hiển nhiên, một
                  thói quen, một hành động thường xuyên xảy ra ở hiện tại
                  <br />
                  Example 1: The sun rises in the East
                  <br />
                  Example 2: Mary often goes to school by bicycle
                </p>
                <p className="bold">Khi dùng với động từ thường</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + Vs/es + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + Do/Does + Not + V + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Do/Does + S + V + O ?
                </p>
                <p className="bold">Khi dùng với động từ tobe</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + Am/Is/Are + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + Am/Is/Are + Not + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Am/is/are + S + O ?
                </p>
                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">
                  Always, every, usually, often, generally, frequently, ...
                </p>
              </div>

              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                2. Present Continuous Tense - Thì hiện tại tiếp diễn
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: Diễn tả một hành động đang diễn ra và kéo dài một
                  thời gian ở hiện tại.
                  <br />
                  Example 1: The children are playing football now
                  <br />
                  Example 2: Look! the child is crying
                </p>
                <p className="bold">Công thức</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + be(am/is/are) + V_ing + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + be + Not + V_ing + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Be + S + V_ing + O ?
                </p>

                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">
                  Now, Right now, at present, at the moment, ...
                </p>
              </div>

              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                3. Present Perfect Tense - Thì hiện tại hoàn thành
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: Diễn tả một hành động đã xảy ra hoặc chưa vai giờ
                  xảy ra ở một thời gian không xác định ở quá khứ
                  <br />
                  Example : 1995, I was young, this morning etc
                </p>
                <p className="bold">Công thức</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + have/has + V3 + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + have/has + Not + V3 + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Have/has + S + V3 + O ?
                </p>
                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">
                  already, not ... yet, just, ever, never, since, for, ...
                </p>
              </div>

              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                4. Present Perfect Continuous Tense - Thì hiện tại hoàn thành
                tiếp diễn
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: Nhấn mạnh khoảng thời gian của 1 hành động đã xảy
                  ra trong quá khứ và tiếp tục ở hiện tại (có thể tới tương lai)
                </p>
                <p className="bold">Công thức</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + have/has + been + V_ing + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + haven't/hasn't + been + V_ing + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Have/has + S + been + V_ing + O ?
                </p>
                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">
                  all day, all week, for a long time, and so far, ...
                </p>
              </div>

              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                5. Simple Past Tense - Thì quá khứ đơn
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: Diễn tả hành động đã xảy ra và kết thúc trong quá
                  khứ với thời gian xác định
                  <br />
                  Example: Last night, I cooked chicken curry.
                </p>
                <p className="bold">Khi dùng với động từ thường</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + V_ed + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + Did + Not + V + 0
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Did + S + V + O ?
                </p>
                <p className="bold">Khi dùng với động từ tobe</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + was/were + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + was/were + Not + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Was/were + S + O ?
                </p>
                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">
                  Yesterday, last week, last month, last year, ago ...
                </p>
              </div>

              <h1 className="bold text-white border rounded-xl p-2 text-xl bg-slate-400">
                6. Past Continuous Tense - Thì quá khứ tiếp diễn
              </h1>
              <div>
                <p className="pl-4">
                  Cách dùng: để nói về một sự việc hay hành động bắt đầu hay tồn
                  tại và tiếp diễn ra trong quá khứ. <br />
                  Nó cũng được dùng để chỉ một hành động chưa hoàn thành vì bị
                  gián đoạn bởi một sự việc hay hành động nào đó.
                  <br />
                  Example: I was swimming with David last night when Bob
                  arrived.
                </p>
                <p className="bold">Công thức</p>
                <p className="ml-4 bold text-blue-400">
                  Thể khẳng định: S + was/were + V_ing + O
                </p>
                <p className="ml-4 bold text-red-400">
                  Thể phủ định: S + was/were + not + V_ing + O
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Was/were + S + V-ing + O ?
                </p>
                <p className="bold">Từ nhận biết</p>
                <p className="ml-4">In the past, at, at this time, ...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        {/* <div className="col-span-1 ">
          <div className="p-4 bg-white border rounded-xl mx-4 shadow-sm shadow-red-400">
            <p className="flex bold ">SUMMARY</p>
            <ul className="pl-8 list-disc">
              <li> Học ngu</li>
              <li> Xấu trai</li>
              <li> Nhạt</li>
              <li> Nghèo</li>
            </ul>
          </div>
          <div className="p-4 bg-white border rounded-xl m-4 shadow-sm shadow-blue-400">
            <p className="flex bold ">SKILL</p>
            <ul className="pl-8 list-disc">
              <li> Ăn bám</li>
              <li> Lười biếng</li>
              <li> React JS lỏ</li>
            </ul>
          </div> */}
      </div>
    </div>
  );
}

export default Body;
