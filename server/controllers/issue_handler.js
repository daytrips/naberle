const connection = require('../database');

exports.getIssues = (req, res) => {
  const query = 'SELECT * FROM issues;';
  connection.query(query, (err, result) => {
    res.status(200).send(result);
  });
};

exports.postIssue = (req, res) => {
  const { name, type, description, lat, lng, votes, username } = req.body;
  const query = `INSERT INTO issues( name, type, description, lat, lng, user_id ) VALUES("${name}", "${type}", "${description}", "${lat}", "${lng}", (SELECT id FROM users WHERE username="${username}"));`;
  connection.query(query, (err, result) => {
    res.status(200).send(result);
  });
};
