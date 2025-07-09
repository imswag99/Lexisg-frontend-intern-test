import { useContext, useEffect } from "react";
import { context } from "../context/Context";
import { ClipLoader } from "react-spinners";
import data from "../assets/api";

const Answer = () => {
  const { question, loading, response, setResponse } = useContext(context);
  
  useEffect(() => {
    setResponse(data);
  }, [])

  return !loading && response ? (
    <div className="w-[80%] mx-auto p-5 flex-col justify-between items-center max-sm:w-full">
      <div className="w-full flex justify-end pb-5">
        <p className="w-[50%] max-sm:w-[80%] rounded-md bg-gray-200 p-5">
          {question}
        </p>
      </div>
      <div className="w-[80%] pt-5">
        <p className="w-full rounded-md bg-gray-200 p-5">{response.answer}</p>
        <p className="w-full pt-3">{response.citations.text}</p>
        <h1 className="pt-3">
          Open this PDF:
          <a
            target="_blank"
            className="underline underline-offset-2 text-blue-700 ml-2"
            href={response.citations.link}
          >
            {response.citations.source}
          </a>
        </h1>
      </div>
    </div>
  ) : (
    <div className="w-[100vw] h-[80%] flex justify-center items-center">
      <ClipLoader />
    </div>
  );
};

export default Answer;
