import Layout from "../layout";
import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import SubABI from "../contract/ABIs/PaymentsABI.json";

function AddService() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [freq, setFreq] = useState(0);
  const contract = GetContract(
    "0x4A93bCef11b377CE6F0b1eC2C16001daeF8807E0",
    SubABI
  );
  const AddSubscription = async () => {
    if (amount > 0 && freq > 0) {
      await contract.createPlan(
        "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3",
        amount,
        freq,
        name
      );
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
        <input onChange={(e) => setName(e.target.value)} />
        <button className="bg-white" onClick={() => AddSubscription()}>
          submit
        </button>
      </div>
    </Layout>
  );
}

export default AddService;
