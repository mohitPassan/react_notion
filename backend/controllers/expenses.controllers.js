const expensesModel = require('../models/expenses.models');

const getExpenses = (req, res) => {
    let expensesResponse = expensesModel.getExpenses();

    expensesResponse.then((result) => {
        const finalData = result.results.map(item => ({
            id: item.id,
            amount: {
                value: item.properties.Amount.number
            },
            category: {
                value: item.properties.Category.select.name,
                color: item.properties.Category.select.color
            },
            date: {
                value: item.properties.Date.date.start
            },
            description: {
                value: item.properties.Description.title[0].text.content
            },
            modeOfPayment: {
                value: item.properties["Mode of payment"].select.name,
                color: item.properties["Mode of payment"].select.color
            },
            type: {
                value: item.properties.Type.select.name,
            }
        }));
        
        res.status(200).json(finalData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Internal server error");
    })
}

module.exports = {
    getExpenses
}