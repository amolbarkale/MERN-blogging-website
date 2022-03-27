const router = require("express").Router();
const Category = require("../Models/Category");

router.post("/", async (req, res) => {
  const newCat = await Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

router.get("/", async (req, res) => {
  const allCat = await Category.find();
  try {
    res.status(200).json(allCat);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

module.exports = router;
