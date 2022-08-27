import React from "react";

function Table({ data }) {
  return (
    <>
      <div className="grid grid-cols-5 text-yellow-500 text-xl">
        <h1>Status</h1>
        <h1>Stream ID</h1>
        <h1>Withdrawn</h1>
        <h1>Unlocked (Returned)</h1>
        <h1>Actions</h1>
      </div>
      <div className="">
        {data.map((row) => (
          <ul className="text-slate-200  grid grid-cols-5 text-lg">
            <li className="">{row.status}</li>
            <li className="">{row.streamID}</li>{" "}
            <li className="">{row.withdrawn}</li>
            <li className="">{row.unlocked}</li>{" "}
            <li className="">{row.actions}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Table;
