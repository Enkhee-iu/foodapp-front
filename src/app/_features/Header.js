import CompanyName from "../_icons/CompanyName";
import HutIcon from "../_icons/HutIcon";
import Navigation from "../_icons/Navi";
import Purchase from "../_icons/Purchase";
import Right from "../_icons/Right";
import { UserIcon } from "../_icons/UserIcon";

export default function Header({ openCart }) {
  return (
    <div className="w-full bg-[#18181B] h-[68px] flex justify-center">
      <div className="w-full max-w-[1440px] h-full flex justify-between items-center px-[88px]">
        <div className="flex items-center gap-3">
          <HutIcon />

          <div>
            <CompanyName />
            <p className="text-white text-[12px]">Swift delivery</p>
          </div>
        </div>

        <div className="flex items-center gap-[12.81px]">
          <div className="w-[251px] h-9 rounded-full bg-[#FFFFFF] flex items-center justify-center  gap-1">
            <Navigation />
            <p className="text-[#EF4444] text-xs font-normal">
              Delivery address:
            </p>
            <p className="text-xs font-normal text-[#71717A] ml-1">
              Add Location
            </p>
            <Right className="ml-2" />
          </div>

          <div
            onClick={openCart}
            className="rounded-[50px] bg-white w-9 h-9 flex items-center justify-center cursor-pointer"
          >
            <Purchase />
          </div>

          <div className="rounded-[50px] bg-[#EF4444] w-9 h-9 flex items-center justify-center">
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
