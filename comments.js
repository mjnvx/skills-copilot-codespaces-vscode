// create web server
// url: /comments/new
// method: POST
// body: comment
// response: {success: true/false}

// url: /comments
// method: GET
// response: [{id: 1, comment: 'hello world'}, ...]

// url: /comments/1
// method: GET
// response: {id: 1, comment: 'hello world'}

// url: /comments/1
// method: DELETE
// response: {success: true/false}

// url: /comments/1
// method: PUT
// body: comment
// response: {success: true/false}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const uuidv4 = require('uuid/v4');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());