const connection = require('../database');

exports.postVote = (req, porps) => {
  const { name, username } = req.body;
  const query = `SELECT issue_id, user_id FROM users_votes WHERE issue_id=(SELECT id FROM issues WHERE name="${name}") AND user_id=(SELECT id FROM users WHERE username="${username}")`;
  connection.query(query, (err, result) => {
    console.log(result, 'result');
    if (!result.length) {
      const query1 = `INSERT into users_votes(issue_id, user_id) VALUES((SELECT id FROM issues WHERE name="${name}"), (SELECT id FROM users WHERE username="${username}"));`;
      const query2 = 'UPDATE issues SET votes=votes+1';
      connection.query(query1);
      connection.query(query2, (err, result) => {
        porps.send(result);
      });
    } else {
      const query1 = `DELETE from users_votes WHERE issue_id=(SELECT id FROM issues WHERE name="${name}") AND user_id=(SELECT id FROM users WHERE username="${username}");`;
      const query2 = 'UPDATE issues SET votes=votes-1';
      connection.query(query1);
      connection.query(query2, (err, result) => {
        porps.send(result);
      });
    }
    // porps.send(result);
  });
};

// `SELECT votes FROM issues JOIN users_votes ON (SELECT id FROM issues WHERE name="${name}")=users_votes.issue_id JOIN users ON issues.user_id=(SELECT id FROM users WHERE username="${username}")`
