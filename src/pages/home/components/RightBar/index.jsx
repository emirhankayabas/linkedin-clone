import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Footer from "~/components/Footer";
import UsersList from "./UsersList";

export default function RightBar() {
  const data = [
    {
      id: 1,
      author: {
        name: "Ezra Jones",
        avatar: "https://i.pravatar.cc/300",
        job: "Şirket • Araştırma",
      },
      followed: true,
    },
    {
      id: 2,
      author: {
        name: "Blue Kane Evans",
        avatar: "https://i.pravatar.cc/301",
        job: "Şirket • Araştırma",
      },
      followed: false,
    },
    {
      id: 3,
      author: {
        name: "Raegan Hart",
        avatar: "https://i.pravatar.cc/302",
        job: "Şirket • Araştırma",
      },
      followed: false,
    },
  ];

  return (
    <aside className="w-[300px] min-w-[300px]">
      <div className="mb-2 p-3 bg-primary rounded-lg overflow-hidden">
        <div className="flex justify-between items-center">
          <h6 className="text-white text-opacity-90 font-semibold">
            Akışınıza ekleyin
          </h6>
          <span className="text-white text-opacity-75 cursor-pointer">
            <BsFillInfoSquareFill size={16} />
          </span>
        </div>

        <div className="mt-4 flex gap-y-4 flex-col">
          <UsersList data={data} />
        </div>

        <div className="mt-3">
          <Link
            to="/"
            className="inline-flex items-center gap-x-1 text-white text-opacity-90 text-sm font-semibold hover:bg-white hover:bg-opacity-20 transition-colors px-2 py-1 rounded"
          >
            Tüm tavsiyeleri görüntüle <FaArrowRightLong size={16} />
          </Link>
        </div>
      </div>
      <Footer />
    </aside>
  );
}
