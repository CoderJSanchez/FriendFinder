const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Listening on PORT... ${PORT}`);
});