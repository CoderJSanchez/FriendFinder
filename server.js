const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
    console.log(`Listening on PORT... ${PORT}`);
});
