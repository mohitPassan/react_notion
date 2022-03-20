const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.API_KEY });

app.get('/', (req, res) => {
    const response = notion.databases.query({
        database_id: process.env.DB_ID,
    });

    response.then((result) => {
        const tasks = result.results;
        res.status(200).json(tasks.map(task => ({
            task: task.properties.Task.title[0].text.content,
            status: task.properties.Status.checkbox
        })));
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Internal server error");
    })
});

app.listen(5000, () => {
    console.log("Backend listening on port 5000");
})