const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/products', function(req, res) {
    let sql = 'SELECT * FROM Products';
    db.query(sql, function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/products', function(req, res) {
    const newProduct = {
        ProductName: req.body.ProductName,
        Description: req.body.Description,
        Price: req.body.Price,
        Stock: req.body.Stock,
        Category: req.body.Category,
        ImageURL: req.body.ImageURL
    };
    let sql = 'INSERT INTO Products SET ?';
    db.query(sql, newProduct, function(err, result) {
        if (err) throw err;
        res.json({ message: 'Product added', id: result.insertId });
    });
});

module.exports = router;
