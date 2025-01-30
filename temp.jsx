import { useState } from "react";

// Temperature Converter Component
const TemperatureConverter = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [convertedValue, setConvertedValue] = useState("");

  const convertTemperature = (value, from, to) => {
    if (isNaN(value) || value === "") return "Invalid input";

    const temp = parseFloat(value);
    let result;

    if (from === "celsius") {
      if (to === "fahrenheit") result = temp * 1.8 + 32;
      else if (to === "kelvin") result = temp + 273.15;
      else result = temp;
    } else if (from === "fahrenheit") {
      if (to === "celsius") result = (temp - 32) / 1.8;
      else if (to === "kelvin") result = (temp - 32) / 1.8 + 273.15;
      else result = temp;
    } else if (from === "kelvin") {
      if (to === "celsius") result = temp - 273.15;
      else if (to === "fahrenheit") result = (temp - 273.15) * 1.8 + 32;
      else result = temp;
    }

    return result.toFixed(2);
  };

  const handleConvert = () => {
    const result = convertTemperature(inputValue, fromUnit, toUnit);
    setConvertedValue(result);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Temperature Converter</h3>
        <div className="mb-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter temperature"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </div>
        <button
          onClick={handleConvert}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-transform duration-300"
        >
          Convert
        </button>
        {convertedValue && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Converted Value: <span className="text-orange-600">{convertedValue}</span>
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
