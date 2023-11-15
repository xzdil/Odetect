const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main.html');
});

app.get('/detect', (req, res) => {
    res.sendFile(__dirname + '/views/detect.html');
});

app.get('/history', (req, res) => {
    res.sendFile(__dirname + '/views/history.html');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
