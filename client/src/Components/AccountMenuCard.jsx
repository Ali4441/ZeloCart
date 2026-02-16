import React from 'react'
import { FiUser, FiBox, FiXCircle, FiStar, FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const iconMap = {
  user: <FiUser />,
  box: <FiBox />,
  cancel: <FiXCircle />,
  star: <FiStar />,
  logout: <FiLogOut />,
};
const AccountMenuCard = () => {

  const accountMenu = [
    { id: 1, title: "Manage My Account", icon: "user", path: "/account" },
    { id: 2, title: "My Order", icon: "box", path: "/orders" },
    { id: 3, title: "My Cancellations", icon: "cancel", path: "/cancellations" },
    { id: 4, title: "My Reviews", icon: "star", path: "/reviews" },
    { id: 5, title: "Logout", icon: "logout", path: "/Login" },
  ];

  return (
    <div className="w-64 bg-zinc-200/50 rounded-xl shadow-md p-1 top-5 right-0">

      {accountMenu.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className="flex items-center gap-3 py-3 px-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-all duration-200"
        >
          <span className="text-black text-xl hover:text-blue-400">
            {iconMap[item.icon]}
          </span>

          <span className="text-gray-800 font-medium">
            {item.title}
          </span>

        </NavLink>
      ))}

    </div>
  );
}
export default AccountMenuCard
