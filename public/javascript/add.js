const addFormHandler = async (event) => {
    event.preventDefault();
  
    const make = document.querySelector('#add-make').value.trim();
    const model = document.querySelector('#add-model').value.trim();
    const year = document.querySelector('#add-year').value.trim();
    const price = document.querySelector('#add-price').value.trim();
    const mileage = document.querySelector('#add-mileage').value.trim();
    const condition = document.querySelector('#add-condition').value.trim();
    const vin = document.querySelector('#add-vin').value.trim();
    const link= document.querySelector('#add-link').value.trim();

    if (make && model && year && price && mileage && condition && vin && link) {
      const response = await fetch('/api/add', {
        method: 'POST',
        body: JSON.stringify({ make, model, year, price, mileage, condition, vin, link }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add car.');
      }
    }
  };
  
  
  document
    .querySelector('.add-form')
    .addEventListener('submit', addFormHandler);
  