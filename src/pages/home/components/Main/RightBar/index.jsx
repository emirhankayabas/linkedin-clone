import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import FooterLogo from "~/assets/images/footer-logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function RightBar() {
  const [followed, setFollowed] = useState(false);
  return (
    <aside className="w-[300px] min-w-[300px]">
      <div className="mb-2 p-3 bg-primary rounded-lg overflow-hidden">
        <div className="flex justify-between items-center">
          <h6 className="text-white text-opacity-90 font-semibold">
            Akışınıza ekleyin
          </h6>
          <span className="text-white text-opacity-75 cursor-pointer">
            <BsFillInfoSquareFill size={16} />
          </span>
        </div>

        <div className="mt-4 flex gap-y-4 flex-col">
          <Link to="/" className="flex gap-x-3">
            <img
              src="https://i.pravatar.cc/300"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h6 className="text-sm font-semibold text-white text-opacity-90">
                Emirhan Kayabaş
              </h6>
              <span className="text-xs text-white text-opacity-60">
                Şirket • Araştırma
              </span>
              <button
                className="flex items-center justify-center border mt-0.5 text-white text-opacity-90 border-white border-opacity-90 rounded-full py-1 px-4 gap-1 font-semibold hover:bg-white hover:bg-opacity-20 transition-colors"
                onClick={() => setFollowed(!followed)}
              >
                {followed ? <FaCheck size={16} /> : <HiPlus size={16} />}
                {followed ? "Takiptesin" : "Takip Et"}
              </button>
            </div>
          </Link>
          <Link to="/" className="flex gap-x-3">
            <img
              src="https://i.pravatar.cc/301"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h6 className="text-sm font-semibold text-white text-opacity-90">
                Emirhan Kayabaş
              </h6>
              <span className="text-xs text-white text-opacity-60">
                Şirket • Araştırma
              </span>
              <button className="flex items-center justify-center border mt-0.5 text-white text-opacity-90 border-white border-opacity-90 rounded-full py-1 px-4 gap-1 font-semibold hover:bg-white hover:bg-opacity-20 transition-colors">
                <HiPlus size={16} />
                Takip Et
              </button>
            </div>
          </Link>
          <Link to="/" className="flex gap-x-3">
            <img
              src="https://i.pravatar.cc/302"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h6 className="text-sm font-semibold text-white text-opacity-90">
                Emirhan Kayabaş
              </h6>
              <span className="text-xs text-white text-opacity-60">
                Şirket • Araştırma
              </span>
              <button className="flex items-center justify-center border mt-0.5 text-white text-opacity-90 border-white border-opacity-90 rounded-full py-1 px-4 gap-1 font-semibold hover:bg-white hover:bg-opacity-20 transition-colors">
                <HiPlus size={16} />
                Takip Et
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-3">
          <Link
            to="/"
            className="inline-flex items-center gap-x-1 text-white text-opacity-90 text-sm font-semibold hover:bg-white hover:bg-opacity-20 transition-colors px-2 py-1 rounded"
          >
            Tüm tavsiyeleri görüntüle <FaArrowRightLong size={16} />
          </Link>
        </div>
      </div>

      <div className="p-4 flex items-center justify-center flex-wrap">
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Hakkında
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Erişebilirlik
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Yardım Merkezi
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Gizlilik ve Şartlar <FaCaretDown />
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Reklam Tercihleri
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Reklam
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Ticari Hizmetler <FaCaretDown />
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          LinkedIn uygulamasını yükle
        </Link>
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
        >
          Daha Fazla
        </Link>
      </div>

      <div className="flex items-center justify-center text-xs gap-x-0.5 text-white text-opacity-90">
        <img src={FooterLogo} alt="Footer logo" height={14} />
        <div>LinkedIn Corporation © 2024</div>
      </div>
    </aside>
  );
}
