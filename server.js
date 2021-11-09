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

//get All truples in users and profile table JOINED together
//paginated results as well
//localhost:9000/users?page=3&size=4
app.get("/users", async(req, res) => {
  try{
    const { page, size } = req.query;
    const users = await pool.query("SELECT * FROM users JOIN profile USING (id) LIMIT $2 OFFSET (($1 -1)*$2)",
    [page, size]);

    res.json(users.rows);
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

    const id = data.id;
    const name = data.name;
    const email = data.email;
    const class1 = data.class;
    const major = data.major;
    const sport = data.sport;
    const city = data.city;
    const state = data.state;
    const image = data.image;
    const socials = data.socials;

    //test if a json formated body was submitted with post request
    if(!name && !email && !id) {
      res.status(418).send({ message: "You are missing required variables!!"});
    } else {
      //const newUser = await pool.query("INSERT INTO dummyData (first_name, last_name) VALUES ($1, $2) RETURNING *",
      //[first_name, last_name]);

      const newUser = await pool.query("INSERT INTO users (id, name, email) VALUES ($1, $2, $3) RETURNING *",
      [id, name, email]);

      const newProf = await pool.query("INSERT INTO profile (id, class, major, sport, city, state, image, socials) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [id, class1, major, sport, city, state, image, socials]);

      res.send("User created");

    }

  }catch (err) {
    console.error(err.message);
  }
});


//update a user's first_name based on knowing their user id
app.put("/updateUser/:id", async(req, res) => {
  try{
    var data = req.body;

    const id = req.params.id; //user to change
    //console.log(user_id);
    const name = data.name; //value to change to
    const email = data.email;
    const class1 = data.class;
    const major = data.major;
    const sport = data.sport;
    const city = data.city;
    const state = data.state;
    const image = data.image;
    const socials = data.socials;

    //console.log(newName);

    const updateUser = await pool.query(`UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
    [name, email, id]); //the variables are reversed due to the structure of the sql statement

    const updateProf = await pool.query(`UPDATE profile SET class = $1, major = $2, sport = $3, city = $4, state = $5, image = $6, socials = $7 WHERE id = $8 RETURNING *`,
    [class1, major, sport, city, state, image, socials, id]);

    res.json("User has been Upadated");
  }
  catch (err) {
    console.error(err.message);
  }
});

/* Not sure about ability to delete users yet
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
});*/

