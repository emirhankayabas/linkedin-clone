import { useState } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
import Photo from "./Photo";

export default function Posts({ posts }) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          className="bg-primary mb-3 rounded-lg overflow-hidden"
          key={post.id}
        >
          <div className="flex justify-between p-4">
            <div className="flex">
              <Avatar className={"w-12 h-12 rounded-full object-fill"} src={post.author.avatar} />
              <div className="ml-2">
                <h6 className="text-sm text-white text-opacity-90 font-semibold">
                  {post.author.name}
                </h6>
                <span className="block text-xs text-white text-opacity-60">
                  {post.author.job}
                </span>
                <span className="flex items-center text-xs text-white text-opacity-60">
                  {post.date} • &nbsp;
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
              {post.content}
            </ShowMoreText>
          </div>
          <div className="px-1 pt-2 overflow-hidden">
            <div>
              <Photo photos={post.images} />
            </div>
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
                {post.social_counts.like}
              </span>
            </div>
            <div>
              <span className="hover:text-[#71b7fb] hover:underline transition-colors cursor-pointer">
                {post.social_counts.comment} yorum
              </span>{" "}
              •{" "}
              <span className="hover:text-[#71b7fb] hover:underline transition-colors cursor-pointer">
                {post.social_counts.share} paylaşım
              </span>
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
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};
