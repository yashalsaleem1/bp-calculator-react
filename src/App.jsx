import { useState } from "react";
import "./App.css";
import { calculateCategory } from "./services/bloodPressureService";

function App() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const sys = Number(systolic);
    const dia = Number(diastolic);

    if (sys < 70 || sys > 190) {
      setError("Systolic must be between 70 and 190");
      setResult("");
      return;
    }

    if (dia < 40 || dia > 100) {
      setError("Diastolic must be between 40 and 100");
      setResult("");
      return;
    }

    if (sys <= dia) {
      setError("Systolic must be greater than Diastolic");
      setResult("");
      return;
    }

    setError("");

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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Result</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;
