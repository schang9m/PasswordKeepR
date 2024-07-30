const express = require('express');
const router  = express.Router();
const database = require("../db/queries/addUser")
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  res.render('create_password');
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
      console.log(orgID)
      //add the organization id into the newURL
      newURL.organization_id = orgID;
      //pass in the data to add user
      console.log(newURL)
      return database.addUser_Url(newURL);
    })
    .then((newuser) => {
      if(!newuser) {
        return res.send({ error: "error" });
      }
      res.send("🤗");
      //change it to redirect to password page
    })
    .catch((e) => res.send(e));
})

module.exports = router;