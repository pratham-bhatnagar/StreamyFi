import React from "react";
import Layout from "../layout";

function Incoming() {
  const mockdata = [
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
    {
      status: "inactive",
      streamID: "#1e3e21d",
      withdrawn: "Yes",
      unlocked: "50",
      actions: "Lorem ip",
    },
  ];
  return (
    <Layout>
      <section className="w-[50vw] mx-auto mt-20">
        <div className="grid grid-cols-5 text-yellow-500 text-xl">
          <h1>Status</h1>
          <h1>Stream ID</h1>
          <h1>Withdrawn</h1>
          <h1>Unlocked (Returned)</h1>
          <h1>Actions</h1>
        </div>
        <div className="">
          {mockdata.map((row) => (
            <ul className="text-slate-200  grid grid-cols-5 text-lg">
              <li className="">{row.status}</li>
              <li className="">{row.streamID}</li>{" "}
              <li className="">{row.withdrawn}</li>
              <li className="">{row.unlocked}</li>{" "}
              <li className="">{row.actions}</li>
            </ul>
          ))}
        </div>
      </section>
      {}
    </Layout>
  );
}

export default Incoming;
