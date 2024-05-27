const bcrypt = require("bcryptjs");
const { User } = require("../db/db");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "secret";

async function register(req, res) {
  const { name, email, password } = req.body;
  if (name === "" || email === "" || password == "")
    return res.send({ message: "invalid name / email / password" });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (await User.findOne({ email })) {
    return res.send({ message: "User already axists" });
  }

  let user = await User.create({
    name,
    email,
    password: hashedPassword,
    isVerified: false,
  });
  res.status(201).send(user);
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ message: "User Not Found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid Password" });

  if (!user.isVerified)
    return res.status(400).json({ message: "User is not verified" });
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
}

async function allUser (req, res) {
    const users = await User.find({});
    res.json(users);
  }

module.exports = {
  register,
  login,
  allUser
};
