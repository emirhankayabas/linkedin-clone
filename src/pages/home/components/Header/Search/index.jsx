import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative ml-1">
      <div className="w-10 h-[34px] flex items-center justify-center absolute t-0 left-0">
        <FaSearch size="16" fill="#ffffffbf" />
      </div>
      <input
        type="text"
        placeholder="Arama yap"
        className="w-[280px] h-[34px] bg-gray-800 text-white text-opacity-90 text-sm px-10 rounded-[4px] focus:w-96 transition-all focus:text-base"
      />
    </div>
  );
};

export default Search;
