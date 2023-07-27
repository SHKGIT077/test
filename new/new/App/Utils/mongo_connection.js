"use strict";

const mongoose= require("mongoose");
const { dbUri, dbName } = require("./index");

// connect(dbUri, (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   connection.useDb(dbName);
//   console.log("Connected to MongoDB "+dbName);
// });

console.log("dbUri",dbUri);
const mongoDb =
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {mongoDb:mongoDb };
