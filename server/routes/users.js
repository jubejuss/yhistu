const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Kasutaja lisamine
router.post('/add', async (req, res) => {
    try {
        const { id, name, apartmentNumber, apartmentSize } = req.body;

        const newUser = new User({
            _id: id,  // Määra käsitsi ID
            name,
            apartmentNumber,
            apartmentSize
            // Teised väljad...
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
