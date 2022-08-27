import React from "react";
import { Link } from "wouter";

const Nav = ({ isAuth, setIsAuth }) => {
  return (
    <nav className="w-full absolute top-0 p-2 flex justify-between">
      <h1 className="text-2xl font-black text-gradient">StreamyFi</h1>
      {isAuth && (
        <ul className="flex items-center">
          <li className="px-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/streams">All Stream</Link>
          </li>
          <li className="px-2">
            <Link to="/incoming">Incoming</Link>
          </li>
          <li className="px-2">
            <Link to="/outgoing">Outgoing</Link>
          </li>
        </ul>
      )}
      <button className=" text-white font-black rounded p-3 cursor-pointer bg-gradient">
        <h1 className="text-yellow-900">Connect Wallet</h1>
      </button>
    </nav>
  );
};

export default Nav;
