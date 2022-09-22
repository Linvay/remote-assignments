const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.get("/data", (req, res) => {
    let number = req.query.number;
    if (!number) {
        res.send("Lack of Parameter");
    }
    else if (isNaN(number)) {
        res.send("Wrong Parameter");
    }
    else {
        number = parseInt(number, 10);
        res.send(`${number * (number + 1) / 2}`);
    }
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});