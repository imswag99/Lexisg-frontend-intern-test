import { useNavigate } from "react-router-dom";
import data from "../assets/api";
import { useContext } from "react";
import { context } from "../context/Context";

const Home = () => {
  const {question, setQuestion, setLoading, setResponse} = useContext(context);
  const navigate = useNavigate();
  const answerHandler = (e) => {
    e.preventDefault();
    if (question != "") {
      setLoading(true);
      setTimeout(() => {
        setResponse(data);
        setLoading(false);
      }, 3000)
      localStorage.setItem("question", question);
      navigate("/answer");
    }
  };

  return (
    <div className="w-full h-[85%] flex justify-center items-center">
      <form
        onSubmit={answerHandler}
        className="w-[80%] max-sm:w-full max-sm:flex-col flex justify-center items-center gap-10"
      >
        <textarea
          defaultValue={data.question}
          rows={5}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          className="w-[80%] bg-gray-200 p-5 rounded-md text-black outline-none"
          placeholder="Ask anything"
        />
        <button
          type="submit"
          className="bg-gray-900 px-5 py-2 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
