const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(require("./routes/quickSortSonja.routes.js"));
app.use(require("./routes/homepageReviews.routes.js"));
app.use(require("./routes/productpageComputers.routes.js"));
app.use(require("./routes/quicksortAlyssa.routes.js"));

app.use(require("./routes/productpageSuggestions.routes.js"));
app.use(require("./routes/productpageReviews.routes.js"));

// get driver connection
const dbo = require("./db/db.js");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
