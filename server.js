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
const apiRoutes = require('./API/routes.js');
app.use(express.json());

//cloudinary
const fileupload = require('express-fileupload');
app.use(fileupload({
  useTempFiles: true
}));

app.use("/", apiRoutes);
