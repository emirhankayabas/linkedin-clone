import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import Banner from "~/assets/images/banner.jpg";
import Avatar from "~/components/Avatar";

export default function SideBar() {
  return (
    <aside className="w-[225px] min-w-[225px]">
      <div className="mb-2 bg-primary rounded-lg overflow-hidden">
        <div>
          <img src={Banner} alt="banner" className="w-full h-[56px]" />
          <div className="p-3">
            <Link to="/" className="text-center hover:underline group">
              <Avatar
                className={
                  "w-16 h-16 rounded-full border-2 border-primary bg-primary mx-auto mt-[-48px] relative"
                }
              />
              <h6 className="pt-4 font-semibold text-base text-white text-opacity-90 group-hover:text-opacity-100 transition-colors">
                Emirhan Kayabaş
              </h6>
            </Link>
            <span className="font-semibold text-xs text-center block text-white text-opacity-60 mt-1">
              Junior Frontend Developer
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <Link
          to="/mynetwork"
          className="p-3 text-xs block font-semibold hover:bg-[#ffffff2e]"
        >
          <div className="flex justify-between">
            <div className="text-white text-opacity-60">bağlantı</div>
            <div className="text-[#71b7fb]">17</div>
          </div>
          <div>İletişim ağınızı büyütün</div>
        </Link>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <Link
          to="/"
          className="p-3 text-xs block font-semibold hover:bg-[#ffffff2e] group"
        >
          <div>
            <div className="text-white text-opacity-60">
              Özel araç ve içgörülere erişin
            </div>
          </div>
          <div className="group-hover:text-[#71b7fb] hover:underline">
            0 TRY ile Premium’u deneyin
          </div>
        </Link>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <Link
          to="/"
          className="p-3 text-white text-opacity-60 flex items-center text-xs font-semibold hover:bg-[#ffffff2e]"
        >
          <IoBookmark size={16} className="mr-3" />
          <span className="text-white text-opacity-90">Ögelerim</span>
        </Link>
      </div>
      <div className="mb-2 bg-primary rounded-lg overflow-hidden">
        <div className="text-[#71b7fb] text-xs font-semibold pt-3">
          <div className="py-2 pl-3 hover:underline cursor-pointer">
            Gruplar
          </div>
          <div className="py-2 pl-3 flex items-center justify-between hover:underline cursor-pointer">
            <div>Etkinlikler</div>
            <span className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors cursor-pointer">
              <HiPlus size={16} className="text-white text-opacity-75" />
            </span>
          </div>
          <div className="py-2 pl-3 hover:underline cursor-pointer">
            Takip edilen hashtagler
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <Link
          to="/"
          className="p-3 block text-center font-semibold text-sm text-white text-opacity-85 hover:bg-white hover:bg-opacity-20 transition-colors"
        >
          Daha fazla keşfet
        </Link>
      </div>
    </aside>
  );
}
