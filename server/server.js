require('dotenv').config({ path: '.env.development' });
const express = require('express');
const app = express();
const port = process.env.PORT;

// We will use cors later
// const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const { error } = require("console")
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const auth = require('./scripts/login');

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
    console.log(data)
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
  }
})
app.post('/getuserdetails', async (req, res) => {
  try {
    console.log(req.body)
    const useremail = req.body.useremail
    // console.log('getuserdetails api called')
    const user = await auth.getAllUsers(useremail)
    // console.log(user)
    res.json(user)
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
      const dbuser = await auth.getUser(user.email)
      let checkpass = bcrypt.compareSync(user.password, dbuser.password)
      if (checkpass) {
        var token = jwt.sign({ id: dbuser._id }, 'secretkey');
        await User.updateOne({ email: user.email }, { $set: { token: token } })
        console.log("successfully logged in!")
        res.redirect('/')
      }
      else {
        throw "ERR - Invalid credentials. Wrong password."
      }
    } catch (err) {
      res.status(401).json({
        "err": "ERR - Invalid Credentials! Try again or head to signin.",
        "code": 401
      })
      console.log(err)
    }
  } else {
    res.status(400).json({
      "err": "ERR - Invalid Credentials! Try again or head to signin.",
      "code": 400
    })
  }
  next();
})

app.post('/register', async (req, res, next) => {
  try {
    const user = req.body;
    let result = await auth.checkUser(user)
    if (result) {
      user.token = "none"
      console.log("User not found...Creating new user.")
      auth.addUser(user)
      res.status(201)
      res.redirect('/login')
    }
    else {
      console.log("ERR - user found")
      // res.redirect('/signin')
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

app.get('/users', async (req, res) => {
  try {
    let data = await User.find({}, { _id: true })
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
  }
})

app.post('/getuserdetails', async (req, res) => {
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

app.listen(port, () => {
  console.log(`AtlasDash Server listening on port ${port}`);
});
