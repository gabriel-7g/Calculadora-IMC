const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    const value = document.getElementById('value');
    const descriptionElement = document.getElementById('desc').querySelector('span');
    
    let description = '';

    if (bmi < 18.5) {
        description = 'Cuidado, você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Você está com o peso normal.';
    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Atenção, você está com sobrepeso.';
    } else {
        description = 'Cuidado, você está com obesidade!';
    }

    value.textContent = bmi;
    descriptionElement.textContent = description;

    document.getElementById('infos').classList.remove('hidden');
});
