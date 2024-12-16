import { Button } from "@repo/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
      <Link to="/menu1">menu1</Link>
    </>
  );
}

export default App;
