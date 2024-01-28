import { GoFileMedia } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import { Link } from "react-router-dom";
import Avatar from "~/components/Avatar";
//className=""
export default function NewPost() {
  return (
    <div className="bg-primary mb-3 rounded-lg overflow-hidden p-4 pb-1.5">
      <div className="flex gap-x-2">
        <Link to="/" className="w-14 h-12">
          <Avatar className={"w-12 h-12 rounded-full object-cover"} />
        </Link>

        <button
          type="button"
          className="w-full h-12 rounded-full text-sm flex items-center font-semibold px-4 bg-transparent border cursor-pointer border-white border-opacity-40 hover:bg-[#ffffff2e] transition-colors"
        >
          <span className="text-white text-opacity-90">Gönderi başlat</span>
        </button>
      </div>
      <div className="flex items-center justify-around mt-2">
        <div className="py-3 px-2.5 inline-flex items-center gap-x-2 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
          <GoFileMedia size={20} color="#71b7fb" />
          <span className="text-white text-opacity-90 text-sm font-semibold">
            Medya
          </span>
        </div>
        <div className="py-3 px-2.5 inline-flex items-center gap-x-2 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
          <LuCalendarDays size={20} color="#e9a53f" />
          <span className="text-white text-opacity-90 text-sm font-semibold">
            Etkinlik
          </span>
        </div>
        <div className="py-3 px-2.5 inline-flex items-center gap-x-2 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
          <BsReverseLayoutTextSidebarReverse size={20} color="#f69b81" />
          <span className="text-white text-opacity-90 text-sm font-semibold">
            Yazı yaz
          </span>
        </div>
      </div>
    </div>
  );
}
