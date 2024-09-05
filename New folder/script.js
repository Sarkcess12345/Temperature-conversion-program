document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const result = document.getElementById('result');
    
    let temperature = parseFloat(tempInput);
    let message = '';

    if (unitSelect === 'C') {
        // Convert Celsius to Fahrenheit
        let fahrenheit = (temperature * 9/5) + 32;
        message = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        // Convert Fahrenheit to Celsius
        let celsius = (temperature - 32) * 5/9;
        message = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }
    
    result.textContent = message;
});