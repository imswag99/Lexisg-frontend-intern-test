import { createContext, useEffect, useState } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("question")) {
      setQuestion(localStorage.getItem("question"));
    }
  }, []);

  return (
    <context.Provider
      value={{
        question,
        setQuestion,
        loading,
        setLoading,
        response,
        setResponse,
      }}
    >
      {children}
    </context.Provider>
  );
};
