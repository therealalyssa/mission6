const express = require("express");
const quickSortSRoutes = express.Router();
const dbo = require("../db/db");
const ObjectId = require("mongodb").ObjectId;

quickSortSRoutes.route("/products").get(function (req, res) {
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

//  quickSortSRoutes.route("/products/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection("product")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//  });

   module.exports = quickSortSRoutes;