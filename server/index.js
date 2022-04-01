const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const authRoute = require("./Controllers/auth.controllers");
const userRoute = require("./Controllers/users.controllers");
const postRoute = require("./Controllers/posts.controllers");
const categoriesRoute = require("./Controllers/categories.controllers");
const multer = require("multer");
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then(() => console.log("connnected to DB"))
  .catch((err) => console.log("err", err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoriesRoute);

app.listen("5000", () => {
  console.log("5000 db is working");
});
