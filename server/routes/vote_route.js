var express = require('express');
var router = express.Router();
var connection = require('../database');


// user profiles were not implemented in the front-end,
// but the back-end was designed to take the vote of a user and tie it to an issue,
// such that the same user couldn't vote for the same issue more than once.

router.post('/', function(req, res) {
 let vote = req.body;
 let row = {
  rep_issue_id: vote.issueID,
  user_id: vote.userID
 };
  connection.query('INSERT INTO votes SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
   res.sendStatus(201).end();
  });
});


// Given that there should only be one 'source of truth' for any given data-point,
// the votes schema takes care of two things: 
// (1) keeping track of who voted on what issue; and
// (2) keeping track of how many people have voted on a given issue. (see the schemas.sql file)

// This query takes care of counting the number of votes on an issue.

router.get('/count', function (req, res) {
  let id = req.query.id;
  connection.query('SELECT COUNT (*) FROM votes WHERE rep_issue_id = ' + id, function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
