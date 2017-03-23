const connection = require('../database');

// user profile capabilities were not implemented in the front-end,
// but the backend has a basic capacity for storing user name and password.
// NOTE: passwords ar enot being encrypted

exports.signup = (req, res) => {
  const { username, password } = req.body;

  const query = `INSERT INTO users(username, password) VALUES ("${username}", "${password}");`;
  connection.query(query, (err, result) => {
    if (err) res.status(422).send({ error: 'username already exists' });
    res.status(200).send(result);
  });
};

exports.signin = (req, res) => {
  const query = `SELECT * FROM users WHERE username="${req.body.username}";`;
  connection.query(query, (err, result) => {
    if (!result.length) res.status(422).send({ error: 'username not found' });
    if (req.body.password === result[0].password) {
      res.status(200).send(result);
    } else {
      res.status(422).send({ error: 'password is incorrect' });
    }
  });
};
