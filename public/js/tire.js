// calculation automatic amount for tire services.
function calculateAmount() {
    const serviceSelect = document.getElementById('carTireService');
    const amountInput = document.getElementById('amount');
    const selectedService = serviceSelect.value;
  
    if (selectedService === "tirePressure") {
      amountInput.value = "500";
    } else if (selectedService === 'punctureFixing' || selectedService === 'valves') {
      amountInput.value = '5000';
    } else {
      amountInput.value = '';
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const carModelInput = document.getElementById('carTireSize');
    carModelInput.addEventListener('input', calculateAmount);
  });

  

//   function carTireService() {
//     const carTireService = document.getElementById('carTireService').value;
//     const carServicePriceInput = document.getElementById('amount');
    

//     if (carTireService === "tirePressure") {
//       carServicePriceInput.value = "500";
//     } else if (carTireService === "punctureFixing") {
//       carServicePriceInput.value = "5000";
//     } else if (carTireService === "valves") {
//       carServicePriceInput.value = "5000";
//     }
//   }