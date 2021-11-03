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
    const allUsers = await pool.query("SELECT * FROM users JOIN profile USING (id)");

    res.json(allUsers.rows);
  } 
  catch (err) {
    console.error(err.message);
    res.send("Error");
  }
});

//get a single User with their unique id
app.get("/user/:id", async(req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query("SELECT * FROM users JOIN profile USING (id) WHERE id = $1",
    [id]);

    res.json(user.rows[0]);
  }
  catch (err) {
    console.error(err.message);
  }
});

//create a new user
app.post("/createUser", async(req, res) => {
  try {
    //console.log(req.body);
    var data = req.body;

    const first_name = data.first_name;
    const last_name = data.last_name;

    //test if a json formated body was submitted with post request
    if(!first_name && !last_name) {
      res.status(418).send({ message: "We need a first & last name!!"});
    } else {
      const newUser = await pool.query("INSERT INTO dummyData (first_name, last_name) VALUES ($1, $2) RETURNING *",
      [first_name, last_name]);

      res.json(newUser.rows[0]);
    }

    
  }catch (err) {
    console.error(err.message);
  }
});


//update a user's first_name
app.put("/updateUser/:id", async(req, res) => {
  try{
    var data = req.body;

    const user_id = req.params.id; //user to change
    //console.log(user_id);
    const newName = data.newName; //value to change to
    //console.log(newName);

    const updateUser = await pool.query(`UPDATE dummyData SET first_name = $1 WHERE user_id = $2 RETURNING *`,
    [newName, user_id]); //the variables are reversed due to the structure of the sql statement

    res.json(updateUser.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});

//delete a user
app.delete("/deleteUser/:id", async(req, res) => {
  try{
    const user_id = req.params.id;

    const deleteUser = await pool.query("DELETE FROM dummyData WHERE user_id = $1 RETURNING *",
    [user_id]);

    res.json(deleteUser.rows);

  } catch(err) {
    console.error(err.message);
  }
});

