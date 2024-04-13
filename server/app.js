const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const expenseRoutes = require('./routes/expenses');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;


// MongoDB ühenduse loomine failist database.js
connectDB();

// Middleware JSON andmete parsimiseks
app.use(express.json());

app.use('/api/expenses', expenseRoutes);
app.use('/api/users', userRoutes);

// Lihtne tervitusmarsruut
app.get('/', (req, res) => {
    res.send('Tere tulemast minu Node.js ja MongoDB serverisse!');
});

// Teine marsruut, näiteks API testiks
app.get('/api', (req, res) => {
    res.json({ message: 'See on API tervitusmarsruut.' });
});

// Serveri käivitamine
app.listen(port, () => {
    console.log(`Server töötab aadressil http://localhost:${port}`);
});
