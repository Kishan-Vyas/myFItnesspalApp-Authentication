const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;
const router = require("./routes/auth");
const mainRouter = require("./routes/main")

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/auth", router);
app.use("/api/v1/main", mainRouter);


//! connect mongodb
mongoose
  .connect("mongodb://localhost:27017/myfitnesspal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((ans) => {
    console.log("ConnectedSuccessful");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
