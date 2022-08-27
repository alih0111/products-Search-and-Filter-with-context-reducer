import React, { useContext, useState } from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};
export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCounterAction = () => {
  const setCount = useContext(CounterContextDispatcher);
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return { addFive, addOne };
};
