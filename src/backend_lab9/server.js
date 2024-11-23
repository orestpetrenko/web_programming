const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Для взаємодії з фронтендом

const app = express();
const db = new sqlite3.Database('./cars.db');

app.use(cors());
app.use(express.json()); // Для роботи з JSON-даними

// Перевірка підключення
app.get('/', (req, res) => {
    res.send('Бекенд працює!');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});

// Отримати всі автомобілі
app.get('/cars', (req, res) => {
    db.all('SELECT * FROM cars', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Отримати авто за ID
app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM cars WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(row);
        }
    });
});

// Додати нове авто
app.post('/cars', (req, res) => {
    const { name, description, year, colors, mileage, horsepower, price, imageUrls } = req.body;
    const query = `
        INSERT INTO cars (name, description, year, colors, mileage, horsepower, price, imageUrls)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, description, year, colors, mileage, horsepower, price, imageUrls];
    db.run(query, values, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: this.lastID });
        }
    });
});

// Оновити авто за ID
app.put('/cars/:id', (req, res) => {
    const { name, description, year, colors, mileage, horsepower, price, imageUrls } = req.body;
    const id = req.params.id;
    const query = `
        UPDATE cars
        SET name = ?, description = ?, year = ?, colors = ?, mileage = ?, horsepower = ?, price = ?, imageUrls = ?
        WHERE id = ?
    `;
    const values = [name, description, year, colors, mileage, horsepower, price, imageUrls, id];
    db.run(query, values, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Авто оновлено!' });
        }
    });
});

// Видалити авто за ID
app.delete('/cars/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM cars WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Авто видалено!' });
        }
    });
});
