require("dotenv").config();
const express = require("express");
// const isibodi = require("body-parser");

const app = express();
const port = process.env.API_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on 
http://localhost:${port}`);
});

//ini pake body parser
// app.use(isibodi.json());
// app.use(isibodi.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

const userRoute = require("./src/routes/UserRoute");
app.use("/api/user", userRoute);

const db_mysql = require("./models");
db_mysql.sequelize.sync();
