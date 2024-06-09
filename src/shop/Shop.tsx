import { FaCartShopping } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import logo from "@/image/logo.webp";
import banner from "@/image/slider_1.webp";
import service_1 from "@/image/service_1.webp";
import service_2 from "@/image/service_2.webp";
import service_3 from "@/image/service_3.webp";
import logo1 from "@/image/hebg.jpg";
import sinhtodautay from "@/image/sinhtodautay.webp";
import banner1 from "@/image/banner_1.webp";
import banner2 from "@/image/banner_2.webp";

function Shop() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav className="">
        <ul className="flex justify-around">
          <li>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li className="m-2 text-xl hover:text-red-500">
            <a href="#">Trang chủ</a>
          </li>
          <li className="m-2 text-xl hover:text-red-500">
            <a href="#">Sản phẩm</a>
          </li>
          <li className="m-2 text-xl relative group hover:text-red-500">
            <a href="#">Tin tức</a>
            <ul className="absolute z-10 left-0 w-40 bg-white shadow-lg hidden group-hover:block cursor-pointer text-lg">
              <li className="p-2 hover:bg-red-500 text-black text-sm hover:text-white">
                <a href="#">Tin khuyến mãi </a>
              </li>
              <li className="p-2 hover:bg-red-500 text-black text-sm hover:text-white">
                <a href="#">Mẹo vặt</a>
              </li>
              <li className="p-2 hover:bg-red-500 text-black text-sm hover:text-white">
                <a href="#">Trà sữa ngon</a>
              </li>
            </ul>
          </li>
          <li className="m-2 text-xl hover:text-red-500">
            <a href="#">Giới thiệu</a>
          </li>
          <li className="m-2 text-xl hover:text-red-500">
            <a href="#">Liên hệ</a>
          </li>

          <div className="m-2 text-xl hover:text-red-500">
            <a href="#">
              <FaCartShopping />
            </a>
          </div>
        </ul>
      </nav>
      {/* Body */}
      <div>
        <div className="">
          <section>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <img className="w-full cursor-pointer" src={banner} alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img className="w-full cursor-pointer" src={logo1} alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </section>

          <section className="mx-20 mt-2 w-full">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <div className="flex flex-cols items-center">
                      <img className="m-2" src={service_1} alt="" />
                      <div>
                        <p>Giao hàng miễn phí</p>
                        <p className="text-xs text-gray-400 mt-1  ">
                          Với các đơn hàng từ 100.000đ trở lên
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <div className="flex flex-cols items-center">
                      <img className="m-2" src={service_2} alt="" />
                      <div>
                        <p>Phục vụ nhanh 24/7</p>
                        <p className="text-xs text-gray-400 mt-1">
                          8.00AM - 22h30PM tất cả các ngày trong tuần
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <div className="flex flex-cols items-center">
                      <img className="m-2" src={service_3} alt="" />
                      <div>
                        <p>Đồ uống đa dạng</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Với các đơn hàng từ 100.000đ trở lên
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </section>

          <section className="mt-4">
            <div className="m-4 flex justify-center items-center text-xl">
              Đồ uống khuyến mãi
            </div>
            <img src={sinhtodautay} alt="" />
            <div className="mx-20 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <img className="w-full p-2 rounded-xl" src={banner1} alt="" />
              <img className="w-full p-2 rounded-xl" src={banner2} alt="" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shop;
