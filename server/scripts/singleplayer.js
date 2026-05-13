const countryLookup = require("../db/countryLookupModal")

require('dotenv').config(
    {
        path: require('path').resolve(__dirname, '../.env.development')
    }
);

//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
const connectionstring = process.env.DB_CONNECTION_STRING;
mongoose.connect(connectionstring).then(() => console.log('✅ singleplayer module Connected to MongoDB'))

const Game = require('../db/gameModal');

async function getCountries() {
    try {
        const data = await countryLookup.find()
        return data
    } catch (err) {
        console.error(err)
    }
}

async function getCountrybyID(id) {
    try {
        console.log("Finding country with the id of ", id)
        const data = await countryLookup.findOne({ tag: id})
        return data
    } catch (err) {
        console.error(err)
    }
}

async function generateCountryList(){
    // const countries = getCountries()
    let generatedCountries = []
    for (let i = 0; i < 50; i++) {
        while (samenumber = 1) {
            let newint = getRandomInt(1, 50)
            if (generatedCountries.includes(newint)) {
                samenumber = 1
            } else {
                generatedCountries.push(newint)
                samenumber = 0
            }
        }        
    }
    console.log(generatedCountries);
}

async function createGame(gameObj){
    try {
        console.log("Creating new game");
        await Game.create(gameObj)
        console.log("Game created successfully in the DB");
        return 1;
    } catch (error) {
        console.log("An error occured while creating the game - ", error);
        return 0
    }
}

async function updateScore(score, socketID){
    try {
        // console.log("Updating score of ", socketID, " to ", score)
        await Game.updateOne({socketID: socketID}, {$set:{score:score}})
        // console.log("Score updated successfully of ", socketID, " to ", score)
    } catch (error) {
        console.log("An error occured while updating score - ", error)
    }
}
async function updateAnswers(answers, socketID){
    try {
        // console.log("Updating answers of ", socketID, " to ", answers)
        await Game.updateOne({socketID: socketID}, {$set:{answers:answers}})
        // console.log("Answers updated successfully of ", socketID, " to ", answers)
        return 1
    } catch (error) {
        console.log("An error occured while updating answers - ", error)
        return 0
    }
}

async function compareanswers(questions, answers) {
  const correct = [];
  const wrong = [];

  for (let i = 0; i < answers.length; i++) {
    if (questions[i] === answers[i]) {
      correct.push(answers[i]);
    } else {
      wrong.push(answers[i]);
    }
  }

  return { correct, wrong };
}

async function getnextquestion(questions,answers){
    const remainingquestions = questions.slice(answers.length)
    return remainingquestions[0]
}

function generateQuestions() {
    const pool = Array.from({ length: 109 }, (_, i) => i + 1);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 50); // This will return just 50 numbers
}

async function calculatescore(correct, wrong){
    let score = (5 * correct.length) - wrong.length
    return score
}


module.exports = { getCountries, generateQuestions, getCountrybyID, compareanswers, getnextquestion, calculatescore, createGame, updateScore, updateAnswers};