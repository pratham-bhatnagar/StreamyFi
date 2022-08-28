import React from "react";
import Layout from "../layout";

function AddService() {
  return (
    <Layout>
      <div className="p-[2px] rounded  bg-gradient w-fit">
        <form className="bg-zinc-800 p-3">
          <div className="">
            <label htmlFor="">Yo</label>
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddService;
