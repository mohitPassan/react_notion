const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Working");
});

app.listen(5000, () => {
    console.log("Backend listening on port 5000");
})