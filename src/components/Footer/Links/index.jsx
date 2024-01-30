import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FaCaretDown } from "react-icons/fa";

export default function Links({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <Link
          to="/"
          className="py-1 px-2 flex items-center justify-center text-white text-opacity-60 text-xs font-semibold hover:text-[#71b7fb] hover:underline hover:text-opacity-100 transition-colors"
          key={index}
        >
          {link.title}
          {link.dropdown && <FaCaretDown />}
        </Link>
      ))}
    </>
  );
}

Links.propTypes = {
  links: PropTypes.array.isRequired,
};
