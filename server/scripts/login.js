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

// Hashing a password
bcrypt.hash(myPassword, saltRounds, function(err, hash) {
    console.log(myPassword);
    encriptedpass = hash
});

// Comparing a password
bcrypt.compare(myPassword, encriptedpass, function(err, result) {
    console.log(result);
    
});

// We have to structure the User data after that we can properly alter these functions. We have to do DB arch design first.


app.post('/login', async(req,res,next) => {
    const user = req.body;
    // console.log(user)
    if (await searchUser(user)) {
        try {
            const dbuser = await User.findOne({email : user.email})
            let checkpass = bcrypt.compareSync(user.password, dbuser.password)
            if (checkpass) {
                var token = jwt.sign({id : dbuser._id}, 'secretkey');
                await User.updateOne({email: user.email}, {$set:{token: token}})
                console.log("successfully logged in!")
                res.redirect('/')
            }
            else {
                throw "ERR - Invalid credentials. Wrong password."
            }
        } catch (err) {
            res.status(401).json({
                "err":"ERR - Invalid Credentials! Try again or head to signin.",
                "code":401
            })
            console.log(err)
        }
    } else {
        res.status(400).json({
            "err":"ERR - Invalid Credentials! Try again or head to signin.",
            "code":400
        })
    }
    next();
})

    app.post('/register', async (req,res,next) => {
        try {
            const user = req.body;
            let result = await checkUser(user)
            if(result) {
                user.token = "none"
                console.log("User not found...Creating new user.")
                addUser(user)   
                res.status(201)
                res.redirect('/login')
            }
            else {
                console.log("ERR - user found")
                // res.redirect('/signin')
                // 400 - Bad request. Error from client side.
                res.status(400).json({
                    "err":"ERR - User already exists! Try again or head to login.",
                    "code":400
                })
            }
            next();
        } catch (error) {
            console.error(error);
        }
    })

app.get('/users', async (req,res) => {
    try {
        let data = await User.find({}, {_id : true})
        res.status(200).json(data);
    } catch (err) {
        console.error(err)
    }
})

app.post('/getuserdetails', async (req,res) => {
    try {
        console.log(req.body)
        const useremail = req.body.useremail
        // console.log('getuserdetails api called')
        const user = await User.findOne({ email: useremail });
        // console.log(user)
        res.json(user)
    } catch (err) {
        console.error(err)
    }
})

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