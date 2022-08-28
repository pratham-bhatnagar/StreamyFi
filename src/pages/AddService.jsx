import Layout from "../layout";
import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import SubABI from "../contract/ABIs/PaymentsABI.json";
function AddService() {
  const [amount, setAmount] = useState(0);
  const [freq, setFreq] = useState(0);
  const contract = GetContract(
    "0x5f0fc8de80835bce957e14c493d1213f6e9bb885",
    SubABI
  );
  const AddSubscription = async () => {
    if (amount > 0 && freq > 0) {
      await contract.createPlan(amount, freq);
    } else {
      alert("Time Stamp or Amount cannot be null");
    }
  };

  return (
    <Layout>
      {" "}
      <div className="flex mt-[10vh] text-black flex-col gap-5">
        {" "}
        <input onChange={(e) => setAmount(e.target.value)} />
        <input onChange={(e) => setFreq(e.target.value)} />
        <button className="bg-white" onClick={() => AddSubscription()}>
          submit
        </button>
      </div>
    </Layout>
  );
}

export default AddService;
