var express = require('express');
var router = express.Router();
var connection = require('../database');

// user profile capabilities were not implemented in the front-end, 
// but the backend has a basic capacity for storing user name and password.
// NOTE: passwords ar enot being encrypted

router.post('/', function (req, res) {
  console.log('fired user route');
  let user = req.body;
  let row = {
    username: user.username, 
    password: user.password
 };
  connection.query('INSERT INTO users SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
   res.sendStatus(201).end();
  });
});

module.exports = router;