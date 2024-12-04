import React from "react";
import LoadingSpinner from "./LoadingSpinner";

type BtnProps = {
  text: string;
  onclick: () => void;
  loading: boolean;
};

const GenerateBtn: React.FC<BtnProps> = ({ text, onclick, loading }) => {
  return (
    <button
      onClick={onclick}
      className="px-4 py-2 w-[200px] rounded-md hover:scale-105 transition-all ease-in-out bg-sky-500 text-white flex justify-center items-center"
    >
      {loading ? <LoadingSpinner /> : text}
    </button>
  );
};

export default GenerateBtn;
