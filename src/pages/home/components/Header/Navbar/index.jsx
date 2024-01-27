import { Link, NavLink } from "react-router-dom";
import AccountDropdown from "../AccountDropdown";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="ml-auto">
      <ul className="flex items-center relative">
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "nav-link-active" : "") +
              " flex flex-col items-center justify-center min-w-[82px] min-h-[52px]"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span className="text-xs">Ana Sayfa</span>
          </NavLink>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <NavLink
            to="/mynetwork"
            className={({ isActive }) =>
              (isActive ? "nav-link-active" : "") +
              " flex flex-col items-center justify-center min-w-[82px] min-h-[52px]"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span className="text-xs">Ağım</span>
          </NavLink>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <Link
            to="/"
            className="flex flex-col items-center justify-center min-w-[82px] min-h-[52px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span className="text-xs">İş İlanları</span>
          </Link>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <Link
            to="/"
            className="flex flex-col items-center justify-center min-w-[82px] min-h-[52px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span className="text-xs">Mesajlaşma</span>
          </Link>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <Link
            to="/"
            className="flex flex-col items-center justify-center min-w-[82px] min-h-[52px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span className="text-xs">Bildirimler</span>
          </Link>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <AccountDropdown />
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <Link
            to="/"
            className="flex flex-col items-center justify-center min-w-[82px] min-h-[52px] border-l border-[#8c8c8c40]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <span className="flex items-center justify-center text-xs">
              İş için <FaCaretDown />
            </span>
          </Link>
        </li>
        <li className="text-[#ffffffbf] hover:text-white transition-colors relative">
          <Link to="/" className="min-w-[82px] min-h-[52px]">
            <span className="flex items-center justify-center text-xs max-w-32 text-center text-[#e9a53f] hover:text-[#f9c982] underline transition-colors">
              0 TRY ile Premium’u deneyin
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
