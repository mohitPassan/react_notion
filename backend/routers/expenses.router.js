const express = require('express');
const router = express.Router();

const { getExpenses } = require('../controllers/expenses.controllers');

router.get('/', getExpenses)

module.exports = router;