// code reference: https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09
const express = require("express");
const app = express();
const port = 3000;

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