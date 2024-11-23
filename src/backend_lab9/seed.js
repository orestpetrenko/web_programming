const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cars.db');

const cars = [
    {
        name: "Toyota Camry",
        description: "Comfortable and reliable sedan...",
        year: 2019,
        colors: "black, white, silver",
        mileage: 15000,
        horsepower: 25,
        price: 12000.5,
        imageUrls: "/car-img1.png,/car-img11.png,/car-img12.png"
    },
    {
        name: "Ford Mustang",
        description: "A legendary sports car...",
        year: 2020,
        colors: "red, blue, black",
        mileage: 35000,
        horsepower: 10,
        price: 30000.0,
        imageUrls: "/car-img2.png,/car_img21.png,/car-img22.png"
    },
    // Додай інші авто сюди...
];

db.serialize(() => {
    cars.forEach(car => {
        db.run(`
            INSERT INTO cars (name, description, year, colors, mileage, horsepower, price, imageUrls)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [car.name, car.description, car.year, car.colors, car.mileage, car.horsepower, car.price, car.imageUrls],
            (err) => {
                if (err) {
                    console.error('Помилка вставлення даних:', err.message);
                } else {
                    console.log('Дані додано успішно.');
                }
            });
    });
});

db.close();
