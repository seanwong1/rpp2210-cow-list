const express = require('express');
const path = require('path');
const db = require('../database');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', (req, res) => {
  res.send('Hello from the server!');
})

app.post('/api/cows', (req, res) => {
  db.insertCow(req.body.cowName, req.body.cowDesc, (err, result) => {
    if (err) {
      res.status(404);
    } else {
      res.send('Added a cow');
    }
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
