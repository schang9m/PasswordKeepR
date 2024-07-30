const express = require('express');
const router  = express.Router();
const database = require("../db/queries/addUser")
const cookieParser = require('cookie-parser');

//adding cookie
router.use(cookieParser());

router.get('/', (req, res) => {
  res.render('about_us');
});

module.exports = router;