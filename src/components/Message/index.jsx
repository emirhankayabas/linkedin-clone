import { useState } from "react";
import Avatar from "../Avatar";
import Divrider from "../Divrider";

import {
  BsThreeDots,
  BsBoxArrowInDownLeft,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from "react-icons/bs";
import Tabs from "./Tabs";
import Search from "./Search";

export default function Message() {
  const [active, setActive] = useState(false);
  return (
    <aside
      className={`fixed bottom-0 right-2 w-72 bg-primary rounded-tl-lg rounded-tr-lg overflow-hidden border border-[#8c8c8c40] h-12 z-20 transition-all ${
        active ? "h-[calc(100vh-100px)]" : "h-12"
      }`}
    >
      <header
        className="p-2 flex items-center justify-between hover:bg-[#293138] cursor-pointer transition-colors"
        onClick={() => setActive(!active)}
      >
        <div className="flex items-center justify-center gap-x-1">
          <div className="relative">
            <Avatar className="w-8 h-8 rounded-full" />
            <span className="w-3 h-3 block absolute right-0 bottom-0 border-2 border-primary rounded-full bg-green-500">
              &nbsp;
            </span>
          </div>
          <span className="text-sm font-semibold text-white text-opacity-90">
            Mesajlaşma
          </span>
        </div>
        <div className="text-white text-opacity-90 flex items-center justify-center gap-x-1">
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
            <BsThreeDots size={16} />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
            <BsBoxArrowInDownLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
            {active ? (
              <BsChevronCompactUp size={16} />
            ) : (
              <BsChevronCompactDown size={16} />
            )}
          </button>
        </div>
      </header>
      <Divrider />
      <Search />
      <Tabs />
    </aside>
  );
}
