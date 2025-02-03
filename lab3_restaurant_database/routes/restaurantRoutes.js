const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// GET all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET restaurants by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
    try {
        const { cuisine } = req.params;
        const restaurants = await Restaurant.find({ cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET restaurants sorted by restaurant_id
router.get('/', async (req, res) => {
    try {
        const { sortBy } = req.query;
        const sortOrder = sortBy === 'DESC' ? -1 : 1;
        const restaurants = await Restaurant.find({}, { _id: 0, restaurant_id: 1, name: 1, cuisine: 1, city: 1 }).sort({ restaurant_id: sortOrder });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET restaurants where cuisine="Delicatessen" and city!="Brooklyn"
router.get('/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find(
            { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
            { _id: 0, name: 1, cuisine: 1, city: 1 }
        ).sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;


