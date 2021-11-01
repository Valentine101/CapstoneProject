const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000);


//API start of work
const pool = require("./db");
app.use(express.json());

//API Routes

//get All users in dummyData table
app.get("/allUsers", async(req, res) => {
  try{
    const allUsers = await pool.query("SELECT * FROM dummyData");

    res.json(allUsers.rows);
  } 
  catch (err) {
    console.error(err.message);
    res.send("Error");
  }
});

