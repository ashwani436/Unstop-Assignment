import React, { useState, useMemo } from 'react';

// Suppose you are building a weather app that displays temperature information in both Celsius and Fahrenheit.
// You have a component that calculates the temperature in Fahrenheit based on
// the temperature in Celsius.The conversion formula is slightly complex and takes some time to compute.

// In this example, the calculateFahrenheit function is expensive in terms of computation.However, by using useMemo,
// you ensure that the conversion is only recalculated when the celsiusTemperature prop changes. 
// This optimization prevents unnecessary re - calculations and helps improve the performance of your app.

const TemperatureConverter = ({ celsiusTemperature }) => {
  // Calculate Fahrenheit temperature using a complex formula
  const calculateFahrenheit = (celsius) => {
    console.log('Calculating Fahrenheit');
    return (celsius * 9) / 5 + 32;
  };

  // Memoize the calculated Fahrenheit temperature using useMemo
  const fahrenheitTemperature = useMemo(() => calculateFahrenheit(celsiusTemperature), [celsiusTemperature]);

  return (
    <div>
      <p>Celsius Temperature: {celsiusTemperature}°C</p>
      <p>Fahrenheit Temperature: {fahrenheitTemperature}°F</p>
    </div>
  );
};

const TempParent = () => {
  const [celsiusTemp, setCelsiusTemp] = useState(25);

  const handleTempChange = (e) => {
    setCelsiusTemp(Number(e.target.value));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input type="number" value={celsiusTemp} onChange={handleTempChange} />
      <TemperatureConverter celsiusTemperature={celsiusTemp} />
    </div>
  );
};

export default TempParent;



