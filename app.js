const express = require('express');
const app = express();

const { sequelize } = require('./sequelize/models');
const port = 3000;
const path = require("path");


// CONNECT DB:
const connectDb = async () => {
    console.log("Checking database connection...");

    try {
        await sequelize.authenticate();
        console.log("Database connection established");
    } catch(e) {
        console.log("Database connection failed.", e);
        process.exit(1);
    }
}

(async() => {
    await connectDb();
    console.log(`Attempting to run server on port ${port}`);

    app.listen(port, () => {
      console.log(`TMWSD is listening at http://localhost:${port}`)
    });
})();


// MIDDLEWARE FOR PARSING INCOMING REQUESTS:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// CONNECT STATIC ASSETS, STYLING, ETC:
app.use(express.static(path.join(__dirname, "public")));


// CONNECT MESSAGES ROUTES:
const messagesRoute = require('./routes/messages');
app.use('/', messagesRoute);


// USE PUG TEMPLATING TO RENDER DATA:
app.set('view engine', 'pug');
