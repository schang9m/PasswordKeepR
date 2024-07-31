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

const filterByCategory = (userID,category) => {
  //check if category is null or undefined
  if (category === undefined || category === 'all') {
    // Query to get all rows where category is NULL
    return db.query(
      'SELECT * FROM url_usernames WHERE organization_id = (SELECT organization_id FROM users WHERE id = $1) ORDER BY id;',
      [userID]
    ).then(data => {
      return data.rows;
    });
  } else {
    //getting all the data via category
    return db.query(
      'SELECT * FROM url_usernames WHERE organization_id = (SELECT organization_id FROM users WHERE id = $1) AND category = $2 ORDER BY id;',
      [userID, category])
      .then(data => {
        return data.rows;
      })
  }
}

const deleteInfo = (userID) => {
  return db.query(
    `DELETE FROM url_usernames WHERE id = $1`,
    [userID])
    .then(data => {
      return data.rows;
    })
}

module.exports = { getPassword, updateInfo, filterByCategory, deleteInfo};
