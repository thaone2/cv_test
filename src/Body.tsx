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

import { Calendar } from "@/components/ui/calendar";
import avatar from "./image/avatar.jpg";
import React from "react";

function Body() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
                1. Simple Present - Thì hiện tại đơn
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
                  Thể phủ định: S + Do/Does + Not + V
                </p>
                <p className="ml-4 bold text-green-400">
                  Thể nghi vấn: Do/Does + V + O ?
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
                2. Present continuous - Thì hiện tại tiếp diễn
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
        {/* test các phần */}
        {/* <div className="m-4 ">
            <Card className="bg-white rounded-xl shadow-xs">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div> */}
        {/* <div className="m-4 ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border bg-blue-200 text-white rounded-xl shadow-xl"
            />
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

export default Body;
