import { useState } from "react";
import "./App.css";
import { calculateCategory } from "./services/bloodPressureService";
import { validateBloodPressure } from "./services/validationService";

function App() {
  const [systolic, setSystolic] = useState("100");
  const [diastolic, setDiastolic] = useState("60");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const validationError = validateBloodPressure(systolic, diastolic);

    if (validationError) {
      setError(validationError);
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
