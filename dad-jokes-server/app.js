const express = require('express');
require('dotenv').config();

const app = express();
const users = require('./routes/users');

app.use('/users', users);


const { sequelize } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  // Close database connection when done with it.
  await sequelize.close();
}

main();

const { port } = require('./config');

app.listen(port, () => console.log(`Listening on port ${port}...`));