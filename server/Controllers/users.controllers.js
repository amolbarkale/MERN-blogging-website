const router = require("express").Router();
const User = require("../Models/User");
const Post = require("../Models/Post");
const bcryptJS = require("bcrypt");

//UPDATE
router.put("/update/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcryptJS.genSalt(10);
      req.body.password = await bcryptJS.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json("err", err);
    }
  } else {
    res.status(401).json("You can update only yur account");
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });

        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
      } catch (err) {
        res.status(500).json("err", err);
      }
    } catch (err) {
      res.status(404).json("user not found", err);
    }
  } else {
    res.status(401).json("You can delete only yur account");
  }
});

// GET SINGLE USER

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

module.exports = router;
