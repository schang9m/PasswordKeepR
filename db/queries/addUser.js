const db = require('../connection');

const addUser_Url = (user_url) => {
  const { username, url, password, organization_id, category } = user_url;

  // Base query
  let query = 'INSERT INTO url_usernames (username, url, password, organization_id';
  let values = [username, url, password, organization_id];
  
  // Check if catergory is provided and append to query and values
  if (category !== undefined && category !== null) {
    query += ', category) VALUES ($1, $2, $3, $4, $5)';
    //add category into the values array
    values.push(category);
  } else {
    query += ') VALUES ($1, $2, $3, $4)';
  }
  query += ' RETURNING *;';

  return db.query(query, values);
};

const user_organization = (user_id) => {
  return db.query(
    'SELECT organization_id FROM users WHERE id = $1', [user_id]
  )
  .then((orgID) => {
    return orgID.rows[0] || null;
  })
  .catch(err => {
    // Log the error and return null
    console.error('Error selecting : organization_id', err);
    return null;
  })
}
module.exports = { addUser_Url, user_organization };
