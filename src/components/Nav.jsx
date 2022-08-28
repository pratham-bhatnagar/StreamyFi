import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "wouter";
const Nav = () => {
  return (
    <nav className="w-full absolute top-0 p-2 flex justify-between">
      <h1 className="text-2xl font-black text-gradient">Web3</h1>
      <div className="flex items-center">
        <Link className="px-2" to="/home">
          {" "}
          Home
        </Link>
        <Link className="px-2" to="/incoming">
          {" "}
          Incoming
        </Link>
        <Link className="px-2" to="/outgoing">
          {" "}
          Outgoing
        </Link>
        <Link className="px-2" to="/streams">
          {" "}
          Streams
        </Link>
        <Link className="px-2" to="/add-service">
          Add Service
        </Link>
      </div>
      <ConnectButton accountStatus="avatar" chainStatus="icon" />
    </nav>
  );
};

export default Nav;
