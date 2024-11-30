// let cars = [];

// Функція для відображення різних вкладок
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

showTab('my-cars'); // Відобразити вкладку "My Cars" при завантаженні сторінки

// Функція для отримання автомобілів з сервера
function fetchCars() {
    fetch('http://localhost:5500/cars')
        .then(response => response.json())
        .then(data => {
            cars = data;
            displayCars(cars);
        })
        .catch(error => console.error('Error fetching cars:', error));
}

fetchCars(); // Завантажуємо список автомобілів після завантаження сторінки

// Функція для створення нового автомобіля
function createCar() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = parseInt(document.getElementById('year').value);
    const price = parseInt(document.getElementById('price').value);
    const color = document.getElementById('color').value;
    const mileage = parseInt(document.getElementById('mileage').value);

    if (!make.trim() || !model.trim() || isNaN(year) || isNaN(price) || !color.trim() || isNaN(mileage)) {
        alert('Please fill in all fields correctly.');
        return false;
    }

    const newCar = { make, model, year, price, color, mileage };

    fetch('http://localhost:5500/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar),
    })
    .then(response => response.json())
    .then(() => {
        fetchCars();
        showTab('my-cars');
    })
    .catch(error => console.error('Error creating car:', error));

    return false;
}

// Функція для відображення списку автомобілів
function displayCars(carArray) {
    const carsList = document.getElementById('cars-list');
    carsList.innerHTML = '';

    carArray.forEach((car) => {
        const carElement = document.createElement('div');
        carElement.classList.add('car-item');
        carElement.innerHTML = `
            <strong>${car.make} ${car.model}</strong><br>
            Year: ${car.year}, Price: $${car.price}, Color: ${car.color}, Mileage: ${car.mileage}<br>
            <button onclick="editCar(${parseInt(car.id)})">Edit</button>
            <button onclick="deleteCar(${parseInt(car.id)})">Delete</button>
        `;
        carsList.appendChild(carElement);
    });
}

// Функція для редагування автомобіля
function editCar(id) {
    id = parseInt(id); // Приводимо до числа
    console.log("Editing car with ID:", id); // Додано для перевірки
    const car = cars.find(car => car.id === id);

    if (!car) {
        console.error("Car not found");
        return;
    }

    document.getElementById('edit-make').value = car.make;
    document.getElementById('edit-model').value = car.model;
    document.getElementById('edit-year').value = car.year;
    document.getElementById('edit-price').value = car.price;
    document.getElementById('edit-color').value = car.color;
    document.getElementById('edit-mileage').value = car.mileage;

    document.querySelector('#edit-car-form').onsubmit = function() {
        return saveCar(id);
    };

    showTab('edit-car');
    document.getElementById('edit-tab').style.display = 'block';
}

// Функція для збереження зміненого автомобіля
function saveCar(id) {
    const make = document.getElementById('edit-make').value;
    const model = document.getElementById('edit-model').value;
    const year = parseInt(document.getElementById('edit-year').value);
    const price = parseInt(document.getElementById('edit-price').value);
    const color = document.getElementById('edit-color').value;
    const mileage = parseInt(document.getElementById('edit-mileage').value);

    if (!make.trim() || !model.trim() || isNaN(year) || isNaN(price) || !color.trim() || isNaN(mileage)) {
        alert('Please fill in all fields correctly.');
        return false;
    }

    const updatedCar = { make, model, year, price, color, mileage };

    fetch(`http://localhost:5500/cars/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCar),
    })
    .then(response => response.json())
    .then(() => {
        fetchCars();
        showTab('my-cars');
        document.getElementById('edit-tab').style.display = 'none';
    })
    .catch(error => console.error('Error saving car:', error));

    return false;
}

// Функція для видалення автомобіля
function deleteCar(id) {
    fetch(`http://localhost:5500/cars/${id}`, { method: 'DELETE' })
        .then(() => {
            fetchCars();
        })
        .catch(error => console.error('Error deleting car:', error));
}

// Функція для сортування автомобілів за ціною
function sortByPrice() {
    cars.sort((a, b) => a.price - b.price);
    displayCars(cars);
}

// Функція для сортування автомобілів за роком
function sortByYear() {
    cars.sort((a, b) => a.year - b.year);
    displayCars(cars);
}

// Функція для підрахунку загальної вартості всіх автомобілів
function calculateTotalPrice() {
    const totalPrice = cars.reduce((sum, car) => sum + car.price, 0);
    alert(`Total Price of all cars: $${totalPrice}`);
}

// Функція для пошуку автомобілів за маркою або моделлю
function searchCars() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(query) || car.model.toLowerCase().includes(query)
    );
    displayCars(filteredCars);
}

function editCar(id) {
    console.log("Editing car with ID:", id); // Додано для перевірки
    const car = cars.find(car => car.id === id);

    if (!car) {
        console.error("Car not found");
        return;
    }

    document.getElementById('edit-make').value = car.make;
    document.getElementById('edit-model').value = car.model;
    document.getElementById('edit-year').value = car.year;
    document.getElementById('edit-price').value = car.price;
    document.getElementById('edit-color').value = car.color;
    document.getElementById('edit-mileage').value = car.mileage;

    document.querySelector('#edit-car-form').onsubmit = function() {
        return saveCar(id);
    };

    showTab('edit-car');
    document.getElementById('edit-tab').style.display = 'block';
}
