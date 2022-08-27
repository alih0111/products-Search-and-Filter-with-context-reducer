import { useState } from "react";
const WithCounter = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    // ... count, increment,...
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};
export default WithCounter;
