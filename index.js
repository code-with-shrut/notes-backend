const express = require('express');
require("dotenv").config();
const cors = require('cors');
const notesRouter = require('./api/v1');
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require('body-parser');
require("./db")
// var router = express.Router();
app.use(express.json());
app.use(cors());

// root (/)
app.get('/', (request, response) => {
    response.send("Hello World");
})

app.use("/notes", notesRouter);

// app.get('/getAuthor', (request, response) => {
//     const author = {
//         name: "Shrut Dorugade",
//         designation: "ASE"
//     }
//     response.json(author);
// })

// app.get('/getAuthors', (request, response) => {
//     const authors = [
//         {
//             name: "Shrut Dorugade",
//             designation: "ASE"
//         },
//         {
//             name: "Pradnya Basarikatti",
//             designation: "SE"
//         }
//     ]
//     // response.json(authors);

//     // If you want to send object with name to array i.e. property
//     response.json({
//         // data: authors
        
//         // authors: authors or
//         authors, // if the key and value is same we can use this syntax (Javascript's syantactic sugar)
//     })
// })

app.listen(port, () => {
    console.log(`Notes backend app running on port http://localhost:${port}`);
})