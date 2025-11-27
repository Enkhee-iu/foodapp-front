import Avatar from "@/app/_icons/Avatar";
import CarBlack from "@/app/_icons/Car";
import CarIcon from "@/app/_icons/Caricon";
import CompanyName from "@/app/_icons/CompanyName";
import CompanyNew from "@/app/_icons/CompanyNew";
import DashBoard from "@/app/_icons/DashBoard";
import HutIcon from "@/app/_icons/HutIcon";
import Plus from "@/app/_icons/Plus";
import Sqr from "@/app/_icons/squer";
import { PlusIcon } from "lucide-react";

export default function Order() {
  return (
    <>
      <div className="flex gap-11 pr-10">
        <div className="w-[205px] h-full p-9">
          <div className="flex items-center gap-2 w-[165px] h-11">
            <HutIcon />
            <div className="flex flex-col w-[100px]">
              <CompanyNew />
              <p className="text-sm text-[#71717A]">Swift delivery</p>
            </div>
          </div>

          <button className="w-[165px] h-10 p-2 px-6 mt-11 flex gap-2 bg-[#18181B] items-center rounded-full">
            <Sqr />
            <p className="text-sm font-medium text-white">Food menu</p>
          </button>

          <button className="w-[165px] h-10 p-2 px-6 mt-11 flex gap-2 items-center rounded-full">
            <CarBlack />
            <p className="text-sm font-medium">Orders</p>
          </button>
        </div>

        <div className="w-[1171px] h-[236px] mt-8">
          <div className="flex justify-end mb-6">
            <Avatar />
          </div>
          <div>
            <div className="w-full h-44 rounded-lg border border-[#E4E4E7] p-6">
              <h1 className="font-semibold text-xl mb-4">Dishes category</h1>

              <div className=" gap-3 grid grid-cols-7">
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>
                <button className="h-9 px-6 border border-[#E4E4E7] rounded-full text-sm">
                  All Dishes
                </button>

                <button className="w-9 h-9 rounded-full bg-[#ef4444] flex items-center justify-center">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="w-[1171px] h-[582px] rounded-xl border mt-6 p-6">
              <h1 className="font-semibold text-xl mb-4">Appetizers</h1>
              <div className="grid grid-cols-4 gap-4">
                <div
                  className="w-[270.75px] h-[241px] flex justify-center items-center rounded-[21px]"
                  style={{
                    border: "2px dashed #EF4444",
                    borderRadius: "21px",
                    borderSpacing: 0,

                    borderStyle: "dashed",
                    borderWidth: "2px",
                  }}
                >
                  <div>
                    <div className="flex justify-center items-center mb-4">
                      <button className="w-9 h-9 rounded-full bg-[#EF4444] flex justify-center items-center">
                        <Plus />
                      </button>
                    </div>
                    <p className="w-[154px] h-10 font-medium text-sm leading-5 text-center">
                      Add new Dish to Appetizers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>{" "}
    </>
  );
}
