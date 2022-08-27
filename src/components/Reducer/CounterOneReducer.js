import { useCount,useCounterAction } from "./CounterProviderReducer";
export default function CounterOneReducer() {
  //   const count = useContext(CounterContext);
  //   const setCount = useContext(CounterContextDispatcher);
  const count = useCount();
  //   const setCount = useCounterAction();
  const dispatch = useCounterAction();
// console.log(dispatch);
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>add</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
