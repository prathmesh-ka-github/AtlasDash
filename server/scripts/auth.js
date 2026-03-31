const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require("../db/userModal")

require('dotenv').config(
    {
        path: require('path').resolve(__dirname, '../.env.development')
    }
);

//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
const connectionstring = process.env.DB_CONNECTION_STRING;
mongoose.connect(connectionstring).then(() => console.log('✅ Connected to MongoDB'))

// We have to structure the User data after that we can properly alter these functions. We have to do DB arch design first.

async function checkUser(inputuser) {
    try {
        if (await User.findOne({ email: inputuser.email }) !== null && await User.findOne({ username: inputuser.username }) !== null) {
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
    if (user.username !== "" & user.email !== "" & user.password !== "") {
        try {
            let salt = bcrypt.genSaltSync(saltRounds)
            let hashedPassword = bcrypt.hashSync(user.password, salt)
            user.password = hashedPassword
            await User.create(user)
            console.log("User added successfully", user)
        } catch (err) {
            console.error(err.message)
        }
    }
    else {
        throw new Error("Username or Email or Password is empty!");
    }
}

async function getAllUsers() {
    try {
        const data = await User.find()
        return data
    } catch (err) {
        console.error(err)
    }
}

async function getUser(authtoken) {
    try {
        var userDetails = await User.findOne({ token: authtoken});
        if (userDetails == null) {
            return null
        }
        else{return userDetails}
    } catch (err) {
        console.error(err)
    }
}

async function updateToken(useremail, token){
    try {
        await User.updateOne({ email: useremail }, { $set: { token: token } })
    } catch (err) {
        console.error(err)
    }
}

async function comparePass(userpass, dbpassword) {
    let result = bcrypt.compareSync(userpass, dbpassword)
    return result
}

module.exports = { checkUser, addUser, getAllUsers, getUser, updateToken, comparePass };