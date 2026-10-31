import { useState, useEffect } from "react";
import "./App.css";
import { calculateCategory } from "./services/bloodPressureService";
import { validateBloodPressure } from "./services/validationService";
import { getRiskLevel } from "./services/riskService";

function App() {
  const [systolic, setSystolic] = useState("100");
  const [diastolic, setDiastolic] = useState("60");
  const [result, setResult] = useState("");
  const [risk, setRisk] = useState("");
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("bpHistory");

    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("bpHistory", JSON.stringify(history));
  }, [history]);

  const handleSubmit = () => {
    const validationError = validateBloodPressure(systolic, diastolic);

    if (validationError) {
      setError(validationError);
      setResult("");
      return;
    }

    setError("");

    const category = calculateCategory(systolic, diastolic);
    const riskLevel = getRiskLevel(category);

    setResult(category);
    setRisk(riskLevel);

    setHistory((prevHistory) =>
      [
        {
          systolic,
          diastolic,
          category,
          risk: riskLevel,
        },
        ...prevHistory,
      ].slice(0, 5),
    );
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

      <h2>Risk Level</h2>
      <p>{risk}</p>

      <h2>Recent Readings</h2>

      <ul>
        {history.map((reading, index) => (
          <li key={index}>
            {reading.systolic}/{reading.diastolic} - {reading.category} -{" "}
            {reading.risk}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
