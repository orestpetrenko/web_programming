const sqlite3 = require('sqlite3').verbose();

// Підключення до локальної бази даних (створиться файл cars.db)
const db = new sqlite3.Database('./cars.db', (err) => {
    if (err) {
        console.error('Помилка підключення до БД:', err.message);
    } else {
        console.log('З’єднання з локальною базою даних успішне.');
    }
});

// Створення таблиці
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            year INTEGER,
            colors TEXT,
            mileage REAL,
            horsepower INTEGER,
            price REAL,
            imageUrls TEXT
        )
    `, (err) => {
        if (err) {
            console.error('Помилка створення таблиці:', err.message);
        } else {
            console.log('Таблиця cars створена або вже існує.');
        }
    });
});

// Закриття бази (якщо потрібно)
db.close((err) => {
    if (err) {
        console.error('Помилка закриття бази:', err.message);
    } else {
        console.log('З’єднання з БД закрито.');
    }
});

module.exports = db;
