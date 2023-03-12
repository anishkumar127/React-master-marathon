import { useCallback, useMemo, useState } from "react";

function Counter() {
  console.log("render Counter");
  const [number, setNumber] = useState(40);

  function handleClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  }

  const fibFunctonMemorized = useCallback(function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }, [])

  const fibMemorized = useMemo(() => fibFunctonMemorized(number), [number, fibFunctonMemorized]);

  return (
    <>
      <h1 style={{ color: "white" }}>{number} | {fibMemorized}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
