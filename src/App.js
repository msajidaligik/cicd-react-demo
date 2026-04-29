//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Data loaded from fake API");
    }, 500);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CI/CD Demo</h1>
      <p>{message}</p>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
