import { useState } from "react";
import "./App.css";
import { calculateCategory } from "./services/bloodPressureService";

function App() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const category = calculateCategory(systolic, diastolic);
    setResult(category);
  };

  return (
    <div className="container">
      <h1>BP Category Calculator</h1>

      <div>
        <label>Systolic Pressure</label>
        <br />
        <input
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Diastolic Pressure</label>
        <br />
        <input
          type="number"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleSubmit}>Submit</button>
      <h2>Result</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;
