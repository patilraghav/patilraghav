document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Please enter valid positive numbers!';
        result.style.color = 'red';
        return;
    }

    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);
    
    result.innerHTML = `Your BMI is: <strong>${bmi.toFixed(1)}</strong><br>
                        Category: <strong>${category}</strong>`;
    result.style.color = 'black';
});

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}
    