import { useCount, useCounterAction } from "./CounterProvider";

export default function CounterOne() {
  //   const count = useContext(CounterContext);
  //   const setCount = useContext(CounterContextDispatcher);
  const count = useCount();
//   const setCount = useCounterAction();
  const {addOne,addFive} = useCounterAction();

  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add five</button>
    </div>
  );
}
