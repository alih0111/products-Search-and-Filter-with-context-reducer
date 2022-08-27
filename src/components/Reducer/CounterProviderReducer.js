import React, { useContext, useReducer } from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "dec":
      return state - action.value;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

const CounterProviderReducer = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};
export default CounterProviderReducer;

export const useCount = () => useContext(CounterContext);
export const useCounterAction = () => useContext(CounterContextDispatcher);
