const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cars.db');

db.all("SELECT * FROM cars", [], (err, rows) => {
    if (err) {
        console.error('Помилка запиту:', err.message);
    } else {
        console.log('Дані з таблиці cars:', rows);
    }
});

db.close();
