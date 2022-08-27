import { useReducer } from "react";

const initialstate = {
  firstCounter: 0,
  secondCounter: 0,
};

export default function CounterReducer() {
  //   const count = useContext(CounterContext);
  //   const setCount = useContext(CounterContextDispatcher);
  // const count = useCount();

  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "dec":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "add2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "dec2":
        return { ...state, secondCounter: state.secondCounter - action.value };

      case "reset":
        return initialstate;
      default:
        return state;
    }
  }, initialstate);

  //   const setCount = useCounterAction();
  // const { addOne, addFive } = useCounterAction();

  return (
    <div>
      <h2>count one is : {count.firstCounter}</h2>
      <h2>count two is : {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "dec", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "dec2", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {/* <button onClick={addFive}>add five</button> */}
    </div>
  );
}
