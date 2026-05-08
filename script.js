document.getElementById("convertBtn").addEventListener("click", function() {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  let unitType = document.getElementById("unitType").value;
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let outputValue;

  if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
  }

  // Conversion logic for Length
  if (unitType === "length") {
      if (fromUnit === "meters" && toUnit === "kilometers") outputValue = inputValue / 1000;
      else if (fromUnit === "meters" && toUnit === "miles") outputValue = inputValue / 1609.34;
      else if (fromUnit === "kilometers" && toUnit === "meters") outputValue = inputValue * 1000;
      else if (fromUnit === "kilometers" && toUnit === "miles") outputValue = inputValue / 1.60934;
      else if (fromUnit === "miles" && toUnit === "meters") outputValue = inputValue * 1609.34;
      else if (fromUnit === "miles" && toUnit === "kilometers") outputValue = inputValue * 1.60934;
      else outputValue = inputValue;  // Same unit conversion (Meters to Meters, etc.)
  }

  // Conversion logic for Weight
  else if (unitType === "weight") {
      if (fromUnit === "grams" && toUnit === "kilograms") outputValue = inputValue / 1000;
      else if (fromUnit === "grams" && toUnit === "pounds") outputValue = inputValue * 0.00220462;
      else if (fromUnit === "kilograms" && toUnit === "grams") outputValue = inputValue * 1000;
      else if (fromUnit === "kilograms" && toUnit === "pounds") outputValue = inputValue * 2.20462;
      else if (fromUnit === "pounds" && toUnit === "grams") outputValue = inputValue * 453.592;
      else if (fromUnit === "pounds" && toUnit === "kilograms") outputValue = inputValue * 0.453592;
      else outputValue = inputValue;
  }

  // Conversion logic for Temperature
  else if (unitType === "temperature") {
      if (fromUnit === "celsius" && toUnit === "fahrenheit") outputValue = (inputValue * 9/5) + 32;
      else if (fromUnit === "celsius" && toUnit === "kelvin") outputValue = inputValue + 273.15;
      else if (fromUnit === "fahrenheit" && toUnit === "celsius") outputValue = (inputValue - 32) * 5 / 9;
      else if (fromUnit === "fahrenheit" && toUnit === "kelvin") outputValue = (inputValue - 32) * 5 / 9 + 273.15;
      else if (fromUnit === "kelvin" && toUnit === "celsius") outputValue = inputValue - 273.15;
      else if (fromUnit === "kelvin" && toUnit === "fahrenheit") outputValue = (inputValue - 273.15) * 9/5 + 32;
      else outputValue = inputValue;
  }

  // Conversion logic for Volume
  else if (unitType === "volume") {
      if (fromUnit === "liters" && toUnit === "milliliters") outputValue = inputValue * 1000;
      else if (fromUnit === "liters" && toUnit === "gallons") outputValue = inputValue / 3.78541;
      else if (fromUnit === "milliliters" && toUnit === "liters") outputValue = inputValue / 1000;
      else if (fromUnit === "milliliters" && toUnit === "gallons") outputValue = inputValue / 3785.41;
      else if (fromUnit === "gallons" && toUnit === "liters") outputValue = inputValue * 3.78541;
      else if (fromUnit === "gallons" && toUnit === "milliliters") outputValue = inputValue * 3785.41;
      else outputValue = inputValue;
  }

  // Conversion logic for Time
  else if (unitType === "time") {
      if (fromUnit === "seconds" && toUnit === "minutes") outputValue = inputValue / 60;
      else if (fromUnit === "seconds" && toUnit === "hours") outputValue = inputValue / 3600;
      else if (fromUnit === "minutes" && toUnit === "seconds") outputValue = inputValue * 60;
      else if (fromUnit === "minutes" && toUnit === "hours") outputValue = inputValue / 60;
      else if (fromUnit === "hours" && toUnit === "seconds") outputValue = inputValue * 3600;
      else if (fromUnit === "hours" && toUnit === "minutes") outputValue = inputValue * 60;
      else outputValue = inputValue;
  }

  document.getElementById("outputValue").innerText = `Converted Value: ${outputValue.toFixed(2)}`;
});
