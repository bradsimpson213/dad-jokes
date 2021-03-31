const express = require('express');
require('dotenv').config();

const app = express();
const users = require('./routes/users');

app.use('/users', users);


const { port } = require('./config');

app.listen(port, () => console.log(`Listening on port ${port}...`));