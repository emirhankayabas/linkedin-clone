import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "~/components/Avatar";
import ShowMoreText from "react-show-more-text";

import { FaEarthAmericas } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { RiRepeatLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

import Like from "~/assets/images/icons/like.svg";
import Love from "~/assets/images/icons/love.svg";
import Support from "~/assets/images/icons/support.svg";

export default function Posts() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="bg-primary mb-3 rounded-lg overflow-hidden">
        <div className="flex justify-between p-4">
          <div className="flex">
            <Avatar className={"w-12 h-12 rounded-full object-fill"} />
            <div className="ml-2">
              <h6 className="text-sm text-white text-opacity-90 font-semibold">
                Emirhan Kayabaş
              </h6>
              <span className="block text-xs text-white text-opacity-60">
                Junior Frontend Developer
              </span>
              <span className="flex items-center text-xs text-white text-opacity-60">
                1 gün • &nbsp;
                <FaEarthAmericas />
              </span>
            </div>
          </div>
          <div className="inline-flex justify-center gap-x-1">
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
              <BsThreeDots size={20} />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
              <AiOutlineClose size={20} />
            </button>
          </div>
        </div>
        <div className="px-4">
          <ShowMoreText
            lines={2}
            more="daha fazla gör"
            less={null}
            anchorClass="text-white text-opacity-60 cursor-pointer hover:text-[#71b7fb] font-semibold"
            onClick={handleClick}
            className={`text-sm text-white text-opacity-90 ${
              showMore ? "show-more" : ""
            }`}
          >
            MovieJump+; Marvel, Star Wars, Pixar, Disney, National Geographic ve
            çok daha fazlasına ait içeriklerin yer aldığı dijital yayın
            platformudur.{" "}
            <Link to="/" className="text-[#71b7fb] font-semibold">
              @MovieJump+
            </Link>
          </ShowMoreText>
        </div>
        <div className="px-1 pt-2">
          <div>
            <img
              src="https://emirhankayabas.com.tr/demo/public/thema-v1/images/backdrop/landing-page.png"
              alt="Post Image"
              className="w-full"
            />
          </div>
          <div className="flex justify-between px-4 py-2.5 text-white text-opacity-60 text-xs">
            <div className="flex group cursor-pointer">
              <div className="flex items-center">
                <img src={Like} alt="Like" className="w-4 h-4" />
                <img
                  src={Love}
                  alt="Love"
                  className="w-4 h-4 -ml-1 bg-primary rounded-full"
                />
                <img
                  src={Support}
                  alt="Support"
                  className="w-4 h-4 -ml-1 bg-primary rounded-full"
                />
              </div>
              <span className="group-hover:text-[#71b7fb] group-hover:underline transition-colors">
                793
              </span>
            </div>
            <div>
              <span className="hover:text-[#71b7fb] hover:underline transition-colors cursor-pointer">
                96 yorum
              </span>{" "}
              •{" "}
              <span className="hover:text-[#71b7fb] hover:underline transition-colors cursor-pointer">
                42 paylaşım
              </span>
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto h-[1px] px-4 bg-[#8c8c8c40]"></div>
        <div className="flex px-4 py-1 gap-x-1 text-white text-opacity-90 text-sm font-semibold">
          <div className="py-3 px-2.5 flex flex-1 items-center gap-x-1.5 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
            <GrLike size={24} />
            <span>Beğen</span>
          </div>
          <div className="py-3 px-2.5 flex flex-1 items-center gap-x-1.5 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
            <FaCommentDots size={24} />
            <span>Yorum Yap</span>
          </div>
          <div className="py-3 px-2.5 flex flex-1 items-center gap-x-1.5 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
            <RiRepeatLine size={24} />
            <span>Paylaş</span>
          </div>
          <div className="py-3 px-2.5 flex flex-1 items-center gap-x-1.5 justify-center rounded-md hover:bg-[#ffffff2e] cursor-pointer transition-colors">
            <IoIosSend size={24} />
            <span>Paylaş</span>
          </div>
        </div>
      </div>
    </div>
  );
}
