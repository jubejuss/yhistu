const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    apartmentNumber: {
        type: Number,
        ref: 'User'
    },
    month: String,
    year: Number,
    waterUsage: Number,
    gasUsage: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
