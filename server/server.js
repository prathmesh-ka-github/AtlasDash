require('dotenv').config({ path: '.env.development' });
const express = require('express');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT;

// We will use cors later
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { error } = require("console")
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: process.env.CORS_PERMISSION,
  methods: ['GET', 'POST'],
  credentials: true  
}))

const auth = require('./scripts/auth');
const singleplayer = require('./scripts/sinpleplayer');

//!-------------GET REQUESTS-------------

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Login screen');
});

app.get('/users', async (req, res) => {
  try {
    let data = await auth.getAllUsers()
    // console.log(data)
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
  }
})

app.get('/countrylookup', async (req, res) => {
  try {
    let data = await singleplayer.getCountries()
    // console.log(data)
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
  }
})

//!-------------POST REQUESTS-------------

app.post('/login', async (req, res, next) => {
  const user = req.body;
  // console.log(user)
  if (await auth.checkUser(user)) {
    try {
      const dbuser = await auth.getUserFromEmail(user.email)
      console.log(dbuser);
      
      let checkpass = auth.comparePass(user.password, dbuser.password)
      if (checkpass) {
        var token = jwt.sign({ id: dbuser._id }, 'secretkey');
        auth.updateToken(user.email, token)
        console.log(user.email, " ", "successfully logged in!")

        res.status(200).json({
          "message": "user logged in successfully",
          "code": 200,
          "token": token
        })
      }
      else {
        throw "ERR - Invalid credentials. Wrong password."
      }
    } catch (err) {
      res.status(401).json({
        "err": "ERR - Invalid Credentials! Try again.",
        "code": 401
      })
      console.log(err)
    }
  } else {
    res.status(400).json({
      "err": "ERR - User dosen't exist. Head to Register User.",
      "code": 400
    })
  }
  next();
})

app.post('/register', async (req, res, next) => {
  try {
    const user = req.body;
    // console.log(user)
    let result = await auth.checkUser(user)
    if (result) {
      user.token = "none"
      user.bio = ""
      console.log("User not found...Creating new user.")
      auth.addUser(user)
      res.status(201)
      res.redirect('/login')
    }
    else {
      console.log("ERR - user found")
      // 400 - Bad request. Error from client side.
      res.status(400).json({
        "err": "ERR - User already exists! Try again or head to login.",
        "code": 400
      })
    }
    next();
  } catch (error) {
    console.error(error);
  }
})

app.post('/getuserdetails', async (req, res) => {
  try {
    // console.log(req.body)
    const token = req.cookies.authtoken;
    if (token == undefined) {
      console.log("Token is undefined")
      res.status(401).json({
        "err":"Token authentication unsuccessful",
        "code":401
      })
    } else {
      const user = await auth.getUser(token)
      console.log("This gets back from db",user)
      if(user !== null){
        res.status(202).json(user)
      } else {
        res.status(401).json({
          "err":"Token authentication unsuccessful",
          "code":401
        })
      }
    }
  } catch (err) {
    console.error(err)
  }
})

app.listen(port, () => {
  console.log(`AtlasDash Server listening on port ${port}`);
});