import PropTypes from "prop-types";
import Avatar from "~/components/Avatar";

import {
  BsThreeDots,
  BsBoxArrowInDownLeft,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from "react-icons/bs";

export default function Header({ active, setActive }) {
  return (
    <header className="flex items-center justify-between hover:bg-[#293138] cursor-pointer transition-colors">
      <div
        className="w-full h-full flex items-center gap-x-1 p-2"
        onClick={() => setActive(!active)}
      >
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
      <div className="text-white text-opacity-90 flex items-center justify-center gap-x-1 p-2">
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
          <BsThreeDots size={16} />
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
          <BsBoxArrowInDownLeft size={16} />
        </button>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <BsChevronCompactUp size={16} />
          ) : (
            <BsChevronCompactDown size={16} />
          )}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
