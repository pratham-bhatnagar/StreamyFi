import React from "react";

export default function Nav() {
  return (
    <nav className="w-full absolute top-0 p-2 flex justify-between">
      <h1 className="text-2xl font-black text-gradient">Export 3</h1>

      <button className=" text-white font-black rounded p-3 cursor-pointer bg-gradient">
        <h1 className="text-yellow-900">Connect Wallet</h1>
      </button>
    </nav>
  );
}
