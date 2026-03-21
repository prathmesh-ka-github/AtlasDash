const bcrypt = require('bcrypt');
const saltRounds = 12;
const myPassword = 'userPassword';
var encriptedpass

const User = require("./userModal")

require('dotenv').config(
    { 
        path: require('path').resolve(__dirname, '../.env.development') 
    }
);

//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
const connectionstring = process.env.DB_CONNECTION_STRING;
mongoose.connect(connectionstring)

// We have to structure the User data after that we can properly alter these functions. We have to do DB arch design first.

async function checkUser(inputuser) {
    try {
        if (await User.findOne({email : inputuser.email}) !== null && await User.findOne({username: inputuser.username}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}

async function addUser(user) {
    if (user.username !=="" & user.email !=="" & user.password !=="") {
        try {
            let salt = bcrypt.genSaltSync(10)
            let hashedPassword = bcrypt.hashSync(user.password , salt)
            user.password = hashedPassword
            await User.create(user)
            console.log("User added successfully", user)      
        } catch (err) {
            console.error(err.message)
        }
    }
}

async function searchUser(inputuser) {
    try {
        if (await User.findOne({email : inputuser.email}) == null) {
            return 0
        }
        else if (await User.findOne({email : inputuser.email}) !== null){
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = { addUser, searchUser, checkUser };