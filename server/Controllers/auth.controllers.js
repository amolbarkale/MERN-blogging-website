const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

//REG
router.post("/reg", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log("user:", user.password);

    !user && res.status(400).json("wrong credentials");

    const validate = await bcrypt.compare(req.body.password, user.password);

    !validate && res.status(400).json("wrong credentials");
    console.log("user:", user);

    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
