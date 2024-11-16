import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Text } from "./components/ui/text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>Click me</Button>
      <Text />
    </>
  );
}

export default App;
