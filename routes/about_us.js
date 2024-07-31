const express = require('express');
const router  = express.Router();
const database = require("../db/queries/addUser");
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  const userID = req.cookies['user_id'];
  res.render('about_us',{userID});
});

module.exports = router;