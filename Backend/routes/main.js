const express = require("express");
const mainRouter = express.Router();

const { authenticateToken } = require("../middlewares/authenticateToken");
const { allUser } = require("../controllers/auth");

mainRouter.use(authenticateToken)

//! Protected route example
mainRouter.route("/protected").get((req, res) => {
  res.send("User is verified by JWT");
});

//! get all user which is example of Protected route
mainRouter.route("/all-user").get(allUser);


module.exports = mainRouter;