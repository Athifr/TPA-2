const BMIcount = (event) => {
    event.preventDefault();
  
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
  
    if (!height || !weight) {
      alert('Height or weight tidak boleh kosong');
    }
  
    const result = weight / Math.pow(height / 100, 2);
  
    let data = '';
  
    if (result >= 30) {
      data = 'Obesity';
    } else if (result >= 25) {
      data = 'Overweight';
    } else if (result >= 18.5) {
      data = 'Normal weight';
    } else {
      datat = 'Underweight';
    }
  
    const resultHtml = document.getElementById('result');
    resultHtml.innerHTML = `BMI = <b>${result.toFixed(1)}</b> Categories <b>${data}</b>`;
  }
  
  const submit = document.getElementById('submit');
  submit.addEventListener('click', BMIcount);