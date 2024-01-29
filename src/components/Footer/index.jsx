import { Link } from "react-router-dom";
import FooterLogo from "~/assets/images/footer-logo.svg";

import { FaCaretDown } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mb-2 overflow-hidden">
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
    </div>
  );
}
