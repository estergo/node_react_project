const bcrypt = require('bcryptjs');
const jwt = require('../helpers/jwt');
const UserSchema = require('../models/user');
const mongoose = require('mongoose');
const User = mongoose.model('User', UserSchema);

exports.signup = function (req, res) {
    const newUser = new User(req.body);
    if (!newUser.username || !newUser.password || !newUser.email) {
        handleError(res, 'User and Password are requred fields');
    }
    else {
        newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
        createUser(newUser).then(() => {
            findUserByUsername(newUser.username).then(user => handleSuccess(res, user));
        }).catch(err => handleError(res, 'Oooops! something is wrong. please verify your username and password and try again.'));
    }
};

exports.signin = function (req, res) {
    // const { username, password } = req.body;
    // if (!username || !password) {
    //     handleError(res, 'User and Password are required fields');
    // }
    // findUserByUsername(username).then(user => {
    //     if (!user) handleError(res, 'User not found!');
    //     else {
    //         const result = bcrypt.compareSync(password, user.password);
    //         if (!result) handleError(res, 'Password not valid!');
    //         else {
    //             handleSuccess(res, user);
    //         }

    //     }


    // }).catch(err => {
    //     handleError(res, err);
    // });
};


function createUser(user) {
    return new Promise((resolve, reject) => {
        // const query = `INSERT INTO user (username, email, password) VALUES (?,?,?)`;
        // const userValues = Object.values(user);
        user.save((err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function findUserByUsername(username) {
    return new Promise((resolve, reject) => {
        User.where({
            username: username
        }).findOne((err, user) => {
            if (err) reject(err);
            resolve(user);
        });
    });
}

function handleSuccess(res, user) {
    console.log('@@@@@@@@@@', user)
    const token = jwt.sign({id: user._id});
    res.status(200).send({ success: true, token });
}

function handleError(res, msg) {
    res.status(403).send({ success: false, msg });
}



