const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = require('./database');
const issueHandler = require('./controllers/issue_handler');
const voteHandler = require('./controllers/vote_handler');
const userHandler = require('./controllers/user_handler');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/issue', issueHandler.getIssues);
// app.get('/vote', voteHandler.getVote);
app.post('/signup', userHandler.signup);
app.post('/issue', issueHandler.postIssue);
app.post('/vote', voteHandler.postVote);
app.post('/signin', userHandler.signin);

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
