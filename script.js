// Car data
const cars = [
    { make: 'Toyota', model: 'Corolla', price: 15000, year: 2018, color: 'Silver', mileage: 45000 },
    { make: 'Honda', model: 'Civic', price: 18000, year: 2020, color: 'Black', mileage: 32000 },
    { make: 'Ford', model: 'Focus', price: 13000, year: 2017, color: 'Blue', mileage: 67000 },
    { make: 'BMW', model: 'X5', price: 40000, year: 2021, color: 'White', mileage: 15000 },
    { make: 'Audi', model: 'A4', price: 25000, year: 2019, color: 'Red', mileage: 30000 }
];

// Function to display cars
function displayCars(carsToDisplay) {
    const carsList = document.querySelector('#cars-list');
    carsList.innerHTML = '';  // Clear the list
    carsToDisplay.forEach(car => {
        carsList.insertAdjacentHTML('beforeend', 
            `<p>${car.year} ${car.make} ${car.model} - $${car.price}, Color: ${car.color}, Mileage: ${car.mileage} miles</p>`
        );
    });
}

// Initially display all cars
displayCars(cars);

// Sort cars by price
function sortByPrice() {
    const sortedCars = cars.sort((a, b) => a.price - b.price);
    displayCars(sortedCars);
}

// Sort cars by year
function sortByYear() {
    const sortedCars = cars.sort((a, b) => b.year - a.year);  // Newer cars first
    displayCars(sortedCars);
}

// Search cars by make or model
function searchCars() {
    const query = document.querySelector('#search-input').value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(query) || 
        car.model.toLowerCase().includes(query)
    );
    displayCars(filteredCars);
}

// Calculate total price of all cars
function calculateTotalPrice() {
    const totalPrice = cars.reduce((total, car) => total + car.price, 0);
    alert(`Total price of all cars: $${totalPrice}`);
}
