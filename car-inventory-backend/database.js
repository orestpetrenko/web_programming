// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Шлях до файлу бази даних SQLite 
const dbPath = path.resolve(__dirname, 'car_inventory.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Помилка підключення до SQLite:', err);
    } else {
        console.log('Підключення до SQLite успішне');
        // Створення таблиці, якщо вона ще не існує
        db.run(`
            CREATE TABLE IF NOT EXISTS cars (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                make TEXT,
                model TEXT,
                year INTEGER,
                price REAL,
                color TEXT,
                mileage INTEGER
            )
        `, (err) => {
            if (err) {
                console.error('Помилка створення таблиці:', err);
            } else {
                console.log('Таблиця "cars" готова');
            }
        });
    }
});

module.exports = db;




