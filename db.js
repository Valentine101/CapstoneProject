const Pool = require("pg").Pool;


/*
const pool = new Pool({
    connectionString: "postgres://skaogctbmlcmkd:930294d71731d37961f9a49e505d121e3dbeb88b9a75fe874a4668e0d6b72183@ec2-23-23-162-138.compute-1.amazonaws.com:5432/db4acgn1e8oa4v",
    ssl: {
        rejectUnauthorized: true
    }
});*/


const pool = new Pool({
    user: "skaogctbmlcmkd",
    password: "930294d71731d37961f9a49e505d121e3dbeb88b9a75fe874a4668e0d6b72183",
    database: "db4acgn1e8oa4v",
    host: "ec2-23-23-162-138.compute-1.amazonaws.com",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;