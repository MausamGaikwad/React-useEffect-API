import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState(""); // will hold the fetched advice

  //Define function outside so it's accessible to both useEffect and button
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice"); //API URL
    const data = await res.json();
    setAdvice(data.slip.advice); // Get the advice string
  }

  useEffect(() => {
    getAdvice();
  }, []); // Empty array means: run only once when the component mounts
  return (
    <div className="app">
      <h1>Random Advice Generator</h1>
      <p className="advice">{advice}</p>
      <button onClick={getAdvice}>Get New Advice</button>
    </div>
  );
}
export default App;
