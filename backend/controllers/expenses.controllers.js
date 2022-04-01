const expensesModel = require('../models/expenses.models');

const getExpenses = (req, res) => {
    let expensesResponse = expensesModel.getExpenses();

    expensesResponse.then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getExpenses
}