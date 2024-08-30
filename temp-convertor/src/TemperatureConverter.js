import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState(""); 
  const [result, setResult] = useState("");

  const handleConversion = () => {
    let temp = parseFloat(temperature);
    if (isNaN(temp)) {
      setResult("Please enter a valid number");
      return;
    }

    if (unit === "Celsius") {
      setResult(`${(temp * 9) / 5 + 32} °F`);
    } else if (unit === "Fahrenheit") {
      setResult(`${((temp - 32) * 5) / 9} °C`);
    }
  };

  const clearInput = () => {
    setTemperature("");
    setUnit(""); 
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="title">Temperature Converter</div>
      <div className="display">
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <div className="buttons">
          <button onClick={() => setUnit("Celsius")}>°C</button>
          <button onClick={() => setUnit("Fahrenheit")}>°F</button>
        </div>
      </div>
      <div className="result">
        {unit && (
          <>
            <p>Convert from {unit}</p>
            <button onClick={handleConversion}>Convert</button>
          </>
        )}
        <p>{result}</p>
      </div>
      <div className="buttons">
        <button className="clear" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
