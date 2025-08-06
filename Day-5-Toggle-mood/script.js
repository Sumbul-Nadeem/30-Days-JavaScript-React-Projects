function BMICalculator(weight, height) {
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1); // round to 1 decimal

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  } else {
    category = "Invalid values";
  }

  return { bmi, category };
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const resultEl = document.getElementById("result");

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultEl.innerText = "Please enter valid numbers.";
    resultEl.classList.add("show");
    return;
  }

  const { bmi, category } = BMICalculator(weight, height);

  resultEl.innerText = `Your BMI is ${bmi} (${category})`;
  resultEl.classList.add("show");
}


const icon = document.getElementById("icon-on");

icon.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");


  if (document.body.classList.contains("light-theme")) {
    icon.src = "toggle-off.png"; 
  } else {
    icon.src = "toggle-img.png"; 
  }
});

