import { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return  state + action.value 
    case "dec":
      return state - action.value 
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
export default function CounterReducer2() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);

  //   const setCount = useCounterAction();
  // const { addOne, addFive } = useCounterAction();

  return (
    <div>
      <div>
        <h2>count one is : {count}</h2>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "dec", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h2>count two is : {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatchTwo({ type: "dec", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset2</button>
      </div>
      {/* <button onClick={addFive}>add five</button> */}
    </div>
  );
}
