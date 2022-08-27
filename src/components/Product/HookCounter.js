const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <h1>counter: </h1>
      <p>{props.count}</p>
    </div>
  );
};

export default Counter;
