const express = require('express');
const cors = require('cors');
const db = require('./database'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); 

// Функція для логування запитів
const logRequest = (method, path) => {
    console.log(`Запит: ${method} ${path}`);
};

// Маршрут для отримання списку автомобілів
app.get('/cars', (req, res) => {
    logRequest('GET', '/cars'); 
    const sql = 'SELECT * FROM cars';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Не вдалося отримати список автомобілів:', err);
            res.status(500).json({ error: 'Не вдалося отримати список автомобілів' });
        } else {
            console.log('Список автомобілів отримано успішно.');
            res.json(rows);
        }
    });
});

// Маршрут для додавання нового автомобіля
app.post('/cars', (req, res) => {
    logRequest('POST', '/cars'); 
    const { make, model, year, price, color, mileage } = req.body;
    const sql = 'INSERT INTO cars (make, model, year, price, color, mileage) VALUES (?, ?, ?, ?, ?, ?)';
    const params = [make, model, year, price, color, mileage];
    db.run(sql, params, function (err) {
        if (err) {
            console.error('Не вдалося додати автомобіль:', err);
            res.status(400).json({ error: 'Не вдалося додати автомобіль' });
        } else {
            console.log('Автомобіль додано успішно:', { id: this.lastID, make, model });
            res.status(201).json({ id: this.lastID, make, model, year, price, color, mileage });
        }
    });
});

// Маршрут для редагування автомобіля за його ID
app.put('/cars/:id', (req, res) => {
    const { id } = req.params;
    logRequest('PUT', `/cars/${id}`); 
    const { make, model, year, price, color, mileage } = req.body;
    const sql = 'UPDATE cars SET make = ?, model = ?, year = ?, price = ?, color = ?, mileage = ? WHERE id = ?';
    const params = [make, model, year, price, color, mileage, id];
    db.run(sql, params, function (err) {
        if (err) {
            console.error('Не вдалося оновити автомобіль:', err);
            res.status(400).json({ error: 'Не вдалося оновити автомобіль' });
        } else if (this.changes === 0) {
            console.log(`Автомобіль з ID ${id} не знайдено.`);
            res.status(404).json({ error: 'Автомобіль не знайдено' });
        } else {
            console.log('Автомобіль оновлено успішно:', { id, make, model });
            res.json({ id, make, model, year, price, color, mileage });
        }
    });
});

// Маршрут для видалення автомобіля за його ID
app.delete('/cars/:id', (req, res) => {
    const { id } = req.params;
    logRequest('DELETE', `/cars/${id}`); // Логування запиту
    const sql = 'DELETE FROM cars WHERE id = ?';
    db.run(sql, id, function (err) {
        if (err) {
            console.error('Не вдалося видалити автомобіль:', err);
            res.status(500).json({ error: 'Не вдалося видалити автомобіль' });
        } else if (this.changes === 0) {
            console.log(`Автомобіль з ID ${id} не знайдено.`);
            res.status(404).json({ error: 'Автомобіль не знайдено' });
        } else {
            console.log('Автомобіль видалено успішно:', { id });
            res.status(204).send();
        }
    });
});

// Запуск сервера на порту 5500
app.listen(5500, () => {
    console.log('Server is running on http://localhost:5500');
});
