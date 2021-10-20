const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port);