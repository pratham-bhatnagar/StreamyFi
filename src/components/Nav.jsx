import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
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
          <li className="px-2">
            <Link to="/addService">Add Service</Link>
          </li>
        </ul>
      )}
      <ConnectButton accountStatus="avatar" chainStatus="icon" />
    </nav>
  );
};

export default Nav;
