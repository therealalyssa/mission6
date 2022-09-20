const express = require("express");
const reviewsRoutes = express.Router();
const dbo = require("../db/db");


reviewsRoutes.route("/reviews").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("reviews")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
 });

   module.exports = reviewsRoutes;