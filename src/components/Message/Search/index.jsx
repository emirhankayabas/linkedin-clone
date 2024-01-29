import { FaSearch } from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className="p-2">
      <div className="relative">
        <div className="w-10 h-[34px] flex items-center justify-center absolute t-0 left-0">
          <FaSearch size="16" fill="#ffffffbf" />
        </div>
        <div className="w-10 h-[34px] flex items-center justify-center absolute t-0 right-0 cursor-pointer">
          <IoOptionsSharp size="22" fill="#ffffffbf" />
        </div>
        <input
          type="text"
          className="w-full h-[34px] bg-[#38434f] text-white text-opacity-90 text-sm px-10 rounded-[4px] transition-all placeholder:text-[#989ea4] hover:outline hover:outline-1"
          placeholder="Mesajlarda ara"
        />
      </div>
    </div>
  );
}
