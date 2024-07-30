const express = require('express');
const router  = express.Router();
const database = require("../db/queries/getpasswords");
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  database.getPassword(userID)
    .then(data => {
      console.log(data)
      res.render('passwords', {data})
    })
    .catch((e) => res.send(e));
});

module.exports = router;