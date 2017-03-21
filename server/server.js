var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = require('./database');
var issueRouter = require('./routes/issue_route');
var voteRouter = require('./routes/vote_route');
var userRouter = require('./routes/user_route');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')))

app.use('/issue', issueRouter);
app.use('/vote', voteRouter);
app.use('/user', userRouter);


app.listen(PORT, function () {
  console.log('App is listening on PORT:', PORT);
});
