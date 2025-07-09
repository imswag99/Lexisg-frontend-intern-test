import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

const Navbar = () => {
  const {setQuestion} = useContext(context);
  const refreshInput = () => {
    setQuestion("");
    localStorage.removeItem("question")
  }


  return (
    <div className="w-full p-5 bg-gray-300 flex justify-between items-center">
      <h1 className="font-semibold">LEXI-LIKE LEGAL ASSISTANT</h1>
      <Link
        onClick={refreshInput}
        to={"/"}
        className="bg-gray-900 px-5 py-2 text-white rounded-md"
      >Home</Link>
    </div>
  );
};

export default Navbar;
