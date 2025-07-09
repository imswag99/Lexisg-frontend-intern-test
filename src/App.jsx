import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Answer from "./components/Answer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/answer" element={<Answer/>} />
      </Routes>
    </div>
  );
};

export default App;
