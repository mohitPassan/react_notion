const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const expensesRouter = require('./routers/expenses.router');

app.use('/expenses', expensesRouter);

app.listen(5000, () => {
    console.log("Backend listening on port 5000");
})