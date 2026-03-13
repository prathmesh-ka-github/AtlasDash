require('dotenv').config({ path: '.env.development' });
const express = require('express');
// We will use cors later
// const cors = require("cors")
const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended : false}));

const { error } = require("console")
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
