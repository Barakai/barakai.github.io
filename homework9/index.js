const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const open = require("open");
const convertFactory = require("electron-html-to");
const axios = require("axios");
const api = require("./api");
const generateHTML = require("./generateHTML");


const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "list",
        name: "color",
        message:"what is your favorite color?",
        choices: ["green", "red", "orange", "blue"]
    }
]

function makeHTML(gitData){
    
    return '<div>' + gitData.username + '</div'
}

function verification(fileName, data){
return fs.watchFileSync(path.join(process.cwd(), fileName), data);
}
async function init(){
    let myAnswers = await inquirer.prompt(questions)
    console.log("myAnswers")
    console.log(myAnswers)
    let myGithubInfo = await axios('https://api.github.com/users/barakai')
    let myHTML = makeHTML(myGithubInfo.data)
    console.log(myGithubInfo)
}

init()