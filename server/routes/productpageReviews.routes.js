const express = require("express");
const reviews2 = express.Router();
const dbo = require("../db/db");

reviews2.route("/reviews2").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("reviews2")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

module.exports = reviews2;
