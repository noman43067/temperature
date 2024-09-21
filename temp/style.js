function convertTemperature() {
    let temp = parseFloat(document.getElementById("temp-input").value);
    let fromUnit = document.getElementById("source-unit").value;
    let toUnit = document.getElementById("target-unit").value;
    let result;

    if (fromUnit === "C" && toUnit === "F") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "F" && toUnit === "C") {
        result = (temp - 32) * 5/9;
    } else {
        result = temp; // Same units
    }

    document.getElementById("output").value = result.toFixed(2);
}

function clearFields() {
    document.getElementById('temp-input').value = "";
    document.getElementById('source-unit').value = "C";
    document.getElementById('target-unit').value = "C";
    document.getElementById('output').value = "";
}
