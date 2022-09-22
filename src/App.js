import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("black");

  useEffect(() => {
    console.log("Color of h1 changed to", color);
  }, [color]);

  function changeColor() {
    if (color === "black") {
      setColor("grey");
    } else {
      setColor("black");
    }
  }
  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("Re-rendered! everytime");
  });

  useEffect(() => {
    console.log("Re-rendered! on count change");
  }, [count]);

  useEffect(() => {
    console.log("Rendered! first time only");
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: color }}>Count: {count}</h1>

      <div className="btns">
        <button onClick={addCount}>Add one</button>
        <button onClick={changeColor}>Change color</button>
        <button onClick={minusCount}>Minus one</button>
      </div>
    </div>
  );
}

export default App;
