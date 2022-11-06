require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const todos = require("./routes/todo");

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routing
app.use("/api/todos", todos);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening port
    app.listen(4000, () =>
      console.log("http://localhost:" + process.env.PORT, "& db is running...")
    );
  })
  .catch((error) => {
    console.log(error);
  });
