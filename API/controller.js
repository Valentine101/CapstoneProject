const pool = require("../db");
const queries = require('./queries');
//var cloudinary = require('../cloud');

//example code, not really meant to be utilized
const getUsers = (req, res) => {
    //console.log('getting users');
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//get All truples in users and profile table JOINED together
//paginated results as well
//localhost:9000/users?page=3&size=4
const usersPag = (req, res) => {
      const { page, size } = req.query;
      pool.query(queries.usersPag, [page, size], (error, results) => {
            if(error) throw error;
            res.status(200).json(results.rows);
      });
};

//get a single User with their unique id
const userById = (req, res) => {
    const { findId } = req.params;
    pool.query(queries.userById, [findId], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

//filter based on queried varaibles
//sql injection is possible
const filter = (req, res) => {
    const { name, sport, major, afterClass, beforeClass, state } = req.query;
    const q = queries.filter(name, sport, major, afterClass, beforeClass, state);
    console.log(q);
    pool.query(q, (error, results) => {
          if(error) throw error;
          res.status(200).json(results.rows);
    });
    //console.log(queries.filter(name, sport, major, afterClass, beforeClass, state));
};

//create a new user row and profile row
const createUser = async(req, res) => {
    
    const { id, name, email, year, major, sport, city, state, image, socials } = req.body;

    //the moment u try to error trap. it all fails... but if u dont error trap... then it works great. makes no sense
    await pool.query(queries.newUser, [id, name, email]);
    await pool.query(queries.newProf, [id, year, major, sport, city, state, image, socials]);

    res.send("User created");
};

//update a user's first_name based on knowing their user id
const updateUser = (req, res) => {
    const userId = req.params.userId;
    const { name, email, year, major, sport, city, state, image, socials } = req.body;

    pool.query(queries.updateUser, [name, email, userId], (error, results) => {
        if(error) throw error;
    });

    pool.query(queries.updateProf, [year, major, sport, city, state, image, socials, userId], (error, results) => {
        if(error) throw error;
    });

    res.send("User has been updated");
};

//necessary info that does not work when imported.
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dbiwojvjn', 
    api_key: '464683317646295', 
    api_secret: '7VR1Wr6gNUxr3WmIoTmvcr_AAlw' 
});


const uploadImage = (req, res) => {
    const file = req.files.photo;
    //console.log(file);

    cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'userImages',
        height: 275,
        width: 275,
        gravity: 'face',
        crop: "thumb"
    }, function(error, result) {
        //console.log("Error: ", err);
        //console.log("Result: ", result);
        if(error) throw error;
        res.send({
            success: true,
            result
        });
    });
}

module.exports = {
    getUsers,
    usersPag,
    userById,
    createUser,
    updateUser,
    filter,
    uploadImage,
};