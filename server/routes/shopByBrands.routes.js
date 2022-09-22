const express = require("express");
const shopByBrandsRoutes = express.Router();
const dbo = require("../db/db");

shopByBrandsRoutes.route("/brands").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("brands")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
 });

 module.exports = shopByBrandsRoutes;