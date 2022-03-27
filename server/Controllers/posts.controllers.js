const router = require("express").Router();
const User = require("../Models/User");
const Post = require("../Models/Post");

//CREATE NEW POST
router.post("/", async (req, res) => {
  const newPost = await Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const UpdatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).send(UpdatedPost);
      } catch (err) {
        res.status(500).send("err", err);
      }
    } else {
      res.status(401).send("You can update only you post");
    }
  } catch (err) {
    res.status(500).send("err", err);
  }
});

//DALETE POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).send("post has been deleted");
      } catch (err) {
        res.status(500).send("err", err);
      }
    } else {
      res.status(401).send("You can DELETE only you post");
    }
  } catch (err) {
    res.status(500).send("err", err);
  }
});

// GET SINGLE POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

//GET ALL POSTS

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json("err", err);
  }
});
module.exports = router;
