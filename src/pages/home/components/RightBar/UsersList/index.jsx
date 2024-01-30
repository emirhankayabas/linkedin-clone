import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

import { HiPlus, HiCheck } from "react-icons/hi";

export default function UsersList({ data }) {
  const [users, setUsers] = useState(data);

  const handleFollow = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <>
      {users.map((user) => (
        <div className="flex gap-x-3" key={user.id}>
          <Link to="/">
            <img
              src={user.author?.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
          </Link>
          <div>
            <Link to="/">
              <h6 className="text-sm font-semibold text-white text-opacity-90">
                {user.author.name}
              </h6>
              <span className="text-xs text-white text-opacity-60">
                {user.author.job}
              </span>
            </Link>
            <button
              onClick={() => handleFollow(user.id)}
              className="flex items-center justify-center border mt-0.5 text-white text-opacity-90 border-white border-opacity-90 rounded-full py-1 px-4 gap-1 font-semibold hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {user.followed ? <HiCheck size={16} /> : <HiPlus size={16} />}
              {user.followed ? "Takiptesin" : "Takip Et"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

UsersList.propTypes = {
  data: PropTypes.array.isRequired,
};
