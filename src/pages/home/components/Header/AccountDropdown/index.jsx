import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";

export default function AccountDropdown() {
  return (
    <Menu>
      <Menu.Button className="text-[#ffffffbf] hover:text-white transition-colors flex flex-col items-center justify-center min-w-[82px] min-h-[52px]">
        <img
          src="https://avatars.githubusercontent.com/u/92752721?v=4"
          alt="Avatar"
          className="w-[24px] h-[24px] rounded-full"
        />
        <span className="flex items-center justify-center text-xs">
          Ben <FaCaretDown />
        </span>
      </Menu.Button>
      <Menu.Items className="bg-primary w-72 rounded-[4px] absolute top-full right-0 mt-2">
        <div className="p-2">
          <div className="flex items-center gap-x-2">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/92752721?v=4"
                alt="Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div>
              <h6 className="text-white font-medium">Emirhan Kayabaş</h6>
              <p className="text-[#8d8f91] text-sm">
                Junior Frontend Developer
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="w-full flex items-center justify-center rounded-full border border-[#71b7fb] text-[#71b7fb] text-sm font-semibold py-0.5 mt-2"
          >
            Profili Görüntüleyin
          </Link>
        </div>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <div className="p-2">
          <h6 className="text-white font-medium">Hesap</h6>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                0 TRY ile Premium deneyin
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                Ayarlar ve Gizlilik
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                Yardım
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                Dil
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <div className="p-2">
          <h6 className="text-white font-medium">Yönet</h6>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                Gönderi ve Faaliyetler
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                İş İlanları Yayınlama Hesabı
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="w-full h-[1px] bg-[#8c8c8c40]"></div>
        <div className="p-2">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block text-[#8d8f91] ${active && "underline"}`}
                href="/"
              >
                Oturumu Kapat
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
