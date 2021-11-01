const Pool = require("pg").Pool;


const pool = new Pool({
    connectionString: "skaogctbmlcmkd@ec2-23-23-162-138.compute-1.amazonaws.com:5432/db4acgn1e8oa4v",
    ssl: {
        rejectUnauthorized: true
    }
});

/*
const pool = new Pool({
    user: "skaogctbmlcmkd",
    password: "sskaogctbmlcmkd",
    database: "db4acgn1e8oa4v",
    host: "ec2-23-23-162-138.compute-1.amazonaws.com",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});*/

module.exports = pool;