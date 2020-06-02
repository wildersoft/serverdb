const EXPRESS = require("express");
const NEDB = require("nedb");
const REST = require("express-nedb-rest");
const CORS = require("cors");
const APP = EXPRESS();

const PORT = process.env.PORT || 8080;

const dataStore = new NEDB({
    filename:"mycoffeeapp.db",
    autoload:true
});

const restAPI = REST();
restAPI.addDatastore('coffees', dataStore);

APP.use(CORS());
APP.use('/', restAPI);
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
});