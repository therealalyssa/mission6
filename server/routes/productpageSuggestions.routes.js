const express = require("express");
const suggestionsRoutes = express.Router();
const dbo = require("../db/db");

suggestionsRoutes.route("/suggestions").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("suggestions")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

module.exports = suggestionsRoutes;
