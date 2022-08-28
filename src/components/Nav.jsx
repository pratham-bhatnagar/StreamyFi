import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Nav = () => {
  return (
    <nav className="w-full absolute top-0 p-2 flex justify-between">
      <h1 className="text-2xl font-black text-gradient">Web3</h1>

      <ConnectButton accountStatus="avatar" chainStatus="icon" />
    </nav>
  );
};

export default Nav;
