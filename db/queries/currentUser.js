const db = require('../connection');

const getUsers = (userID) => {
  //getting all the users on the same org base on their user_id
  return db.query('SELECT name FROM users WHERE id = $1);', [userID])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUsers };
