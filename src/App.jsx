import './App.css';

function App() {
  return (
    <div className="container">
      <h1>BP Category Calculator</h1>

      <div>
        <label>Systolic Pressure</label>
        <br />
        <input type="number" />
      </div>

      <br />

      <div>
        <label>Diastolic Pressure</label>
        <br />
        <input type="number" />
      </div>

      <br />

      <button>Submit</button>

      <h2>Result</h2>
    </div>
  );
}

export default App;