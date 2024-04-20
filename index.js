const express = require("express");
const app = express();


app.use(express.json());
app.set("view engine", "ejs"); // Corrected setting for view engine

app.get("/", async (req, res) => {
 res.render("home")
})

 app.get("/quiz", async (req, res) => {
  const data = require('./question.json');
  res.render("quiz",{data})
 })

 app.get("/result", (req, res) => {
  const correctCount = req.query.correctCount;
  const wrongcount = req.query.wrongcount;  
  res.render("score", { correctCount , wrongcount});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
