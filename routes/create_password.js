const express = require('express');
const router  = express.Router();
const database = require("../db/queries/addUser")
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  res.render('create_password', {userID});
});

router.post('/', (req, res) => {
  const newURL = req.body;
  //check cookie 
  const userID = req.cookies['user_id'];
  if (!userID) {
    return res.status(401).send({error: "Please sign in"})
  }

  database.user_organization(userID)
    .then(organization => {
      let orgID = Object.values(organization)[0];
      orgID = orgID.toString();
      //add the organization id into the newURL
      newURL.organization_id = orgID;
      //pass in the data to add user
      return database.addUser_Url(newURL);
    })
    .then((newuser) => {
      if(!newuser) {
        return res.send({ error: "error" });
      }
      res.redirect('/passwords');
      //change it to redirect to password page
    })
    .catch((e) => res.send(e));
})

module.exports = router;