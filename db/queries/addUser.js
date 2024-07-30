const db = require('../connection');

const addUser_Url = (user_url) => {
  const {username, url, password, organization_id} = user_url
  return db.query('INSERT INTO url_usernames(username, password, organization_id, url) VALUES ($1, $2, $3, $4)RETURNING *;'[username, url, password, 1])
    .then(data => {
      return data.rows;
    });
};

module.exports = { addUser_Url };
