const express = require("express");
const productsRoutes = express.Router();
const dbo = require("../db/db");

productsRoutes.route("/computers").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("product")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

module.exports = productsRoutes;
