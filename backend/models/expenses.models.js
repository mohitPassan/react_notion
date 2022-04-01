const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('@notionhq/client');

class Expenses {
    constructor() {
        this.notion = new Client({ auth: process.env.API_KEY });
    }

    getExpenses() {
        return this.notion.databases.query({
            database_id: process.env.DB_ID,
        });
    }
}

const expenses = new Expenses();

module.exports = expenses;