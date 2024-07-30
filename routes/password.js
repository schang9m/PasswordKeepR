const express = require('express');
const router  = express.Router();
const database = require("../db/queries/addUser")

router.get('/', (req, res) => {
  res.render('password');
});

router.post('/', (req, res) => {
  const newURL = req.body;
  console.log(newURL);
  database.addUser_Url(newURL)
  .then((newuser) => {
    if(!newuser) {
      return res.send({ error: "error" });
    }
    res.send("🤗");
  })
  .catch((e) => res.send(e));
})

module.exports = router;