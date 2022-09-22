const express = require("express");
const alyssaQuickSortRoutes = express.Router();
const dbo = require("../db/db");
const ObjectId = require("mongodb").ObjectId;

alyssaQuickSortRoutes.route("/products").get(function (req, res) {
  let db_connect = dbo.getDb("productdb");
  db_connect
    .collection("product")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = alyssaQuickSortRoutes;
