const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const jwt = require('./src/helpers/jwt').jwt;
const errorHandler = require('./src/helpers/error-handler');
const PORT = process.env.PORT || 8080;
const password = 'Password';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

// api routes
app.use('/', require('./src/routes'));

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
