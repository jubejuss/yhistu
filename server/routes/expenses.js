const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.post('/add-or-update', async (req, res) => {
    try {
        const { apartmentNumber, month, year, waterUsage, gasUsage } = req.body;

        // Kontrolli, kas kirje juba eksisteerib
        const existingExpense = await Expense.findOne({ 
            apartmentNumber, 
            month, 
            year 
        });

        if (existingExpense) {
            // Uuenda olemasolevat kirjet
            existingExpense.waterUsage = waterUsage;
            existingExpense.gasUsage = gasUsage;
            await existingExpense.save();
            res.status(200).json(existingExpense);
        } else {
            // Loo uus kirje
            const newExpense = new Expense({
                apartmentNumber,
                month,
                year,
                waterUsage,
                gasUsage
            });
            await newExpense.save();
            res.status(201).json(newExpense);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
