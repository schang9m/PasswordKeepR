const db = require('../connection');

const getUsers = (userID) => {
  //getting all the users on the same org base on their user_id
  return db.query('SELECT * FROM users WHERE organization_id = (SELECT organization_id FROM users WHERE id = $1);', [userID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
