const db = require('../connection');

const getPassword = (userID) => {
  //getting all the users on the same org base on their user_id
  return db.query(
    'SELECT * FROM url_usernames WHERE organization_id = (SELECT organization_id FROM users WHERE id = $1) ORDER BY id;',
     [userID])
    .then(data => {
      return data.rows;
    });
};

const updateInfo = (userID, { username, URL, password, category }) => {
  //getting all the users on the same org base on their user_id
  return db.query(
    'UPDATE url_usernames SET username = $1, url = $2, password = $3, category = $4 WHERE id = $5;', 
    [username, URL, password, category, userID])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getPassword, updateInfo };
