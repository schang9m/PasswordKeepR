const db = require('../connection');

const addUser_Url = (user_url) => {
  const { username, url, password, organization_id } = user_url;

  console.log('Adding user URL:', { username, url, password, organization_id });

  return db.query(
    'INSERT INTO url_usernames (username, url, password, organization_id ) VALUES ($1, $2, $3, $4) RETURNING *;',
    [username, url, password, "1"]
  )
  //checking if it works
    // .then(data => {
    //   console.log('Insert successful:', data.rows);
    //   return data.rows;
    // })
    // .catch(err => {
    //   console.error('Error inserting user URL:', err);
    //   throw err;
    // });
};

module.exports = { addUser_Url };
