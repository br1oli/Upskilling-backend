const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))
app.use(express.json())

app.use("/films", require("./routes/index"))

app.use("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.use(require('./routes/index'))

module.exports = app; 