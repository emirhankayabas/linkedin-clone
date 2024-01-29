import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "~/components/Footer";

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
                Ezra Jones
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
                Blue Kane Evans
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
                Raegan Hart
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
      <Footer />
    </aside>
  );
}
